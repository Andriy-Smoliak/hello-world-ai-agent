---
name: github-actions
description: Create CI scripts and a GitHub Actions matrix workflow for Windows, Linux and macOS.
---
# github-actions
**When to use:** `/create-actions`.
**Input:** branches (`develop`, `master`), Node version (22). Example: `branches=develop,master`.
**Output:** `ci.sh`, `ci.bat`, `.github/workflows/ci.yml` - one job `build-test`, matrix `ubuntu-latest/windows-latest/macos-latest`, steps: checkout, setup-node, run `ci.sh`/`ci.bat`, upload `build/` artifact. The workflow contains no build logic itself.
**Checks:** YAML valid; three OS names present; triggers push + pull_request; no secrets.
**Typical error:** `ci.sh` not executable on Linux/macOS -> `git update-index --chmod=+x ci.sh`.
