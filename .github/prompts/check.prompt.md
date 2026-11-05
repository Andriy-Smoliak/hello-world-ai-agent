---
mode: agent
agent: build-engineer
description: Read-only verification of structure, build, tests and workflow
---
# /check
**Does NOT modify any project file.**
**Actions:**
1. `npm run check` (structure, matrix, .gitignore, manifest sections).
2. `npm run build` and `npm test` (output only in ignored `build/`).
3. Run `build/hello`; confirm it prints `Hello, World!`.
4. `git status --short` - confirm no `build/`, `node_modules/`, secrets.
**Result:** table of checks PASS/FAIL. Any FAIL -> non-success report.
