# is-sqlite

Check if a Buffer/Uint8Array is a SQLite file.

[![Build Status](https://travis-ci.org/1000ch/is-sqlite.svg?branch=master)](https://travis-ci.org/1000ch/is-sqlite)
[![NPM version](https://badge.fury.io/js/is-sqlite.svg)](http://badge.fury.io/js/is-sqlite)
[![Dependency Status](https://david-dm.org/1000ch/is-sqlite.svg)](https://david-dm.org/1000ch/is-sqlite)
[![devDependency Status](https://david-dm.org/1000ch/is-sqlite/dev-status.svg)](https://david-dm.org/1000ch/is-sqlite#info=devDependencies)

## Install

```sh
$ npm install --save is-sqlite
```

## Usage

```javascript
var readChunk = require('read-chunk');
var isSQLite  = require('is-sqlite');

isSQLite(readChunk.sync('exmaple.sqlite', 0, 4));
// => true
```

## license

MIT: http://1000ch.mit-license.org
