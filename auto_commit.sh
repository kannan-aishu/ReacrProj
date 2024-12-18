#!/bin/bash

# Add changes to git
git add .

# Commit changes with a timestamp as the commit message
git commit -m "Auto commit on $(date)"

# Push the changes to the remote repository
git push
