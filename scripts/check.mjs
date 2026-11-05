// Read-only project verification (used by the `check` command). Does not modify files.
import { existsSync, readFileSync } from "node:fs";

const errors = [];
const need = (p) => { if (!existsSync(p)) errors.push(`missing: ${p}`); };
const has = (p, text, label) => {
  if (existsSync(p) && !readFileSync(p, "utf8").includes(text)) errors.push(`${p}: ${label}`);
};

[
  ".github/agents/build-engineer.agent.md",
  ".github/skills/project-scaffold/SKILL.md",
  ".github/skills/build-and-test/SKILL.md",
  ".github/skills/github-actions/SKILL.md",
  ".github/prompts/git-init.prompt.md",
  ".github/prompts/create-project.prompt.md",
  ".github/prompts/create-build.prompt.md",
  ".github/prompts/create-actions.prompt.md",
  ".github/prompts/check.prompt.md",
  ".github/prompts/init.prompt.md",
  ".github/workflows/ci.yml",
  "src/index.ts", "tests/basic.test.ts", "ci.sh", "ci.bat",
  "README.md", "docs/architecture.md", "docs/usage.md", ".gitignore",
].forEach(need);

for (const os of ["ubuntu-latest", "windows-latest", "macos-latest"])
  has(".github/workflows/ci.yml", os, `no ${os} in matrix`);
has(".github/workflows/ci.yml", "pull_request", "no pull_request trigger");
has(".gitignore", "build/", "build/ not ignored");
has(".gitignore", "node_modules/", "node_modules/ not ignored");
has(".github/agents/build-engineer.agent.md", "Forbidden", "no Forbidden section");
has(".github/agents/build-engineer.agent.md", "Definition of done", "no Definition of done");

if (errors.length) {
  console.error("CHECK FAILED:\n - " + errors.join("\n - "));
  process.exit(1);
}
console.log("CHECK OK: structure, workflow matrix and .gitignore are valid");
