#!/usr/bin/env bash
set -euo pipefail
npm ci
npm run check
npm run build
npm test
./build/hello
