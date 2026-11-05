// Creates the `hello` launcher (Unix) and `hello.cmd` (Windows) in build/
import { writeFileSync, chmodSync, existsSync } from "node:fs";

if (!existsSync("build/index.js")) {
  console.error("build/index.js not found: run tsc first");
  process.exit(1);
}
writeFileSync("build/hello", '#!/usr/bin/env node\nimport "./index.js";\n');
try { chmodSync("build/hello", 0o755); } catch { /* ignored on Windows */ }
writeFileSync("build/hello.cmd", '@echo off\r\nnode "%~dp0index.js" %*\r\n');
console.log("Created build/hello and build/hello.cmd");
