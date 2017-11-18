#!/bin/bash
set -x

# Initialize a new git repo in _site, and push it to our server.
git init
git branch

git remote add deploy "root@138.197.42.192:/var/repo/travis.git"
git config user.name "KIMB0"
git config user.email "kimsen1992@gmail.com"

git add .
git commit -m "Deploy"
git push --force deploy master