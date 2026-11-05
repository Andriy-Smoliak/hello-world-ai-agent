# Usage

## Run the agent (VS Code + GitHub Copilot Chat)
1. Open the repository folder, switch Copilot Chat to **Agent** mode, pick `build-engineer`.
2. Type `/init` (or run steps one by one: `/git-init`, `/create-project`, `/create-build`, `/create-actions`, `/check`).

## Local verification (Node.js >= 20)
```
npm ci
npm run check
npm run build
npm test
```
Linux/macOS: `./ci.sh`  Windows: `ci.bat`

## Run the built program
Linux/macOS: `./build/hello`  Windows: `build\hello.cmd`  (or `npm start`)
Expected output: `Hello, World!`
