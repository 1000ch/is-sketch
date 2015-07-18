'use strict';

var assert    = require('power-assert');
var readChunk = require('read-chunk');
var isSketch  = require('./');

it('should detect Sketch file from Buffer', function() {
  assert(isSketch(readChunk.sync('blank.sketch', 0, 4)));
  assert(isSketch(readChunk.sync('image.sketch', 0, 4)));
});
