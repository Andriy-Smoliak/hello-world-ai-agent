---
mode: agent
agent: build-engineer
description: Create the Hello World TypeScript project skeleton
---
# /create-project
Use skill **project-scaffold**. Input: language=TypeScript, name=hello-ts.
**Preconditions:** git-init done.
**Actions:** create `src/index.ts`, `README.md`, `docs/`, `tests/` if absent.
**Expected files:** `src/index.ts` printing `Hello, World!`, `README.md`.
**Verify:** files exist; run command documented in README.
**On error:** report missing file/parameter; do not overwrite existing files.
