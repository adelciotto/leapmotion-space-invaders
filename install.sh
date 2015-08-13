#! /bin/sh
#
# install.sh
# Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
#
# Distributed under terms of the MIT license.

# check if cmd args supplied
if [[ -z "$1" || -z "$2" ]]; then
  echo "usage: ./install.sh <github-username> <prototype-repo-name>"
  exit 0
fi

# check if node and npm is installed
echo "checking if node is installed..."
if !hash node 2>/dev/null; then
  echo "install node bro..."
  exit 0
fi

## set the new remote repo
echo "setting new remote origin url"
git remote set-url origin https://github.com/$1/$2.git

## install dependencies
npm i
echo ""
echo "start developing: run npm watch"
