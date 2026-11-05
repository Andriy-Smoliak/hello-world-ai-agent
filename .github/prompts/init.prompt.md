---
mode: agent
agent: build-engineer
description: Orchestrator: run the full scenario
---
# /init
Run in this exact order, stopping at the first failure:
1. `/git-init`
2. `/create-project`
3. `/create-build`
4. `/create-actions`
5. `/check`

**Rules:** do not skip steps; pass the results of each step to the next; after every step confirm its "Verify" part; idempotent - rerunning must not break or duplicate anything.
**Final report:** list of steps with PASS/FAIL, created/changed files, check results. If `/check` fails, the whole run is FAILED.
