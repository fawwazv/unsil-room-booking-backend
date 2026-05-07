# MICRO_TASKS.md — Agent 01 Backend Core

Gunakan satu task per prompt.

## Setup & Type Safety

- BE01-T01: Audit struktur backend terhadap PRD_AGENT_01 dan AI_RULES.
- BE01-T02: Setup `tsconfig.json` strict dan ESLint no explicit any.
- BE01-T03: Buat env validation typed dengan Zod.
- BE01-T04: Buat standard `ApiResponse<T>` dan error handler typed.
- BE01-T05: Buat Prisma client singleton typed.

## Database

- BE01-T06: Buat/rapikan Prisma enum dan model core: User, RefreshToken, Room, Facility, RoomFacility, Booking, BookingStatusLog.
- BE01-T07: Tambahkan model relasi minimal untuk modul Agent 02 agar Prisma valid.
- BE01-T08: Buat seed admin dan fasilitas awal.

## Auth & Session

- BE01-T09: Buat DTO dan Zod validation auth Google, refresh, logout.
- BE01-T10: Buat `jwt.util.ts` typed untuk access/refresh token.
- BE01-T11: Buat `hash.util.ts` untuk hashing refresh token.
- BE01-T12: Implement auth repository.
- BE01-T13: Implement auth service Google login/register.
- BE01-T14: Implement refresh token rotation.
- BE01-T15: Implement logout revoke refresh token.
- BE01-T16: Implement auth controller dan routes.
- BE01-T17: Implement auth middleware typed.
- BE01-T18: Implement role admin middleware typed.

## Profile & Users

- BE01-T19: Implement profile DTO, validation, repository.
- BE01-T20: Implement profile service complete profile.
- BE01-T21: Implement profile routes/controller.
- BE01-T22: Implement admin users list/detail.
- BE01-T23: Implement activate/deactivate user.
- BE01-T24: Implement promote/demote dengan guard last admin.
- BE01-T25: Implement soft delete user dengan guard delete self.

## Rooms & Facilities

- BE01-T26: Implement facilities CRUD.
- BE01-T27: Implement rooms list/detail/filter.
- BE01-T28: Implement room create/update/deactivate.
- BE01-T29: Siapkan endpoint upload image room yang memanggil service hook Agent 02.

## Booking & Calendar

- BE01-T30: Implement booking DTO dan validation.
- BE01-T31: Implement booking conflict utility dan repository query.
- BE01-T32: Implement create booking.
- BE01-T33: Implement my bookings dan admin booking list.
- BE01-T34: Implement approve/reject booking + status log.
- BE01-T35: Implement reschedule booking + conflict recheck.
- BE01-T36: Implement complete booking.
- BE01-T37: Implement calendar API data.

## Testing & Docs

- BE01-T38: Update `docs/api-contract.md` untuk endpoint Agent 01.
- BE01-T39: Buat test minimal auth/session.
- BE01-T40: Buat test minimal booking conflict.
