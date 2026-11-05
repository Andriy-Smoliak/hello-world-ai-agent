---
name: project-scaffold
description: Create a minimal Hello World project (README, folders, .gitignore). Use when a new project skeleton is needed.
---
# project-scaffold
**When to use:** at the start of the scenario (`/create-project`).
**Input:** `language` (TypeScript), `name` (hello-ts). Example: `language=TypeScript, name=hello-ts`.
**Output:** `src/index.ts` (prints `Hello, World!`), `README.md`, folders `src/ tests/ docs/`, `.gitignore` with `build/` and `node_modules/`.
**Checks:** the files exist; README contains the run command (`npm run build && npm start`).
**Typical error:** `src/index.ts` already exists with different content -> do not overwrite; report and ask to confirm.
