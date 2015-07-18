# is-sketch

Check if a Buffer/Uint8Array is a [Sketch](http://bohemiancoding.com/sketch/) file.

[![Build Status](https://travis-ci.org/1000ch/is-sketch.svg?branch=master)](https://travis-ci.org/1000ch/is-sketch)
[![NPM version](https://badge.fury.io/js/is-sketch.svg)](http://badge.fury.io/js/is-sketch)
[![Dependency Status](https://david-dm.org/1000ch/is-sketch.svg)](https://david-dm.org/1000ch/is-sketch)
[![devDependency Status](https://david-dm.org/1000ch/is-sketch/dev-status.svg)](https://david-dm.org/1000ch/is-sketch#info=devDependencies)

## Install

```sh
$ npm install --save is-sketch
```

## Usage

```javascript
var readChunk = require('read-chunk');
var isSketch  = require('is-sketch');

isSketch(readChunk.sync('exmaple.sketch', 0, 4));
// => true
```

## license

MIT: http://1000ch.mit-license.org
