---
mode: agent
agent: build-engineer
description: Create build configuration and unit test
---
# /create-build
Use skill **build-and-test**.
**Preconditions:** create-project done.
**Actions:** create/update `package.json` (scripts build/test/start/check), `tsconfig.json` (outDir build), `src/add.ts`, `tests/basic.test.ts` (suite `BasicAddition`), `scripts/make-executable.mjs` (creates `build/hello`, `build/hello.cmd`).
**Verify:** `npm install`, `npm run build`, `npm test`, then run `build/hello`.
**On error:** show compiler/test output, fix the instructions or sources, rerun.
