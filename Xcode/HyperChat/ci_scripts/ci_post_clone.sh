#!/bin/sh

#  ci_post_clone.sh
#  HyperChat
#
#  Created by Andrew Glaze on 6/23/22.
#  

curl https://nodejs.org/download/release/latest-gallium/node-v16.15.1-darwin-x64.tar.xz --output node-16.tar.gz
tar -xf node-16.tar.gz
cp -r node-16 /Users/local/Homebrew/Cellar/node-16/16/
brew link node-16

brew install yarn

