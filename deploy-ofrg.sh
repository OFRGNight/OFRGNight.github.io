#!/bin/bash
set -e

rm -rfv _site/*

rm -rfv docs/*

today=$(date)

JEKYLL_ENV="production" bundle exec jekyll build

mv _site/* docs

git add .
git commit -a -m "SYNC - $today"
git push -f
