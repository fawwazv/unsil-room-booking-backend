# PRD.md — Aplikasi Booking Ruangan Universitas Siliwangi

> **Product Requirements Document** untuk implementasi oleh AI agent dan tim pengembang.  
> Dokumen ini adalah **single source of truth**. Jangan menambah fitur di luar dokumen ini tanpa persetujuan tim.

---

## 1. Identitas Produk

### 1.1 Nama Aplikasi

**Aplikasi Booking Ruangan Universitas Siliwangi**

### 1.2 Deskripsi Singkat

Aplikasi Booking Ruangan Universitas Siliwangi adalah aplikasi multiplatform untuk mengelola pemesanan ruangan kampus seperti ruang kelas, laboratorium, aula, ruang rapat, dan ruang seminar.

Aplikasi memiliki dua role utama:

1. **User**
   - Melakukan login.
   - Melengkapi profil akademik.
   - Melihat daftar ruangan.
   - Memfilter ruangan.
   - Melihat jadwal ruangan.
   - Mengajukan booking.
   - Upload surat izin atau proposal.
   - Mengajukan cancel booking dengan alasan.
   - Melihat riwayat booking.
   - Menerima notifikasi dan reminder.
   - Memberi rating ruangan setelah booking selesai.

2. **Admin**
   - Mengelola ruangan.
   - Mengelola user.
   - Mengubah user menjadi admin.
   - Menonaktifkan atau menghapus user.
   - Approve/reject booking.
   - Approve/reject pengajuan cancel booking.
   - Mengelola jadwal melalui kalender interaktif.
   - Export laporan PDF/Excel.
   - Melihat statistik booking dan penggunaan ruangan.
   - Melihat rating ruangan.

### 1.3 Platform Target

| Platform | Target Pengguna | Implementasi |
|---|---|---|
| Mobile Android | User | Flutter Mobile |
| Web Admin | Admin | Flutter Web |

> Frontend menggunakan Flutter multiplatform, tetapi tampilan dan fitur mobile serta web admin harus tetap disesuaikan. Jangan hanya membuat satu UI generik untuk semua platform.

### 1.4 Platform-Specific Feature

| Platform | Feature Wajib | Deskripsi |
|---|---|---|
| Mobile | Push Notification | User menerima notifikasi ketika booking disetujui, ditolak, diubah jadwal, cancel diproses, dan reminder sebelum jadwal dimulai. |
| Web | Kalender interaktif drag-and-drop | Admin dapat melihat jadwal booking dalam kalender dan mengubah jadwal dengan drag-and-drop. |

---

## 2. Logo dan Brand Identity

### 2.1 Logo

Gunakan logo Universitas Siliwangi yang diberikan oleh user.

Lokasi asset yang wajib digunakan di repository:

```txt
Backend repository: assets/logo_unsil.png
Frontend repository: assets/images/logo_unsil.png
```

Logo wajib digunakan pada:

1. Splash screen mobile.
2. Login page mobile.
3. Login page web admin.
4. Sidebar/header web admin.
5. About page atau footer aplikasi.
6. Dokumen export PDF laporan sebagai header.

### 2.2 Color Palette Berdasarkan Logo

Palette berikut diambil dari dominasi warna pada logo Universitas Siliwangi yang dikirim user. Gunakan warna ini secara konsisten. Jangan menggunakan palette acak seperti biru, ungu, pink, atau warna lain yang tidak sesuai identitas logo.

| Token | Hex | Penggunaan |
|---|---:|---|
| `primaryGreen` | `#08784C` | App bar, sidebar admin, primary button, active tab |
| `secondaryGreen` | `#009B4C` | Highlight, selected state, success accent |
| `darkGreen` | `#256748` | Header gelap, hover state, border emphasis |
| `logoGold` | `#FFF100` | Accent, badge pending, icon highlight |
| `mutedGold` | `#D6C916` | Secondary accent, warning subtle |
| `logoRed` | `#E62129` | Error, reject, destructive action |
| `charcoal` | `#332C2B` | Text utama, dark outline |
| `softWhite` | `#FEFEFE` | Background terang, text di atas warna gelap |
| `surface` | `#FFFFFF` | Card dan dialog |
| `background` | `#F7FAF8` | Background halaman umum |
| `border` | `#D8E3DC` | Border card, table, input |
| `mutedText` | `#647067` | Text sekunder |

### 2.3 Status Color

| Status | Warna | Token |
|---|---:|---|
| `pending` | `#FFF100` | `logoGold` |
| `approved` | `#009B4C` | `secondaryGreen` |
| `rejected` | `#E62129` | `logoRed` |
| `cancellation_requested` | `#D6C916` | `mutedGold` |
| `cancelled` | `#647067` | `mutedText` |
| `completed` | `#08784C` | `primaryGreen` |

### 2.4 UI Style Guide

1. Gunakan desain clean, formal, akademik.
2. Radius card: 12–16 px.
3. Gunakan banyak whitespace.
4. Button utama harus menggunakan `primaryGreen`.
5. Button destructive harus menggunakan `logoRed`.
6. Status booking harus ditampilkan sebagai badge berwarna.
7. Mobile user harus sederhana dan cepat digunakan.
8. Web admin boleh lebih padat karena memuat tabel, kalender, filter, dan statistik.

---

## 3. Scope Produk

### 3.1 Fitur Wajib

Semua fitur berikut wajib diimplementasikan.

1. Login/register menggunakan Google OAuth.
2. JWT session dengan access token 1 jam dan refresh token 30 hari.
3. Role admin dan user.
4. Profil user memuat:
   - nama,
   - NPM,
   - jurusan,
   - fakultas.
5. Admin dapat menambah, mengedit, dan menghapus/menonaktifkan ruangan.
6. User dapat melihat daftar ruangan.
7. User dapat memfilter ruangan berdasarkan kapasitas dan fasilitas.
8. User dapat melihat jadwal ruangan.
9. User dapat mengajukan booking.
10. User dapat upload surat izin atau proposal kegiatan.
11. Admin dapat approve/reject booking.
12. User dapat melihat riwayat booking.
13. User dapat mengajukan cancel booking dengan alasan.
14. Admin dapat approve/reject pengajuan cancel booking.
15. Mobile menerima push notification.
16. Reminder sebelum jadwal booking dimulai.
17. Web admin memiliki kalender interaktif drag-and-drop.
18. Export laporan booking ke PDF.
19. Export laporan booking ke Excel.
20. Rating ruangan.
21. Statistik ruangan paling sering digunakan.
22. Admin dapat mengelola user.
23. Admin dapat menonaktifkan user.
24. Admin dapat menghapus user.
25. Admin dapat menjadikan user lain sebagai admin.

### 3.2 Fitur yang Dihapus dari Scope

Fitur berikut **tidak boleh diimplementasikan** kecuali ada instruksi baru:

1. QR Code verifikasi.
2. Pembayaran.
3. Chat realtime.
4. Sistem akademik lengkap.
5. Multi-tenant kampus.
6. Role selain `admin` dan `user`.
7. Login manual email/password.

---

## 4. Tech Stack Final

### 4.1 Backend

| Komponen | Teknologi |
|---|---|
| Runtime | Node.js |
| Framework | Express.js |
| Bahasa | TypeScript |
| ORM | Prisma ORM |
| Database | Supabase PostgreSQL |
| Auth provider | Google OAuth |
| Session | JWT access token + refresh token rotation |
| Validation | Zod |
| File upload | Multer |
| Image storage | Cloudinary |
| Document storage | Supabase Storage |
| Push notification | Firebase Cloud Messaging |
| Reminder scheduler | node-cron untuk versi awal |
| Queue opsional | BullMQ + Redis / Upstash Redis |
| PDF export | PDFKit atau pdfmake |
| Excel export | ExcelJS |
| Deployment | Railway |

### 4.2 Frontend

| Komponen | Teknologi |
|---|---|
| Framework | Flutter |
| Platform | Mobile Android + Web Admin |
| State management | Riverpod |
| Routing | go_router |
| HTTP client | Dio |
| Local storage | flutter_secure_storage untuk mobile, secure web storage strategy untuk web |
| Google login | google_sign_in |
| Push notification | firebase_messaging |
| Calendar web | Flutter calendar package yang mendukung drag-and-drop |
| Deployment web | Vercel |
| Mobile release | GitHub Release APK |

### 4.3 Database dan Storage

| Kebutuhan | Teknologi |
|---|---|
| Relational data | Supabase PostgreSQL |
| ORM | Prisma |
| Gambar ruangan | Cloudinary |
| Dokumen proposal/surat izin | Supabase Storage |
| Metadata file | PostgreSQL |


### 4.4 Session Strategy Wajib

Sistem wajib menggunakan JWT session dengan dua jenis token.

| Token | Masa Berlaku | Penyimpanan | Fungsi |
|---|---:|---|---|
| `accessToken` | 1 jam | Frontend runtime/session storage strategy | Mengakses protected API endpoint |
| `refreshToken` | 30 hari | Secure storage strategy pada Flutter mobile/web | Meminta access token baru tanpa login ulang |

Rules implementasi session:

1. Access token berlaku **1 jam** dan tidak disimpan di database.
2. Refresh token berlaku **30 hari** dan wajib disimpan di database dalam bentuk **hash**, bukan plaintext.
3. Backend wajib menyediakan endpoint `POST /api/auth/refresh` untuk menerbitkan access token baru.
4. Refresh token wajib dirotasi saat dipakai: token lama di-revoke, token baru dibuat.
5. Logout wajib me-revoke refresh token aktif.
6. Backend wajib menolak refresh token yang expired, revoked, tidak ditemukan, atau user-nya inactive/deleted.
7. Frontend tidak boleh menyimpan token di URL, query parameter, atau log console.
8. Semua protected request wajib menggunakan header `Authorization: Bearer <accessToken>`.
9. Jika API mengembalikan 401 karena access token expired, frontend boleh mencoba refresh satu kali, lalu retry request awal. Jika refresh gagal, user diarahkan ke login.

### 4.5 Type Safety Strategy Wajib

Aplikasi wajib sangat type-safe. AI agent tidak boleh menggunakan `any` di backend TypeScript.

Rules backend TypeScript:

1. `tsconfig.json` wajib mengaktifkan `strict: true`, `noImplicitAny: true`, `strictNullChecks: true`, dan `noUncheckedIndexedAccess: true`.
2. ESLint wajib mengaktifkan rule `@typescript-eslint/no-explicit-any: error`.
3. Dilarang menggunakan `any`, `as any`, `Record<string, any>`, `Promise<any>`, dan parameter/function return type `any`.
4. Untuk data yang belum diketahui bentuknya, gunakan `unknown`, lalu validasi menggunakan Zod sebelum dipakai.
5. Semua request body, params, query, dan response DTO wajib memiliki type/interface eksplisit.
6. Gunakan type turunan dari Prisma Client untuk entity database dan DTO terpisah untuk response API.
7. Controller tidak boleh membaca `req.body` tanpa validasi Zod.
8. Repository tidak boleh mengembalikan data tak bertipe; semua function repository wajib punya return type eksplisit.
9. External SDK response harus dibungkus adapter dan dikonversi menjadi typed DTO sebelum masuk service.

Rules frontend Flutter/Dart:

1. Hindari `dynamic` pada domain, provider, UI, dan service return type.
2. `Map<String, dynamic>` hanya boleh digunakan di boundary JSON `fromJson`, lalu langsung dikonversi menjadi model bertipe.
3. Semua API response wajib dimodelkan sebagai class typed, misalnya `ApiResponse<T>`.
4. Jangan melewatkan JSON mentah dari data layer ke UI.
5. Provider/state harus memiliki tipe eksplisit, bukan `Object`, `dynamic`, atau map bebas.

---

## 5. Arsitektur Sistem

### 5.1 Arsitektur Umum

Gunakan **Multitier Architecture** dengan pemisahan layer yang jelas.

```txt
[ Flutter Mobile User ]          [ Flutter Web Admin ]
          |                                |
          | REST API / HTTPS              |
          v                                v
+----------------------------------------------------+
|              Express.js Backend API Layer          |
+----------------------------------------------------+
| Middleware Layer                                   |
| - auth middleware                                  |
| - role middleware                                  |
| - request validation                               |
| - error handler                                    |
+----------------------------------------------------+
| Controller Layer                                   |
| - menerima request                                 |
| - memanggil service                                |
| - mengembalikan response JSON                      |
+----------------------------------------------------+
| Service / Business Logic Layer                     |
| - validasi booking bentrok                         |
| - approval booking                                 |
| - cancel request                                   |
| - user management                                  |
| - notification                                     |
| - report generation                                |
| - rating & statistics                              |
+----------------------------------------------------+
| Repository / Data Access Layer                     |
| - Prisma query                                     |
| - transaksi database                               |
+----------------------------------------------------+
| Database Layer                                     |
| - Supabase PostgreSQL                              |
+----------------------------------------------------+

External Services:
- Google OAuth
- Firebase Cloud Messaging
- Cloudinary
- Supabase Storage
- Redis/Upstash Redis optional
```

### 5.2 Aturan Multi Layer yang Wajib Dipatuhi Agent

1. **Route**
   - Hanya mendefinisikan URL, HTTP method, middleware, dan controller.
   - Tidak boleh berisi business logic.
   - Tidak boleh query Prisma langsung.

2. **Controller**
   - Mengambil data dari `req`.
   - Memanggil service.
   - Mengirim response.
   - Tidak boleh query Prisma langsung.
   - Tidak boleh menyimpan business logic booking.

3. **Service**
   - Berisi business logic.
   - Validasi booking bentrok.
   - Approval/reject.
   - Cancel request.
   - Kirim notifikasi.
   - Buat report.
   - Boleh memanggil repository dan external service adapter.
   - Tidak boleh menggunakan `res.status()` atau objek response Express.

4. **Repository**
   - Satu-satunya layer yang berinteraksi langsung dengan Prisma.
   - Semua query database ditempatkan di sini.
   - Untuk query kompleks, gunakan function dengan nama jelas.

5. **External Service Adapter**
   - Semua integrasi pihak ketiga harus dibungkus di folder `integrations`.
   - Contoh: Cloudinary, FCM, Google OAuth, Supabase Storage.
   - Jangan panggil SDK eksternal langsung dari controller.

6. **Frontend Data Layer**
   - Semua request API harus melalui repository/data source.
   - UI tidak boleh memanggil Dio langsung.
   - UI memanggil provider/usecase.

7. **Backend Authorization**
   - Jangan hanya sembunyikan tombol admin di frontend.
   - Semua endpoint admin wajib dilindungi middleware role admin.


### 5.3 Type-Safe Layer Contract

AI agent wajib menjaga kontrak tipe di setiap layer.

| Layer | Input | Output | Larangan |
|---|---|---|---|
| Route | Middleware dan controller typed | Express router | Business logic, Prisma query, `any` |
| Controller | Validated request DTO | Standard API response DTO | Prisma query langsung, `any`, parsing manual tanpa Zod |
| Service | Typed DTO dari controller | Typed result DTO | Express `req/res`, `any`, akses SDK eksternal langsung |
| Repository | Typed query parameter | Prisma typed result | Business rule, response Express, `any` |
| Integration Adapter | Config dan typed payload | Typed adapter response | Mengembalikan raw unknown/any ke service |
| Frontend Repository | Typed request DTO | Typed model/entity | Dio langsung dari UI, JSON mentah ke UI |
| Frontend Presentation | Typed state/provider | Widget | `dynamic`, API call langsung, hard-code URL |

Semua perubahan pada request/response DTO wajib diperbarui di `docs/api-contract.md` pada kedua repository.

---

## 6. Struktur Direktori Dua Repository

Project **tidak menggunakan monorepo**. AI agent wajib mengembangkan aplikasi dalam **dua repository terpisah**.

| Repository | Fungsi | Deployment |
|---|---|---|
| `unsil-room-booking-backend` | Express.js API, Prisma, database, auth, notification, report, scheduler | Railway |
| `unsil-room-booking-frontend` | Flutter mobile user app dan Flutter web admin responsif | Vercel untuk web, GitHub Release untuk APK |

Rules repository:

1. Jangan membuat folder `apps/backend`, `apps/frontend`, atau struktur monorepo.
2. Jangan memindahkan backend dan frontend ke dalam satu repository.
3. Salin `PRD.md` ke root kedua repository sebagai single source of truth.
4. Kontrak API wajib disimpan di `docs/api-contract.md` pada kedua repository.
5. Perubahan API backend wajib diikuti update DTO/model frontend.

### 6.1 Repository Backend — `unsil-room-booking-backend`

AI agent backend wajib mengikuti struktur berikut.

```txt
unsil-room-booking-backend/
├── README.md
├── PRD.md
├── package.json
├── tsconfig.json
├── eslint.config.js
├── prettier.config.js
├── .env.example
├── .gitignore
├── assets/
│   └── logo_unsil.png
├── docs/
│   ├── api-contract.md
│   ├── database-schema.md
│   ├── deployment-guide.md
│   └── demo-script.md
├── prisma/
│   ├── schema.prisma
│   ├── seed.ts
│   └── migrations/
└── src/
    ├── app.ts
    ├── server.ts
    ├── routes.ts
    ├── config/
    │   ├── env.ts
    │   ├── prisma.ts
    │   ├── cors.ts
    │   └── constants.ts
    ├── middlewares/
    │   ├── auth.middleware.ts
    │   ├── role.middleware.ts
    │   ├── validate.middleware.ts
    │   ├── upload.middleware.ts
    │   └── error.middleware.ts
    ├── integrations/
    │   ├── google/
    │   │   ├── google-oauth.client.ts
    │   │   └── google-oauth.types.ts
    │   ├── cloudinary/
    │   │   ├── cloudinary.client.ts
    │   │   └── cloudinary.types.ts
    │   ├── supabase-storage/
    │   │   ├── supabase-storage.client.ts
    │   │   └── supabase-storage.types.ts
    │   ├── firebase/
    │   │   ├── fcm.client.ts
    │   │   └── fcm.types.ts
    │   └── redis/
    │       ├── redis.client.ts
    │       └── redis.types.ts
    ├── modules/
    │   ├── health/
    │   │   ├── health.routes.ts
    │   │   ├── health.controller.ts
    │   │   └── health.service.ts
    │   ├── auth/
    │   │   ├── auth.routes.ts
    │   │   ├── auth.controller.ts
    │   │   ├── auth.service.ts
    │   │   ├── auth.repository.ts
    │   │   ├── auth.validation.ts
    │   │   ├── auth.dto.ts
    │   │   └── auth.types.ts
    │   ├── profile/
    │   │   ├── profile.routes.ts
    │   │   ├── profile.controller.ts
    │   │   ├── profile.service.ts
    │   │   ├── profile.repository.ts
    │   │   ├── profile.validation.ts
    │   │   └── profile.dto.ts
    │   ├── users/
    │   │   ├── users.routes.ts
    │   │   ├── users.controller.ts
    │   │   ├── users.service.ts
    │   │   ├── users.repository.ts
    │   │   ├── users.validation.ts
    │   │   └── users.dto.ts
    │   ├── rooms/
    │   │   ├── rooms.routes.ts
    │   │   ├── rooms.controller.ts
    │   │   ├── rooms.service.ts
    │   │   ├── rooms.repository.ts
    │   │   ├── rooms.validation.ts
    │   │   └── rooms.dto.ts
    │   ├── facilities/
    │   │   ├── facilities.routes.ts
    │   │   ├── facilities.controller.ts
    │   │   ├── facilities.service.ts
    │   │   ├── facilities.repository.ts
    │   │   └── facilities.dto.ts
    │   ├── bookings/
    │   │   ├── bookings.routes.ts
    │   │   ├── bookings.controller.ts
    │   │   ├── bookings.service.ts
    │   │   ├── bookings.repository.ts
    │   │   ├── bookings.validation.ts
    │   │   ├── bookings.dto.ts
    │   │   └── booking-conflict.util.ts
    │   ├── cancel-requests/
    │   │   ├── cancel-requests.routes.ts
    │   │   ├── cancel-requests.controller.ts
    │   │   ├── cancel-requests.service.ts
    │   │   ├── cancel-requests.repository.ts
    │   │   ├── cancel-requests.validation.ts
    │   │   └── cancel-requests.dto.ts
    │   ├── calendar/
    │   │   ├── calendar.routes.ts
    │   │   ├── calendar.controller.ts
    │   │   ├── calendar.service.ts
    │   │   ├── calendar.repository.ts
    │   │   └── calendar.dto.ts
    │   ├── documents/
    │   │   ├── documents.routes.ts
    │   │   ├── documents.controller.ts
    │   │   ├── documents.service.ts
    │   │   ├── documents.repository.ts
    │   │   ├── documents.validation.ts
    │   │   └── documents.dto.ts
    │   ├── notifications/
    │   │   ├── notifications.routes.ts
    │   │   ├── notifications.controller.ts
    │   │   ├── notifications.service.ts
    │   │   ├── notifications.repository.ts
    │   │   ├── notifications.dto.ts
    │   │   └── fcm-token.service.ts
    │   ├── reminders/
    │   │   ├── reminders.scheduler.ts
    │   │   ├── reminders.service.ts
    │   │   └── reminders.repository.ts
    │   ├── reports/
    │   │   ├── reports.routes.ts
    │   │   ├── reports.controller.ts
    │   │   ├── reports.service.ts
    │   │   ├── reports.repository.ts
    │   │   ├── reports.dto.ts
    │   │   ├── pdf-report.generator.ts
    │   │   └── excel-report.generator.ts
    │   ├── ratings/
    │   │   ├── ratings.routes.ts
    │   │   ├── ratings.controller.ts
    │   │   ├── ratings.service.ts
    │   │   ├── ratings.repository.ts
    │   │   └── ratings.dto.ts
    │   └── statistics/
    │       ├── statistics.routes.ts
    │       ├── statistics.controller.ts
    │       ├── statistics.service.ts
    │       ├── statistics.repository.ts
    │       └── statistics.dto.ts
    ├── shared/
    │   ├── utils/
    │   │   ├── api-response.ts
    │   │   ├── date.util.ts
    │   │   ├── jwt.util.ts
    │   │   ├── hash.util.ts
    │   │   └── pagination.util.ts
    │   ├── errors/
    │   │   ├── app-error.ts
    │   │   └── error-codes.ts
    │   └── types/
    │       ├── express.d.ts
    │       └── api-response.type.ts
    └── tests/
        ├── auth.test.ts
        ├── bookings.test.ts
        └── rooms.test.ts
```

### 6.2 Repository Frontend — `unsil-room-booking-frontend`

AI agent frontend wajib mengikuti struktur berikut.

```txt
unsil-room-booking-frontend/
├── README.md
├── PRD.md
├── pubspec.yaml
├── analysis_options.yaml
├── .env.example
├── .gitignore
├── docs/
│   ├── api-contract.md
│   ├── deployment-guide.md
│   └── demo-script.md
├── assets/
│   ├── images/
│   │   └── logo_unsil.png
│   └── icons/
└── lib/
    ├── main.dart
    ├── app/
    │   ├── app.dart
    │   ├── router.dart
    │   └── theme.dart
    ├── core/
    │   ├── constants/
    │   │   ├── app_colors.dart
    │   │   ├── app_assets.dart
    │   │   └── app_constants.dart
    │   ├── responsive/
    │   │   ├── app_breakpoints.dart
    │   │   ├── responsive_layout.dart
    │   │   ├── responsive_value.dart
    │   │   └── screen_size_extension.dart
    │   ├── network/
    │   │   ├── dio_client.dart
    │   │   ├── api_endpoints.dart
    │   │   ├── api_response.dart
    │   │   └── token_refresh_interceptor.dart
    │   ├── storage/
    │   │   ├── token_storage_service.dart
    │   │   └── secure_storage_service.dart
    │   ├── errors/
    │   │   └── failure.dart
    │   └── widgets/
    │       ├── app_button.dart
    │       ├── app_text_field.dart
    │       ├── status_badge.dart
    │       └── unsil_logo.dart
    ├── features/
    │   ├── auth/
    │   │   ├── data/
    │   │   ├── domain/
    │   │   └── presentation/
    │   ├── profile/
    │   │   ├── data/
    │   │   ├── domain/
    │   │   └── presentation/
    │   ├── user_rooms/
    │   │   ├── data/
    │   │   ├── domain/
    │   │   └── presentation/
    │   ├── user_bookings/
    │   │   ├── data/
    │   │   ├── domain/
    │   │   └── presentation/
    │   ├── user_notifications/
    │   │   ├── data/
    │   │   ├── domain/
    │   │   └── presentation/
    │   ├── admin_dashboard/
    │   │   ├── data/
    │   │   ├── domain/
    │   │   └── presentation/
    │   ├── admin_rooms/
    │   │   ├── data/
    │   │   ├── domain/
    │   │   └── presentation/
    │   ├── admin_users/
    │   │   ├── data/
    │   │   ├── domain/
    │   │   └── presentation/
    │   ├── admin_bookings/
    │   │   ├── data/
    │   │   ├── domain/
    │   │   └── presentation/
    │   ├── admin_calendar/
    │   │   ├── data/
    │   │   ├── domain/
    │   │   └── presentation/
    │   ├── admin_reports/
    │   │   ├── data/
    │   │   ├── domain/
    │   │   └── presentation/
    │   └── admin_statistics/
    │       ├── data/
    │       ├── domain/
    │       └── presentation/
    └── platform/
        ├── mobile/
        │   └── firebase_messaging_handler.dart
        └── web/
            └── web_calendar_adapter.dart
```

### 6.3 Rules Struktur untuk AI Agent

1. Backend wajib mengikuti pola `routes -> controller -> service -> repository -> Prisma`.
2. Frontend wajib mengikuti pola `feature -> data -> domain -> presentation`.
3. Jangan membuat folder baru sejajar `src/modules` atau `lib/features` tanpa alasan yang tertulis di PRD.
4. Jangan membuat module gabungan seperti `misc`, `helpers-random`, `common2`, atau `new-api`.
5. Semua DTO request/response backend berada pada file `*.dto.ts` di module terkait.
6. Semua model response frontend berada pada folder `data/models` atau `domain/entities` di feature terkait.
7. Semua API call frontend wajib melalui repository/data source, bukan langsung dari widget.
8. Semua type/interface publik wajib diberi nama jelas dan tidak boleh menggunakan `any`.

## 7. Database Schema Requirements

### 7.1 Prisma Enum

Agent wajib membuat enum berikut di `schema.prisma`.

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

### 7.2 Model Wajib

#### User

```prisma
model User {
  id               String     @id @default(uuid())
  googleId         String?    @unique
  email            String     @unique
  name             String
  npm              String?    @unique
  major            String?
  faculty          String?
  avatarUrl        String?
  role             UserRole   @default(user)
  status           UserStatus @default(active)
  profileCompleted Boolean    @default(false)
  deletedAt        DateTime?
  createdAt        DateTime   @default(now())
  updatedAt        DateTime   @updatedAt

  bookings         Booking[]
  notifications    Notification[]
  fcmTokens        FcmToken[]
  refreshTokens    RefreshToken[]
  ratings          RoomRating[]

  @@index([email])
  @@index([npm])
  @@index([role])
  @@index([status])
}
```

#### RefreshToken

Refresh token wajib disimpan dalam bentuk hash. Jangan simpan refresh token plaintext.

```prisma
model RefreshToken {
  id         String    @id @default(uuid())
  userId     String
  tokenHash  String    @unique
  userAgent  String?
  ipAddress  String?
  expiresAt  DateTime
  revokedAt  DateTime?
  createdAt  DateTime  @default(now())

  user       User      @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@index([userId])
  @@index([expiresAt])
  @@index([revokedAt])
}
```

#### Room

```prisma
model Room {
  id          String   @id @default(uuid())
  name        String
  code        String   @unique
  location    String
  capacity    Int
  description String?
  imageUrl    String?
  isActive    Boolean  @default(true)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  bookings    Booking[]
  facilities  RoomFacility[]
  ratings     RoomRating[]

  @@index([name])
  @@index([location])
  @@index([capacity])
  @@index([isActive])
}
```

#### Facility

```prisma
model Facility {
  id        String   @id @default(uuid())
  name      String   @unique
  createdAt DateTime @default(now())

  rooms     RoomFacility[]
}
```

#### RoomFacility

```prisma
model RoomFacility {
  roomId     String
  facilityId String

  room       Room     @relation(fields: [roomId], references: [id])
  facility   Facility @relation(fields: [facilityId], references: [id])

  @@id([roomId, facilityId])
}
```

#### Booking

```prisma
model Booking {
  id                String        @id @default(uuid())
  userId            String
  roomId            String
  startTime         DateTime
  endTime           DateTime
  purpose           String
  participantCount  Int
  status            BookingStatus @default(pending)
  adminNote         String?
  approvedBy        String?
  approvedAt        DateTime?
  reminderSent      Boolean       @default(false)
  createdAt         DateTime      @default(now())
  updatedAt         DateTime      @updatedAt

  user              User          @relation(fields: [userId], references: [id])
  room              Room          @relation(fields: [roomId], references: [id])
  documents         BookingDocument[]
  cancelRequests    BookingCancelRequest[]
  statusLogs        BookingStatusLog[]
  rating            RoomRating?

  @@index([userId])
  @@index([roomId])
  @@index([startTime])
  @@index([endTime])
  @@index([status])
}
```

#### BookingDocument

```prisma
model BookingDocument {
  id              String   @id @default(uuid())
  bookingId       String
  fileName        String
  fileType        String
  fileSize        Int
  storagePath     String
  storageUrl      String?
  uploadedBy      String
  uploadedAt      DateTime @default(now())

  booking         Booking  @relation(fields: [bookingId], references: [id])

  @@index([bookingId])
}
```

#### BookingCancelRequest

```prisma
model BookingCancelRequest {
  id           String              @id @default(uuid())
  bookingId    String
  requestedBy  String
  reason       String
  status       CancelRequestStatus @default(pending)
  adminNote    String?
  processedBy  String?
  processedAt  DateTime?
  createdAt    DateTime            @default(now())

  booking      Booking             @relation(fields: [bookingId], references: [id])

  @@index([bookingId])
  @@index([status])
}
```

#### Notification

```prisma
model Notification {
  id        String   @id @default(uuid())
  userId    String
  title     String
  message   String
  type      String
  isRead    Boolean  @default(false)
  createdAt DateTime @default(now())

  user      User     @relation(fields: [userId], references: [id])

  @@index([userId])
  @@index([isRead])
}
```

#### FcmToken

```prisma
model FcmToken {
  id         String   @id @default(uuid())
  userId     String
  token      String   @unique
  deviceType String?
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt

  user       User     @relation(fields: [userId], references: [id])

  @@index([userId])
}
```

#### RoomRating

```prisma
model RoomRating {
  id        String   @id @default(uuid())
  bookingId String   @unique
  roomId    String
  userId    String
  rating    Int
  review    String?
  createdAt DateTime @default(now())

  booking   Booking  @relation(fields: [bookingId], references: [id])
  room      Room     @relation(fields: [roomId], references: [id])
  user      User     @relation(fields: [userId], references: [id])

  @@index([roomId])
  @@index([userId])
}
```

#### BookingStatusLog

```prisma
model BookingStatusLog {
  id             String   @id @default(uuid())
  bookingId      String
  previousStatus String?
  newStatus      String
  changedBy      String?
  note           String?
  createdAt      DateTime @default(now())

  booking        Booking  @relation(fields: [bookingId], references: [id])

  @@index([bookingId])
}
```

---

## 8. Business Rules

### 8.1 Auth, Session, dan Profile

1. User login hanya melalui Google OAuth.
2. Backend menerima Google token dari frontend.
3. Backend memverifikasi token Google.
4. Jika user belum ada, backend membuat user baru dengan role default `user`.
5. Setelah login sukses, backend menerbitkan:
   - `accessToken` dengan masa berlaku 1 jam,
   - `refreshToken` dengan masa berlaku 30 hari.
6. Refresh token wajib disimpan di database sebagai hash pada model `RefreshToken`.
7. Endpoint `POST /api/auth/refresh` wajib melakukan rotasi refresh token.
8. Endpoint `POST /api/auth/logout` wajib me-revoke refresh token aktif.
9. User baru wajib melengkapi profil:
   - nama,
   - NPM,
   - jurusan,
   - fakultas.
10. User tidak boleh mengakses fitur booking jika `profileCompleted = false`.
11. User inactive tidak boleh login, refresh token, atau menggunakan fitur protected.
12. Admin tidak boleh menghapus dirinya sendiri.
13. Sistem harus mencegah penghapusan atau demote admin terakhir.

### 8.2 Booking

1. Booking baru selalu berstatus `pending`.
2. Booking hanya dapat dibuat oleh user aktif dengan profil lengkap.
3. `endTime` harus lebih besar dari `startTime`.
4. Booking tidak boleh dibuat untuk waktu yang sudah lewat.
5. Booking tidak boleh bentrok dengan booking lain dalam ruangan yang sama.
6. Status yang dianggap memblokir slot:
   - `pending`,
   - `approved`,
   - `cancellation_requested`.
7. Booking dengan status `rejected`, `cancelled`, dan `completed` tidak memblokir slot.
8. Admin dapat approve booking.
9. Admin dapat reject booking, tetapi wajib mengisi alasan.
10. Sistem harus mencatat perubahan status ke `booking_status_logs`.

### 8.3 Conflict Check

Gunakan logika berikut di backend service.

```ts
const isConflict =
  newStartTime < existingBooking.endTime &&
  newEndTime > existingBooking.startTime;
```

Query harus memeriksa:

```txt
roomId sama
status IN pending, approved, cancellation_requested
startTime < newEndTime
endTime > newStartTime
```

### 8.4 Cancel Booking

1. User dapat mengajukan cancel booking dengan alasan.
2. Alasan cancel wajib diisi minimal 10 karakter.
3. User hanya dapat mengajukan cancel untuk booking miliknya.
4. Jika booking masih `pending`, sistem dapat langsung mengubah status menjadi `cancelled`.
5. Jika booking sudah `approved`, sistem mengubah status menjadi `cancellation_requested`.
6. Admin dapat approve/reject pengajuan cancel.
7. Jika admin approve cancel, status booking menjadi `cancelled`.
8. Jika admin reject cancel, status booking kembali menjadi `approved`.
9. Admin wajib mengisi alasan jika menolak cancel request.
10. Sistem wajib mengirim notifikasi ke user setelah cancel diproses.

### 8.5 Reminder

1. Reminder dikirim 30 menit sebelum jadwal mulai.
2. Reminder hanya dikirim untuk booking `approved`.
3. Reminder tidak boleh dikirim lebih dari satu kali.
4. Setelah reminder dikirim, set `reminderSent = true`.

### 8.6 Rating

1. User hanya dapat memberi rating untuk booking miliknya.
2. Booking harus berstatus `completed`.
3. Satu booking hanya boleh memiliki satu rating.
4. Rating harus angka 1–5.
5. Review bersifat opsional.

---

## 9. API Contract

Semua response API menggunakan format standar.

### 9.1 Success Response

```json
{
  "success": true,
  "message": "Success message",
  "data": {}
}
```

### 9.2 Error Response

```json
{
  "success": false,
  "message": "Error message",
  "errorCode": "ERROR_CODE",
  "errors": []
}
```

### 9.3 Auth API

| Method | Endpoint | Role | Deskripsi |
|---|---|---|---|
| POST | `/api/auth/google` | Public | Login/register dengan Google OAuth |
| POST | `/api/auth/refresh` | Public | Refresh access token menggunakan refresh token |
| GET | `/api/auth/me` | User/Admin | Mengambil profil user login |
| POST | `/api/auth/logout` | User/Admin | Logout dan revoke refresh token aktif |

Request `POST /api/auth/google`:

```json
{
  "idToken": "GOOGLE_ID_TOKEN"
}
```

Response:

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

Request `POST /api/auth/refresh`:

```json
{
  "refreshToken": "JWT_REFRESH_TOKEN"
}
```

Response `POST /api/auth/refresh`:

```json
{
  "success": true,
  "message": "Token refreshed successfully",
  "data": {
    "accessToken": "NEW_JWT_ACCESS_TOKEN",
    "accessTokenExpiresIn": 3600,
    "refreshToken": "NEW_JWT_REFRESH_TOKEN",
    "refreshTokenExpiresIn": 2592000
  }
}
```

Request `POST /api/auth/logout`:

```json
{
  "refreshToken": "JWT_REFRESH_TOKEN"
}
```

### 9.4 Profile API

| Method | Endpoint | Role | Deskripsi |
|---|---|---|---|
| GET | `/api/profile` | User/Admin | Melihat profil sendiri |
| PUT | `/api/profile` | User/Admin | Update profil sendiri |

Request `PUT /api/profile`:

```json
{
  "name": "Nama Lengkap",
  "npm": "227006001",
  "major": "Informatika",
  "faculty": "Fakultas Teknik"
}
```

### 9.5 User Management API

| Method | Endpoint | Role | Deskripsi |
|---|---|---|---|
| GET | `/api/admin/users` | Admin | Daftar user dengan search/filter |
| GET | `/api/admin/users/:id` | Admin | Detail user |
| PATCH | `/api/admin/users/:id/activate` | Admin | Mengaktifkan user |
| PATCH | `/api/admin/users/:id/deactivate` | Admin | Menonaktifkan user |
| PATCH | `/api/admin/users/:id/promote` | Admin | Menjadikan user sebagai admin |
| PATCH | `/api/admin/users/:id/demote` | Admin | Mengubah admin menjadi user |
| DELETE | `/api/admin/users/:id` | Admin | Soft delete user |

Query list users:

```txt
/api/admin/users?search=andi&role=user&status=active&page=1&limit=10
```

### 9.6 Rooms API

| Method | Endpoint | Role | Deskripsi |
|---|---|---|---|
| GET | `/api/rooms` | User/Admin | Daftar ruangan aktif |
| GET | `/api/rooms/:id` | User/Admin | Detail ruangan |
| POST | `/api/rooms` | Admin | Tambah ruangan |
| PUT | `/api/rooms/:id` | Admin | Edit ruangan |
| DELETE | `/api/rooms/:id` | Admin | Nonaktifkan ruangan |
| POST | `/api/rooms/:id/image` | Admin | Upload gambar ruangan ke Cloudinary |

Query list rooms:

```txt
/api/rooms?search=lab&capacityMin=30&facilities=proyektor,ac&location=Gedung A
```

Request create room:

```json
{
  "name": "Lab Komputer 1",
  "code": "LAB-KOM-1",
  "location": "Gedung Teknik Lantai 2",
  "capacity": 40,
  "description": "Laboratorium komputer untuk praktikum.",
  "facilityIds": ["uuid-1", "uuid-2"]
}
```

### 9.7 Facilities API

| Method | Endpoint | Role | Deskripsi |
|---|---|---|---|
| GET | `/api/facilities` | User/Admin | Daftar fasilitas |
| POST | `/api/facilities` | Admin | Tambah fasilitas |
| PUT | `/api/facilities/:id` | Admin | Edit fasilitas |
| DELETE | `/api/facilities/:id` | Admin | Hapus fasilitas |

### 9.8 Booking API

| Method | Endpoint | Role | Deskripsi |
|---|---|---|---|
| POST | `/api/bookings` | User | Mengajukan booking |
| GET | `/api/bookings/my` | User | Riwayat booking user |
| GET | `/api/bookings` | Admin | Semua booking |
| GET | `/api/bookings/:id` | User/Admin | Detail booking |
| PATCH | `/api/bookings/:id/approve` | Admin | Approve booking |
| PATCH | `/api/bookings/:id/reject` | Admin | Reject booking |
| PATCH | `/api/bookings/:id/reschedule` | Admin | Ubah jadwal booking |
| PATCH | `/api/bookings/:id/complete` | Admin | Tandai booking selesai |

Request create booking:

```json
{
  "roomId": "uuid-room",
  "startTime": "2026-06-12T08:00:00.000Z",
  "endTime": "2026-06-12T10:00:00.000Z",
  "purpose": "Rapat Himpunan Mahasiswa Informatika",
  "participantCount": 25
}
```

Request reject booking:

```json
{
  "adminNote": "Ruangan sudah diprioritaskan untuk kegiatan fakultas."
}
```

Request reschedule:

```json
{
  "startTime": "2026-06-12T10:00:00.000Z",
  "endTime": "2026-06-12T12:00:00.000Z",
  "adminNote": "Jadwal disesuaikan oleh admin."
}
```

### 9.9 Cancel Request API

| Method | Endpoint | Role | Deskripsi |
|---|---|---|---|
| POST | `/api/bookings/:id/cancel-request` | User | Ajukan cancel booking |
| GET | `/api/cancel-requests` | Admin | Daftar pengajuan cancel |
| PATCH | `/api/cancel-requests/:id/approve` | Admin | Approve cancel |
| PATCH | `/api/cancel-requests/:id/reject` | Admin | Reject cancel |

Request cancel:

```json
{
  "reason": "Kegiatan organisasi dibatalkan karena pemateri berhalangan hadir."
}
```

Request reject cancel:

```json
{
  "adminNote": "Pembatalan terlalu dekat dengan waktu penggunaan ruangan."
}
```

### 9.10 Calendar API

| Method | Endpoint | Role | Deskripsi |
|---|---|---|---|
| GET | `/api/calendar` | User/Admin | Data kalender |
| GET | `/api/calendar/rooms/:roomId` | User/Admin | Kalender per ruangan |

Query:

```txt
/api/calendar?start=2026-06-01&end=2026-06-30&roomId=uuid&status=approved
```

Response item kalender:

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

### 9.11 Document API

| Method | Endpoint | Role | Deskripsi |
|---|---|---|---|
| POST | `/api/bookings/:id/documents` | User | Upload proposal/surat |
| GET | `/api/bookings/:id/documents` | User/Admin | Lihat dokumen booking |
| DELETE | `/api/documents/:id` | User/Admin | Hapus dokumen |

Rules:

1. Tipe file yang diterima: PDF, DOC, DOCX.
2. Maksimal ukuran file: 5 MB.
3. User hanya dapat upload dokumen untuk booking miliknya sendiri.
4. Admin dapat melihat semua dokumen booking.

### 9.12 Notification API

| Method | Endpoint | Role | Deskripsi |
|---|---|---|---|
| POST | `/api/notifications/register-token` | User | Simpan FCM token |
| GET | `/api/notifications` | User | Daftar notifikasi |
| PATCH | `/api/notifications/:id/read` | User | Tandai dibaca |

### 9.13 Report API

| Method | Endpoint | Role | Deskripsi |
|---|---|---|---|
| GET | `/api/reports/bookings/pdf` | Admin | Export laporan PDF |
| GET | `/api/reports/bookings/excel` | Admin | Export laporan Excel |

Query:

```txt
/api/reports/bookings/pdf?start=2026-06-01&end=2026-06-30&roomId=uuid&status=approved
```

Laporan wajib memuat:

1. Nama user.
2. NPM.
3. Jurusan.
4. Fakultas.
5. Nama ruangan.
6. Tanggal.
7. Jam mulai.
8. Jam selesai.
9. Tujuan.
10. Jumlah peserta.
11. Status.
12. Catatan admin.

### 9.14 Rating API

| Method | Endpoint | Role | Deskripsi |
|---|---|---|---|
| POST | `/api/bookings/:id/rating` | User | Memberi rating |
| GET | `/api/rooms/:id/ratings` | User/Admin | Melihat rating ruangan |

Request rating:

```json
{
  "rating": 5,
  "review": "Ruangan bersih, proyektor berfungsi, dan AC baik."
}
```

### 9.15 Statistics API

| Method | Endpoint | Role | Deskripsi |
|---|---|---|---|
| GET | `/api/stats/summary` | Admin | Statistik ringkas |
| GET | `/api/stats/most-used-rooms` | Admin | Ruangan paling sering dipakai |
| GET | `/api/stats/monthly-bookings` | Admin | Statistik booking bulanan |
| GET | `/api/stats/room-ratings` | Admin | Statistik rating ruangan |
| GET | `/api/stats/users` | Admin | Statistik user aktif/nonaktif |

---

## 10. Frontend Screen Requirements

### 10.1 Shared Screens

1. Splash Screen
   - Menampilkan logo Universitas Siliwangi.
   - Background `primaryGreen`.
   - Nama aplikasi.

2. Login Screen
   - Logo Universitas Siliwangi.
   - Button “Masuk dengan Google”.
   - Tidak ada login manual email/password.

3. Complete Profile Screen
   - Form:
     - nama,
     - NPM,
     - jurusan,
     - fakultas.
   - Wajib selesai sebelum user bisa booking.

### 10.2 Mobile User Screens

1. User Home
   - Greeting user.
   - Ringkasan booking aktif.
   - Shortcut daftar ruangan dan riwayat.

2. Room List
   - Search nama ruangan.
   - Filter kapasitas.
   - Filter fasilitas.
   - Card ruangan dengan foto, nama, lokasi, kapasitas, rating.

3. Room Detail
   - Foto ruangan.
   - Fasilitas.
   - Kapasitas.
   - Deskripsi.
   - Jadwal tersedia.
   - Button ajukan booking.

4. Booking Form
   - Pilih tanggal.
   - Pilih jam mulai dan selesai.
   - Tujuan pemakaian.
   - Jumlah peserta.
   - Upload proposal/surat.

5. My Bookings
   - List riwayat booking.
   - Filter status.
   - Badge status.

6. Booking Detail
   - Detail ruangan.
   - Jadwal.
   - Status.
   - Catatan admin.
   - Dokumen.
   - Button ajukan cancel jika memenuhi syarat.
   - Button rating jika status `completed`.

7. Cancel Request Form
   - Input alasan cancel.
   - Minimal 10 karakter.
   - Submit.

8. Notifications
   - List notifikasi.
   - Tandai sudah dibaca.

9. Rating Form
   - Rating 1–5.
   - Review opsional.

### 10.3 Web Admin Screens

1. Admin Dashboard
   - Total booking.
   - Booking pending.
   - Cancel request pending.
   - User aktif/nonaktif.
   - Ruangan paling sering digunakan.

2. Room Management
   - Table ruangan.
   - Add/edit/delete room.
   - Upload gambar.
   - Kelola fasilitas.

3. User Management
   - Table user.
   - Search nama/email/NPM.
   - Filter role/status.
   - Activate/deactivate user.
   - Promote user menjadi admin.
   - Demote admin menjadi user.
   - Soft delete user.

4. Booking Management
   - Table semua booking.
   - Filter status/tanggal/ruangan.
   - Detail booking.
   - Approve/reject.
   - Reschedule.

5. Cancel Request Management
   - Table pengajuan cancel.
   - Detail alasan user.
   - Approve/reject dengan catatan admin.

6. Calendar
   - Kalender harian/mingguan/bulanan.
   - Event booking berdasarkan status.
   - Drag-and-drop event.
   - Klik event untuk detail.

7. Reports
   - Filter tanggal/ruangan/status.
   - Export PDF.
   - Export Excel.

8. Statistics
   - Grafik booking bulanan.
   - Ruangan paling sering digunakan.
   - Rata-rata rating ruangan.
   - User aktif/nonaktif.

9. Ratings
   - Daftar rating dan review.
   - Filter ruangan.

---

## 11. Environment Variables

### 11.1 Backend `.env.example`

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

CLOUDINARY_CLOUD_NAME="cloud-name"
CLOUDINARY_API_KEY="api-key"
CLOUDINARY_API_SECRET="api-secret"

SUPABASE_URL="https://project.supabase.co"
SUPABASE_SERVICE_ROLE_KEY="service-role-key"
SUPABASE_STORAGE_BUCKET="booking-documents"

FIREBASE_PROJECT_ID="firebase-project-id"
FIREBASE_CLIENT_EMAIL="firebase-adminsdk-email"
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"

REDIS_URL="redis://default:password@host:port"
```

### 11.2 Frontend Env / Config

```txt
API_BASE_URL=https://backend-production-url.up.railway.app/api
GOOGLE_CLIENT_ID_WEB=google-client-id
FIREBASE_PROJECT_ID=firebase-project-id
```

Rules:

1. Jangan commit `.env`.
2. Jangan hard-code secret.
3. Jangan hard-code production API URL di widget.
4. Gunakan config class.
5. `JWT_ACCESS_EXPIRES_IN` wajib bernilai `1h`.
6. `JWT_REFRESH_EXPIRES_IN` wajib bernilai `30d`.
7. `JWT_ACCESS_SECRET` dan `JWT_REFRESH_SECRET` wajib berbeda.

---

## 12. Implementation Plan untuk 4 Anggota Tim

### 12.1 Prinsip Pembagian Tugas

1. Setiap anggota punya area ownership jelas.
2. Setiap anggota boleh membaca file lain, tetapi tidak boleh mengubah ownership utama tanpa koordinasi.
3. Backend API contract harus disepakati lebih awal.
4. Frontend tidak boleh membuat mock API permanen setelah backend endpoint tersedia.
5. Pull request harus menjelaskan fitur yang dikerjakan.
6. Semua anggota wajib mengikuti PRD dan struktur dua repository, bukan monorepo.
7. Semua anggota wajib menjaga type safety. Dilarang memakai `any` pada backend TypeScript.

---

### 12.2 Anggota 1 — Backend Core, Auth Session & Database Owner

#### Repository Utama

```txt
unsil-room-booking-backend
```

#### Area Ownership

```txt
prisma/
src/config/
src/middlewares/
src/shared/types/
src/shared/utils/jwt.util.ts
src/shared/utils/hash.util.ts
src/modules/auth/
src/modules/profile/
src/modules/users/
src/modules/rooms/
src/modules/facilities/
src/modules/bookings/
docs/api-contract.md
docs/database-schema.md
```

#### Tanggung Jawab Detail

1. Setup Express.js TypeScript dengan `strict` mode.
2. Setup ESLint rule `@typescript-eslint/no-explicit-any: error`.
3. Setup Prisma dan koneksi Supabase PostgreSQL.
4. Membuat `schema.prisma`, termasuk model `RefreshToken`.
5. Membuat migration dan seed admin.
6. Membuat middleware:
   - auth JWT access token,
   - role admin,
   - validation Zod,
   - error handler.
7. Implementasi Google OAuth verification.
8. Implementasi JWT session:
   - access token 1 jam,
   - refresh token 30 hari,
   - hash refresh token di database,
   - refresh token rotation,
   - revoke refresh token saat logout.
9. Implementasi profile completion.
10. Implementasi admin user management:
    - list user,
    - detail user,
    - activate/deactivate,
    - promote/demote,
    - soft delete.
11. Implementasi room management:
    - CRUD room,
    - fasilitas,
    - filter room.
12. Implementasi booking core:
    - create booking,
    - conflict validation,
    - my bookings,
    - all bookings,
    - approve/reject,
    - reschedule,
    - complete.
13. Semua request/response DTO wajib typed dan divalidasi Zod.
14. Menulis unit/integration test minimal:
    - auth,
    - token refresh,
    - booking conflict,
    - role access.

#### Deliverable

1. Backend bisa running lokal.
2. Prisma migration tersedia.
3. Seed admin tersedia.
4. API auth, profile, user, room, booking selesai.
5. API terdokumentasi di `docs/api-contract.md`.
6. Tidak ada penggunaan `any` di file TypeScript.

---

### 12.3 Anggota 2 — Backend Integrations, Notification, Reports & Storage Owner

#### Repository Utama

```txt
unsil-room-booking-backend
```

#### Area Ownership

```txt
src/integrations/
src/modules/documents/
src/modules/notifications/
src/modules/reminders/
src/modules/cancel-requests/
src/modules/reports/
src/modules/ratings/
src/modules/statistics/
docs/deployment-guide.md
```

#### Tanggung Jawab Detail

1. Setup Cloudinary integration dengan typed adapter response.
2. Upload gambar ruangan ke Cloudinary.
3. Setup Supabase Storage integration dengan typed adapter response.
4. Upload dokumen proposal/surat:
   - PDF,
   - DOC,
   - DOCX,
   - maksimal 5 MB.
5. Setup Firebase Admin SDK.
6. Register dan simpan FCM token.
7. Kirim push notification:
   - booking approved,
   - booking rejected,
   - cancel approved/rejected,
   - reschedule,
   - reminder.
8. Implementasi in-app notification.
9. Implementasi reminder scheduler:
   - 30 menit sebelum jadwal,
   - hanya booking approved,
   - tidak duplikat.
10. Implementasi cancel request:
    - user mengajukan cancel,
    - admin approve/reject cancel.
11. Implementasi export PDF.
12. Implementasi export Excel.
13. Implementasi rating ruangan.
14. Implementasi statistics:
    - summary,
    - most-used rooms,
    - monthly bookings,
    - room ratings,
    - user stats.
15. Menyiapkan deployment backend Railway.
16. Membuat `docs/deployment-guide.md`.
17. Tidak boleh mengembalikan response eksternal sebagai `any`; gunakan `unknown` + mapper typed.

#### Deliverable

1. Upload gambar dan dokumen berjalan.
2. Push notification terkirim ke mobile.
3. Reminder berjalan.
4. Export PDF/Excel berjalan.
5. Statistik tersedia.
6. Deployment backend Railway terdokumentasi.
7. Tidak ada penggunaan `any` di file TypeScript.

---

### 12.4 Anggota 3 — Flutter Mobile User App Owner

#### Repository Utama

```txt
unsil-room-booking-frontend
```

#### Area Ownership

```txt
lib/core/network/
lib/core/storage/
lib/features/auth/
lib/features/profile/
lib/features/user_rooms/
lib/features/user_bookings/
lib/features/user_notifications/
lib/platform/mobile/
assets/images/logo_unsil.png
```

#### Tanggung Jawab Detail

1. Setup Flutter project mobile.
2. Setup theme dengan color palette logo.
3. Setup asset logo UNSIL.
4. Setup routing mobile.
5. Implementasi login Google.
6. Menyimpan access token dan refresh token dengan secure storage strategy.
7. Implementasi token refresh interceptor:
   - retry sekali saat 401,
   - refresh token,
   - logout jika refresh gagal.
8. Implementasi complete profile:
   - nama,
   - NPM,
   - jurusan,
   - fakultas.
9. Implementasi home user.
10. Implementasi room list:
   - search,
   - filter kapasitas,
   - filter fasilitas.
11. Implementasi room detail.
12. Implementasi jadwal ruangan.
13. Implementasi booking form.
14. Implementasi upload proposal/surat.
15. Implementasi riwayat booking.
16. Implementasi detail booking.
17. Implementasi cancel request form.
18. Implementasi notifications page.
19. Setup Firebase Messaging untuk mobile.
20. Register FCM token ke backend.
21. Implementasi rating form.
22. Handling loading, empty state, dan error state.
23. Semua model API harus typed; jangan kirim JSON mentah ke UI.

#### Deliverable

1. APK mobile user bisa di-build.
2. User bisa login, melengkapi profil, booking, cancel, rating.
3. Push notification diterima di mobile.
4. Mobile UI konsisten dengan brand UNSIL.
5. Token refresh berjalan sesuai access token 1 jam dan refresh token 30 hari.

---

### 12.5 Anggota 4 — Flutter Web Admin App Owner

#### Repository Utama

```txt
unsil-room-booking-frontend
```

#### Area Ownership

```txt
lib/core/responsive/
lib/core/network/
lib/features/admin_dashboard/
lib/features/admin_rooms/
lib/features/admin_users/
lib/features/admin_bookings/
lib/features/admin_calendar/
lib/features/admin_reports/
lib/features/admin_statistics/
lib/platform/web/
docs/demo-script.md
```

#### Tanggung Jawab Detail

1. Setup layout web admin:
   - sidebar desktop,
   - drawer mobile browser,
   - topbar,
   - responsive desktop/tablet/mobile browser.
2. Menggunakan logo UNSIL di sidebar dan login page.
3. Implementasi admin dashboard.
4. Implementasi room management:
   - table room responsif,
   - card list fallback untuk mobile browser,
   - add room,
   - edit room,
   - deactivate room,
   - upload image.
5. Implementasi facility management.
6. Implementasi user management:
   - list user,
   - search,
   - filter role/status,
   - activate/deactivate,
   - promote/demote,
   - soft delete.
7. Implementasi booking management:
   - list booking,
   - detail booking,
   - approve/reject,
   - reschedule,
   - complete.
8. Implementasi cancel request management.
9. Implementasi calendar admin:
   - day/week/month view untuk desktop/tablet,
   - agenda/list fallback untuk mobile browser,
   - status color,
   - drag-and-drop,
   - klik event detail.
10. Implementasi reports page:
    - filter,
    - export PDF,
    - export Excel.
11. Implementasi statistics page:
    - summary cards,
    - chart booking bulanan,
    - most-used rooms,
    - user stats.
12. Membuat `docs/demo-script.md`.
13. Semua state/provider harus typed; jangan gunakan `dynamic` kecuali pada boundary JSON model.

#### Deliverable

1. Web admin bisa login.
2. Admin dapat mengelola ruangan, user, booking, cancel request.
3. Kalender drag-and-drop berjalan pada desktop/tablet.
4. Kalender tetap usable pada mobile browser melalui agenda/list fallback.
5. Export dan statistik dapat digunakan dari web admin.
6. Web admin siap deploy ke Vercel.
7. Web admin responsif pada 390 px, 768 px, 1024 px, dan 1440 px.

## 13. Development Milestones

### Milestone 0 — Repository Setup

Target: Hari 1–2

- Buat dua repository terpisah: `unsil-room-booking-backend` dan `unsil-room-booking-frontend`.
- Tambahkan logo ke folder asset.
- Setup backend TypeScript.
- Setup Flutter project.
- Setup linting dasar.
- Setup `.env.example`.
- Buat README awal.

Owner:

- Anggota 1: backend setup.
- Anggota 3: Flutter setup.
- Anggota 4: admin layout setup.
- Anggota 2: external service config draft.

### Milestone 1 — Auth, Profile, Role

Target: Hari 3–6

- Google OAuth.
- JWT.
- Complete profile.
- Role middleware.
- User active/inactive.
- Frontend login mobile dan web.

Owner:

- Anggota 1: backend auth/profile.
- Anggota 3: mobile login/profile.
- Anggota 4: web login/admin guard.
- Anggota 2: testing auth dan env setup.

### Milestone 2 — Rooms & Facilities

Target: Hari 7–10

- CRUD ruangan.
- Upload image Cloudinary.
- Facility management.
- Room list dan filter.

Owner:

- Anggota 1: room/facility API.
- Anggota 2: Cloudinary upload.
- Anggota 3: mobile room list/detail/filter.
- Anggota 4: web room management.

### Milestone 3 — Booking Core

Target: Hari 11–16

- Create booking.
- Booking conflict validation.
- My bookings.
- Admin booking list.
- Approve/reject booking.
- Reschedule.
- Complete booking.
- Status logs.

Owner:

- Anggota 1: booking API.
- Anggota 3: mobile booking form/history/detail.
- Anggota 4: admin booking management.
- Anggota 2: status notification hook.

### Milestone 4 — Documents, Cancel Request, Notification

Target: Hari 17–21

- Upload proposal/surat.
- Cancel request.
- Admin cancel approval.
- FCM token registration.
- Push notification.
- In-app notification.

Owner:

- Anggota 2: storage, cancel API, notification API.
- Anggota 3: mobile upload/cancel/notification.
- Anggota 4: admin cancel request UI.
- Anggota 1: review database and auth access.

### Milestone 5 — Calendar, Reminder, Rating

Target: Hari 22–26

- Calendar API.
- Web admin calendar.
- Drag-and-drop reschedule.
- Reminder scheduler.
- Rating room.

Owner:

- Anggota 4: calendar UI.
- Anggota 2: reminder and rating API.
- Anggota 3: rating UI and reminder notification test.
- Anggota 1: calendar endpoint and conflict validation review.

### Milestone 6 — Reports, Statistics, Deployment

Target: Hari 27–32

- PDF export.
- Excel export.
- Statistics.
- Railway backend deployment.
- Vercel web deployment.
- GitHub Release APK.
- Demo script.

Owner:

- Anggota 2: reports/statistics/deployment backend.
- Anggota 4: reports/statistics UI and Vercel.
- Anggota 3: APK release.
- Anggota 1: production database migration and seed.

### Milestone 7 — Testing & Finalization

Target: Hari 33–36

- Bug fixing.
- End-to-end demo.
- Video demo.
- Dokumentasi teknis.
- Final presentation prep.

Owner:

- Semua anggota.

---

## 14. Testing Requirements

### 14.1 Backend Test Minimal

1. Login Google mock berhasil.
2. Role user tidak bisa akses endpoint admin.
3. User inactive tidak bisa akses fitur.
4. Booking tidak boleh bentrok.
5. Booking bisa approve.
6. Booking bisa reject dengan alasan.
7. Cancel request wajib alasan.
8. Admin tidak bisa hapus dirinya sendiri.
9. Admin terakhir tidak bisa dihapus/demote.
10. Rating hanya untuk booking completed.

### 14.2 Frontend Manual Test

1. Login mobile.
2. Complete profile.
3. Lihat daftar ruangan.
4. Filter ruangan.
5. Ajukan booking.
6. Upload dokumen.
7. Admin approve booking.
8. Mobile menerima notifikasi.
9. User ajukan cancel.
10. Admin approve/reject cancel.
11. Reminder muncul.
12. User memberi rating setelah booking completed.
13. Admin export PDF/Excel.
14. Admin lihat statistik.
15. Admin drag-and-drop kalender.

---

## 15. Deployment Requirements

### 15.1 Backend Railway

1. Root directory: root repository `unsil-room-booking-backend`.
2. Build command: `npm run build`.
3. Start command: `npm run start`.
4. Environment variable harus diset di Railway.
5. Migration Prisma harus dijalankan sebelum production demo.

### 15.2 Web Admin Vercel

1. Root directory: root repository `unsil-room-booking-frontend`.
2. Build command:
   ```bash
   flutter build web
   ```
3. Output directory:
   ```txt
   build/web
   ```
4. Pastikan API base URL mengarah ke backend Railway.

### 15.3 Mobile GitHub Release

1. Build APK:
   ```bash
   flutter build apk --release
   ```
2. Upload APK ke GitHub Release.
3. Release note berisi:
   - versi,
   - fitur utama,
   - link backend production,
   - known issue jika ada.

---

## 16. Definition of Done

Sebuah fitur dianggap selesai jika:

1. API tersedia dan terdokumentasi.
2. Validasi backend berjalan.
3. Frontend terhubung ke API real.
4. Role access berjalan.
5. Loading state tersedia.
6. Error state tersedia.
7. Empty state tersedia jika relevan.
8. UI mengikuti color palette UNSIL.
9. Tidak ada secret di source code.
10. Tidak ada hard-coded API production di widget.
11. Backend lolos `tsc --noEmit` tanpa error type.
12. Backend tidak menggunakan `any`, `as any`, `Record<string, any>`, atau `Promise<any>`.
13. Access token berlaku 1 jam dan refresh token berlaku 30 hari.
14. Refresh token tersimpan sebagai hash dan dapat di-revoke saat logout.
15. Minimal sudah diuji manual.
16. Tidak merusak flow lain.

---

## 17. AI Agent Guardrails

AI agent wajib mengikuti aturan berikut.

### 17.1 General Guardrails

1. Jangan membuat fitur di luar PRD.
2. Jangan membuat QR Code karena fitur tersebut sudah dihapus dari scope.
3. Jangan menambah role selain `user` dan `admin`.
4. Jangan membuat login manual email/password.
5. Jangan mengubah nama aplikasi.
6. Jangan mengubah palette warna tanpa izin.
7. Jangan menghapus logo UNSIL.
8. Jangan membuat struktur monorepo.
9. Jangan membuat folder `apps/backend` atau `apps/frontend`.
10. Jangan hard-code secret.
11. Jangan hard-code API URL di widget.
12. Jangan query database langsung dari controller.
13. Jangan panggil SDK eksternal langsung dari controller.
14. Jangan menghapus validasi backend hanya karena frontend sudah validasi.
15. Jangan membuat web admin hanya desktop-only.
16. Jangan membuat layout yang overflow di mobile browser.
17. Jangan membuat drag-and-drop kalender sebagai satu-satunya cara reschedule pada mobile browser.

### 17.2 Type Safety Guardrails Backend

Rules ini wajib. Pull request tidak boleh diterima jika melanggar rules berikut.

1. Dilarang menggunakan `any` dalam bentuk apa pun.
2. Dilarang menggunakan `as any` untuk memaksa type.
3. Dilarang menggunakan `Record<string, any>`; gunakan `Record<string, unknown>` jika benar-benar diperlukan.
4. Dilarang menggunakan return type `Promise<any>`.
5. Dilarang menggunakan parameter `req: any`, `res: any`, atau `next: any`.
6. Dilarang menggunakan raw JSON tanpa validasi Zod.
7. Gunakan `unknown` untuk data yang belum diketahui, lalu parse menggunakan Zod atau mapper typed.
8. Semua controller, service, repository, integration adapter, dan utility function wajib punya return type eksplisit.
9. Semua request DTO dan response DTO wajib didefinisikan pada file `*.dto.ts`.
10. Semua Prisma query hanya boleh berada di repository layer.
11. `tsconfig.json` wajib `strict: true`, `noImplicitAny: true`, `strictNullChecks: true`, `noUncheckedIndexedAccess: true`.
12. ESLint wajib mengaktifkan `@typescript-eslint/no-explicit-any: error`.

### 17.3 Type Safety Guardrails Frontend

1. Jangan menggunakan `dynamic` untuk domain entity, provider state, repository return type, atau widget parameter.
2. `Map<String, dynamic>` hanya boleh muncul pada boundary parsing JSON, misalnya method `fromJson`.
3. Setelah `fromJson`, UI hanya boleh menerima model/entity typed.
4. Semua API response harus menggunakan wrapper typed seperti `ApiResponse<T>`.
5. Jangan mengirim `Map` bebas ke UI.
6. Jangan menyimpan token sebagai `dynamic` atau `Object`; gunakan model typed seperti `AuthSession`.
7. Semua route argument harus typed atau dibungkus model yang jelas.

### 17.4 Session Guardrails

1. Access token wajib expired dalam 1 jam.
2. Refresh token wajib expired dalam 30 hari.
3. Refresh token wajib disimpan di database sebagai hash.
4. Refresh token wajib dirotasi saat endpoint `/api/auth/refresh` dipakai.
5. Logout wajib me-revoke refresh token aktif.
6. User inactive/deleted tidak boleh refresh token.
7. Frontend wajib menghapus access token dan refresh token saat logout.
8. Frontend tidak boleh menyimpan token di URL atau log console.

## 18. Demo Script Ringkas

1. Buka aplikasi mobile.
2. Login dengan Google.
3. Lengkapi profil nama, NPM, jurusan, fakultas.
4. Lihat daftar ruangan.
5. Filter ruangan berdasarkan kapasitas dan fasilitas.
6. Pilih ruangan.
7. Ajukan booking dan upload proposal.
8. Buka web admin.
9. Login sebagai admin.
10. Lihat booking pending.
11. Approve booking.
12. Tunjukkan push notification masuk di mobile.
13. Buka kalender admin.
14. Drag-and-drop jadwal booking.
15. Tunjukkan notifikasi reschedule di mobile.
16. User ajukan cancel dengan alasan.
17. Admin approve/reject cancel.
18. Admin export laporan PDF/Excel.
19. Admin lihat statistik ruangan paling sering digunakan.
20. Admin kelola user dan promote user menjadi admin.
21. Admin menandai booking lain sebagai completed.
22. User memberi rating ruangan.
23. Admin melihat statistik rating.

---

## 19. Final Product Acceptance Criteria

Produk dinyatakan layak presentasi jika semua poin berikut terpenuhi.

1. Backend TypeScript tidak memiliki penggunaan `any` dan lolos strict type checking.
2. Login menghasilkan access token 1 jam dan refresh token 30 hari.
3. Refresh token tersimpan sebagai hash, dapat dirotasi, dan dapat di-revoke saat logout.
4. Mobile app bisa login Google.
5. Web admin bisa login Google.
6. User wajib melengkapi profil akademik.
7. Admin dapat mengelola user.
8. Admin dapat menjadikan user sebagai admin.
9. Admin dapat menonaktifkan dan soft delete user.
10. Admin dapat CRUD ruangan.
11. User dapat melihat dan memfilter ruangan.
12. User dapat melihat jadwal ruangan.
13. User dapat mengajukan booking.
14. Booking bentrok ditolak oleh backend.
15. User dapat upload proposal/surat.
16. Admin dapat approve/reject booking.
17. User dapat melihat riwayat booking.
18. User dapat mengajukan cancel booking dengan alasan.
19. Admin dapat approve/reject cancel request.
20. Mobile menerima push notification.
21. Reminder berjalan sebelum jadwal dimulai.
22. Web admin memiliki kalender interaktif drag-and-drop.
23. Admin dapat export laporan PDF/Excel.
24. User dapat memberi rating setelah booking completed.
25. Admin dapat melihat statistik penggunaan ruangan.
26. UI konsisten dengan logo dan warna Universitas Siliwangi.
27. Aplikasi menggunakan satu backend yang sama untuk web dan mobile.
28. Tidak ada QR Code verification.
