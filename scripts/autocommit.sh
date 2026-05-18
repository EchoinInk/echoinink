#!/bin/bash

# ==========================================
# Auto Commit Script
# ==========================================

# Resolve repo directory safely
REPO_DIR="$(cd "$(dirname "$0")/.." && pwd)"

cd "$REPO_DIR" || exit 1

echo ""
echo "========================================="
echo "Autocommit started"
echo "Repository: $REPO_DIR"
echo "Started at: $(date)"
echo "========================================="

while true
do
    echo ""
    echo "========================================="
    echo "Running autocommit cycle: $(date)"
    echo "========================================="

    # Fetch latest changes
    git fetch origin

    # Pull latest safely
    git pull --rebase origin main || {
        echo "Git pull failed. Skipping cycle."
        sleep 300
        continue
    }

    # Stage all changes
    git add .

    # Only commit if changes exist
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

        echo "Changes detected."
        echo "Committing with message: $RANDOM_MESSAGE"

        git commit -m "$RANDOM_MESSAGE"

        git push origin main || {
            echo "Git push failed."
        }

    else
        echo "No changes detected."
    fi

    echo "Sleeping for 5 minutes..."
    sleep 300
done