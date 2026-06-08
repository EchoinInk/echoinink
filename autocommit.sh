#!/bin/bash

set -u

BRANCH="main"
AUTO_PUSH=true
SLEEP_SECONDS=240

MESSAGES=(
  "style: refine interface atmosphere"
  "style: improve editorial composition"
  "style: polish typography and spacing"
  "style: enhance cinematic styling"
  "style: adjust responsive layout"
  "style: refine motion transitions"
  "style: improve hero presentation"
  "style: update brand details"
  "style: enhance page experience"
  "style: align section rhythm"
  "style: polish card treatments"
  "style: refine CTA presentation"
  "style: improve visual hierarchy"
  "style: refine mobile layout"
  "a11y: improve contrast and focus states"
)

while true; do
  CURRENT_BRANCH=$(git branch --show-current)

  if [ "$CURRENT_BRANCH" != "$BRANCH" ]; then
    echo "Skipping: currently on '$CURRENT_BRANCH', expected '$BRANCH'."
    sleep "$SLEEP_SECONDS"
    continue
  fi

  git add .

  if ! git diff --cached --quiet; then
    RANDOM_MESSAGE=${MESSAGES[$RANDOM % ${#MESSAGES[@]}]}
    TIMESTAMP=$(date "+%Y-%m-%d %H:%M")

    git commit -m "$RANDOM_MESSAGE — $TIMESTAMP"

    if [ "$AUTO_PUSH" = true ]; then
      npm run typecheck && git push origin "$BRANCH"
    else
      echo "Committed locally. Auto-push is off."
    fi
  else
    echo "No changes to commit."
  fi

  sleep "$SLEEP_SECONDS"
done