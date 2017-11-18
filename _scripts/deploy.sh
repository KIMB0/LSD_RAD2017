#!/bin/bash
set -x

# Initialize a new git repo in _site, and push it to our server.
ng build --prod
cp .htaccess dist/ 
cd dist
git init

git remote add deploy-hack "root@138.197.42.192:/var/repo/travis.git"
git config user.name "KIMB0"
git config user.email "kimsen1992@gmail.com"

git add .
git commit -m "Deploy"
git push --force deploy-hack master
