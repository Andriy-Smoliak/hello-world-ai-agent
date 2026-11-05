---
mode: agent
agent: build-engineer
description: Check Git repo, create/update .gitignore, show status
---
# /git-init
**Preconditions:** git installed; current folder is the project root.
**Actions:**
1. If no repo exists, run `git init`; otherwise do not touch history.
2. Create `.gitignore` or append only missing lines: `node_modules/`, `build/`, `dist/`, `coverage/`, `*.log`, `.env`, `.env.*`.
3. Run `git status --short` and `git branch --show-current`.
**Expected files:** `.gitignore`.
**Verify:** `git check-ignore build node_modules` prints both paths.
**On error:** report the failing command and stop. Never use force/reset/clean.
