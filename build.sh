#!/bin/bash -ex

echo "install and build root"

npm i
npm run build

echo "install and build global-nav"

cd apps/global-nav
npm i
npm run build:single-spa:global-nav
cp -r ./dist/global-nav ../../dist/global-nav
cd ../../

echo "install and build angular-app"

cd apps/angular-app
npm i
npm run build:single-spa:angular-app
cp -r ./dist/angular-app ../../dist/angular-app
cd ../../

echo "end"
