#!/bin/bash

rm -rf src/node_modules aot built dist built-closure dist-closure test/src-closure

find src -name '*.ngsummary.json' -delete
find src -name '*.metadata.json' -delete
find src -name '*.ngfactory.ts' -delete
find src -name '*.ngfactory.js' -delete
find src -name '*.spec.ts' -delete
find src -name '*.js.map' -delete
find src -name '*.d.ts' -delete

find src -path 'src/app/*.js' -delete

find src -name 'main*.js' -delete
find src -name 'main*.map' -delete
