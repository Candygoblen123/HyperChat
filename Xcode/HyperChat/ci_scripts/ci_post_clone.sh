#!/bin/sh

#  ci_post_clone.sh
#  HyperChat
#
#  Created by Andrew Glaze on 6/23/22.
#  

brew install node
brew install yarn
cd ../../
yarn
VERSION=$(git describe --abbrev=0 --tags) yarn build
