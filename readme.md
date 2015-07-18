# is-sketch

Check if a Buffer/Uint8Array is a [Sketch](http://bohemiancoding.com/sketch/) file.

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
