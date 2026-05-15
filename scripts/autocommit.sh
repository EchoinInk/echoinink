#!/bin/bash

cd "$(dirname "$0")/.."

git pull origin main --rebase

git add .

if ! git diff --cached --quiet; then

    MESSAGES=(
        "Refine interface atmosphere"
        "Improve visual composition"
        "Polish typography and spacing"
        "Enhance cinematic styling"
        "Adjust layout and responsiveness"
        "Refine motion and transitions"
        "Improve hero presentation"
        "Update branding details"
        "Enhance overall experience"
        "Creative iteration and refinement"
    )

    RANDOM_MESSAGE=${MESSAGES[$RANDOM % ${#MESSAGES[@]}]}

    git commit -m "$RANDOM_MESSAGE"
    git push origin main

fi