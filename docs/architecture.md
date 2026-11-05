# Architecture

## Problem solved
The agent turns the requirement "cross-platform Hello World with tests and CI" into a repeatable,
verifiable process instead of a one-off prompt.

## Mapping to Copilot (VS Code) format
| Role | File |
|---|---|
| Agent manifest | `.github/agents/build-engineer.agent.md` |
| Skills | `.github/skills/*/SKILL.md` |
| Commands | `.github/prompts/*.prompt.md` (invoked as `/name` in Copilot Chat) |
| Orchestrator | `.github/prompts/init.prompt.md` |
| CI | `.github/workflows/ci.yml` + `ci.sh` / `ci.bat` |

## Interaction
| Command | Skill | Result passed on |
|---|---|---|
| git-init | - | repo + .gitignore |
| create-project | project-scaffold | src/index.ts, README |
| create-build | build-and-test | package.json, tsconfig, tests, build/hello |
| create-actions | github-actions | ci.sh, ci.bat, ci.yml |
| check | - | PASS/FAIL report |
| init | all above | final report |

## Error handling
`init` stops at the first failed step, reports step/command/output, and never reports success without a passing `check`.
Commands are idempotent: read before write, append only missing lines.
