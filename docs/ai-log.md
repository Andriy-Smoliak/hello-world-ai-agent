# AI interaction log
| # | Prompt | Key response | Problem | Decision |
|---|---|---|---|---|
| 1 | Перевірити локальний проєкт за методичкою | `npm run build`, `npm test` (2/2) та `npm run check` пройшли; `npm start` і `build\hello.cmd` вивели `Hello, World!` | GitHub Actions ще не запускали; `npm ci` повідомив про 3 вразливості залежностей (1 середню, 2 критичні) | Зафіксувати локальні результати, не стверджувати про успішний CI; залишити аудит залежностей для окремого виправлення |
