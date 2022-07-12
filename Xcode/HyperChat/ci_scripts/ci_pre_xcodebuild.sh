#!/bin/sh

#  ci_pre_xcodebuild.sh
#  HyperChat
#
#  Created by Andrew Glaze on 6/24/22.
#

cd ../../
yarn
VERSION=$(git describe --abbrev=0 --tags) yarn build
