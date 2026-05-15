#!/bin/bash

cd "$(dirname "$0")/.."

git add .

if ! git diff --cached --quiet; then
    git commit -m "Auto-save: $(date '+%Y-%m-%d %H:%M:%S')"
    git push origin main
fi