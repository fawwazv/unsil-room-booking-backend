# AI_RULES.md — Agent 01 Backend Core

1. Repo: `unsil-room-booking-backend` only.
2. Ikuti `routes -> controller -> service -> repository -> Prisma`.
3. Jangan query Prisma dari controller/service; hanya repository.
4. Jangan ubah folder milik Agent 02 tanpa izin.
5. Dilarang `any`, `as any`, `Record<string, any>`, `Promise<any>`.
6. Gunakan `unknown` + Zod untuk input eksternal.
7. Semua DTO request/response di `*.dto.ts`.
8. Semua request schema di `*.validation.ts`.
9. Access token 1 jam, refresh token 30 hari.
10. Refresh token wajib hash, rotate, revoke.
11. Jangan membuat login email/password.
12. Jangan membuat QR Code.
13. Jalankan `npm run build` atau `tsc --noEmit` setelah perubahan.
