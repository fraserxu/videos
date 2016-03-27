#!/bin/bash

set -e -x

rm -rf dist

mkdir -p dist

npm run build

cp -r index.html index.css bundle.js CNAME dist

# surge dist videos.fraserxu.me

# rm -rf dist
