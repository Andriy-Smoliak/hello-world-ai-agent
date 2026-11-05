---
mode: agent
agent: build-engineer
description: Create CI scripts and GitHub Actions workflow
---
# /create-actions
Use skill **github-actions**.
**Preconditions:** create-build done and `npm run build && npm test` pass.
**Actions:** create `ci.sh`, `ci.bat` (install, check, build, test, run hello) and `.github/workflows/ci.yml` (one job, matrix ubuntu/windows/macos, triggers push+pull_request on develop/master; steps only checkout, setup-node, run ci script, upload build/).
**Verify:** all three OS names present in the YAML; YAML parses; no secrets.
**On error:** report which part of the workflow is invalid.
