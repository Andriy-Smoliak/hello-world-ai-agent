---
name: build-and-test
description: Configure TypeScript build, npm scripts, Vitest, add() function and BasicAddition unit test.
---
# build-and-test
**When to use:** `/create-build`.
**Input:** project name and source folder (`src`). Example: `name=hello-ts`.
**Output:** `package.json` (scripts: build, test, start, check), `tsconfig.json` (`outDir: build`), `src/add.ts`, `tests/basic.test.ts` with suite `BasicAddition`, `scripts/make-executable.mjs` creating `build/hello` and `build/hello.cmd`.
**Checks:** `npm run build` -> `build/hello` exists; `npm test` -> `BasicAddition` passes; running `build/hello` prints `Hello, World!`.
**Typical error:** TS error `Cannot find module './add.js'` -> imports in ESM must use the `.js` extension; fix the source, rerun build.
