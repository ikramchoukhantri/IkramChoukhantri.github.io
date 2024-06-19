#!/usr/bin/env sh

# Abort on errors
set -e

# Set environment variables and build the project
env PUBLIC_URL=https://ikramchoukhantri.github.io npm run build

# Navigate into the build output directory
cd build

# Initialize a new Git repository
git init

# Add all files to the repository
git add -A

# Commit the files with a message
git commit -m 'deploy'

# Push to the GitHub Pages branch
git push -f git@github.com:ikramchoukhantri/ikramchoukhantri.github.io.git main:gh-pages