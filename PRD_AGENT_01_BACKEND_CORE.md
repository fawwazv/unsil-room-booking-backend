# Context Diet Pack — Aplikasi Booking Ruangan Universitas Siliwangi

Dokumen ini adalah potongan PRD khusus untuk AI agent dengan token terbatas.
Gunakan file ini bersama `AI_RULES.md` di folder yang sama.

## Hirarki Dokumen

1. `PRD_AGENT_XX_*.md` = konteks utama untuk agent role tersebut.
2. `AI_RULES.md` = aturan lokal yang wajib dibaca setiap prompt.
3. `MICRO_TASKS.md` = daftar task kecil agar agent tidak mengerjakan fitur terlalu besar.
4. `prd.md` global tetap menjadi sumber kebenaran terakhir jika ada konflik, tetapi jangan diberikan penuh ke agent kecuali perlu audit besar.

## Product Snapshot

Nama aplikasi: **Aplikasi Booking Ruangan Universitas Siliwangi**

Target platform:
- Mobile Android untuk user menggunakan Flutter.
- Web Admin menggunakan Flutter Web.
- Backend bersama menggunakan Express.js + TypeScript + Prisma + Supabase PostgreSQL.

Role:
- `user`
- `admin`

Fitur yang tidak boleh dibuat:
- QR Code verification.
- Pembayaran.
- Chat realtime.
- Login manual email/password.
- Role selain `user` dan `admin`.
- Monorepo.

Brand:
- Gunakan logo UNSIL.
- Frontend logo path: `assets/images/logo_unsil.png`.
- Backend logo path: `assets/logo_unsil.png`.

# PRD_AGENT_01 — Backend Core, Auth Session, Database, Room, Booking

## Role Agent

Agent ini bekerja hanya pada repo:

```txt
unsil-room-booking-backend
```

Area ownership:
```txt
prisma/
src/config/
src/middlewares/
src/shared/types/
src/shared/utils/jwt.util.ts
src/shared/utils/hash.util.ts
src/modules/health/
src/modules/auth/
src/modules/profile/
src/modules/users/
src/modules/rooms/
src/modules/facilities/
src/modules/bookings/
src/modules/calendar/
docs/api-contract.md
docs/database-schema.md
```

Jangan mengubah:
```txt
src/integrations/
src/modules/documents/
src/modules/notifications/
src/modules/reminders/
src/modules/reports/
src/modules/ratings/
src/modules/statistics/
```
kecuali ada koordinasi dengan Agent 02.

## Stack Khusus Agent 01

- Node.js
- Express.js
- TypeScript strict
- Prisma ORM
- Supabase PostgreSQL
- Google OAuth verification
- JWT access token + refresh token rotation
- Zod validation
- Multer hanya disiapkan middleware, upload storage detail milik Agent 02

## Arsitektur Backend Wajib

Setiap module wajib mengikuti pola:

```txt
*.routes.ts -> *.controller.ts -> *.service.ts -> *.repository.ts -> Prisma
```

Rules:
- Route hanya path, method, middleware, controller.
- Controller hanya validasi request dan panggil service.
- Service berisi business rule.
- Repository satu-satunya layer yang query Prisma.
- DTO ada di `*.dto.ts`.
- Zod schema ada di `*.validation.ts`.
- Tidak boleh `any`.

## Struktur Module Minimal

Untuk setiap module utama:

```txt
src/modules/<module>/
├── <module>.routes.ts
├── <module>.controller.ts
├── <module>.service.ts
├── <module>.repository.ts
├── <module>.validation.ts
├── <module>.dto.ts
└── <module>.types.ts # opsional jika perlu
```

## Database Schema Scope Agent 01

Agent 01 bertanggung jawab membuat dan menjaga model:

- User
- RefreshToken
- Room
- Facility
- RoomFacility
- Booking
- BookingStatusLog

Agent 01 boleh membuat relasi ke model yang dimiliki Agent 02 agar Prisma valid:
- BookingDocument
- BookingCancelRequest
- Notification
- FcmToken
- RoomRating

Namun logic modulnya tetap milik Agent 02.

## Enum Wajib

```prisma
enum UserRole {
  user
  admin
}

enum UserStatus {
  active
  inactive
}

enum BookingStatus {
  pending
  approved
  rejected
  cancellation_requested
  cancelled
  completed
}

enum CancelRequestStatus {
  pending
  approved
  rejected
}
```

## Session Contract Wajib

Access token:
- Berlaku 1 jam.
- Tidak disimpan di database.
- Dipakai di header `Authorization: Bearer <accessToken>`.

Refresh token:
- Berlaku 30 hari.
- Disimpan di database sebagai hash di model `RefreshToken`.
- Di-rotate saat `/api/auth/refresh`.
- Di-revoke saat logout.
- Ditolak jika expired, revoked, user inactive, atau user deleted.

Endpoint auth:

| Method | Endpoint | Role | Deskripsi |
|---|---|---|---|
| POST | `/api/auth/google` | Public | Login/register Google OAuth |
| POST | `/api/auth/refresh` | Public | Refresh access token |
| GET | `/api/auth/me` | User/Admin | Ambil profil login |
| POST | `/api/auth/logout` | User/Admin | Logout dan revoke refresh token |

Response login wajib:

```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "accessToken": "JWT_ACCESS_TOKEN",
    "accessTokenExpiresIn": 3600,
    "refreshToken": "JWT_REFRESH_TOKEN",
    "refreshTokenExpiresIn": 2592000,
    "user": {
      "id": "uuid",
      "email": "user@student.unsil.ac.id",
      "name": "Nama User",
      "role": "user",
      "profileCompleted": false
    }
  }
}
```

## Profile Rules

User wajib melengkapi:
- name
- npm
- major
- faculty

Endpoint:

| Method | Endpoint | Role |
|---|---|---|
| GET | `/api/profile` | User/Admin |
| PUT | `/api/profile` | User/Admin |

Request `PUT /api/profile`:

```json
{
  "name": "Nama Lengkap",
  "npm": "227006001",
  "major": "Informatika",
  "faculty": "Fakultas Teknik"
}
```

Rules:
- NPM unik.
- User tidak boleh update role sendiri.
- User tidak boleh booking jika `profileCompleted = false`.

## Admin User Management

Endpoint:

| Method | Endpoint | Deskripsi |
|---|---|---|
| GET | `/api/admin/users` | List user search/filter |
| GET | `/api/admin/users/:id` | Detail user |
| PATCH | `/api/admin/users/:id/activate` | Activate user |
| PATCH | `/api/admin/users/:id/deactivate` | Deactivate user |
| PATCH | `/api/admin/users/:id/promote` | Promote user menjadi admin |
| PATCH | `/api/admin/users/:id/demote` | Demote admin menjadi user |
| DELETE | `/api/admin/users/:id` | Soft delete user |

Rules:
- Admin tidak boleh hapus dirinya sendiri.
- Admin terakhir tidak boleh dihapus/demote.
- Delete adalah soft delete dengan `deletedAt`.

## Rooms & Facilities

Endpoint rooms:

| Method | Endpoint | Role |
|---|---|---|
| GET | `/api/rooms` | User/Admin |
| GET | `/api/rooms/:id` | User/Admin |
| POST | `/api/rooms` | Admin |
| PUT | `/api/rooms/:id` | Admin |
| DELETE | `/api/rooms/:id` | Admin |
| POST | `/api/rooms/:id/image` | Admin |

Endpoint facilities:

| Method | Endpoint | Role |
|---|---|---|
| GET | `/api/facilities` | User/Admin |
| POST | `/api/facilities` | Admin |
| PUT | `/api/facilities/:id` | Admin |
| DELETE | `/api/facilities/:id` | Admin |

Room filter:
```txt
/api/rooms?search=lab&capacityMin=30&facilities=proyektor,ac&location=Gedung A
```

Catatan:
- Upload image ke Cloudinary detail adapter milik Agent 02.
- Agent 01 boleh menyediakan endpoint dan service hook, tetapi integrasi Cloudinary final milik Agent 02.

## Booking Core

Endpoint:

| Method | Endpoint | Role |
|---|---|---|
| POST | `/api/bookings` | User |
| GET | `/api/bookings/my` | User |
| GET | `/api/bookings` | Admin |
| GET | `/api/bookings/:id` | User/Admin |
| PATCH | `/api/bookings/:id/approve` | Admin |
| PATCH | `/api/bookings/:id/reject` | Admin |
| PATCH | `/api/bookings/:id/reschedule` | Admin |
| PATCH | `/api/bookings/:id/complete` | Admin |

Create booking request:

```json
{
  "roomId": "uuid-room",
  "startTime": "2026-06-12T08:00:00.000Z",
  "endTime": "2026-06-12T10:00:00.000Z",
  "purpose": "Rapat Himpunan Mahasiswa Informatika",
  "participantCount": 25
}
```

Booking rules:
1. Booking baru selalu `pending`.
2. User harus active dan profile complete.
3. `endTime > startTime`.
4. Tidak boleh waktu lampau.
5. Tidak boleh bentrok.
6. Status yang memblokir slot:
   - `pending`
   - `approved`
   - `cancellation_requested`
7. Status yang tidak memblokir:
   - `rejected`
   - `cancelled`
   - `completed`
8. Reject wajib `adminNote`.
9. Semua perubahan status masuk `booking_status_logs`.

Conflict logic:

```ts
const isConflict =
  newStartTime < existingBooking.endTime &&
  newEndTime > existingBooking.startTime;
```

Query conflict:
```txt
roomId sama
status IN pending, approved, cancellation_requested
startTime < newEndTime
endTime > newStartTime
```

## Calendar API Scope

Agent 01 menyediakan Calendar API data dari booking.

| Method | Endpoint | Role |
|---|---|---|
| GET | `/api/calendar` | User/Admin |
| GET | `/api/calendar/rooms/:roomId` | User/Admin |

Query:
```txt
/api/calendar?start=2026-06-01&end=2026-06-30&roomId=uuid&status=approved
```

Response item:
```json
{
  "id": "booking-id",
  "title": "Lab Komputer 1 - Rapat Himpunan",
  "roomName": "Lab Komputer 1",
  "startTime": "2026-06-12T08:00:00.000Z",
  "endTime": "2026-06-12T10:00:00.000Z",
  "status": "approved",
  "userName": "Nama User"
}
```

## Environment Variables Scope Agent 01

```env
NODE_ENV=development
PORT=4000
APP_URL=http://localhost:4000
CORS_ORIGIN=http://localhost:3000,http://localhost:5173

DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
DIRECT_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"

JWT_ACCESS_SECRET="change-me"
JWT_ACCESS_EXPIRES_IN="1h"
JWT_REFRESH_SECRET="change-refresh-secret"
JWT_REFRESH_EXPIRES_IN="30d"

GOOGLE_CLIENT_ID="google-client-id"
```

## Minimal Tests

- Auth login mock.
- Token refresh rotates token.
- Logout revokes refresh token.
- User inactive cannot access protected endpoint.
- User role cannot access admin endpoint.
- Admin cannot delete self.
- Last admin cannot be deleted/demoted.
- Booking conflict rejected.
- Booking approve/reject works.
