'use strict';

var assert    = require('power-assert');
var readChunk = require('read-chunk');
var isSketch  = require('./');

describe('isSketch', function() {
  it('should detect Sketch file from Buffer', function() {
    assert(isSketch(readChunk.sync('blank.sketch', 0, 4)));
    assert(isSketch(readChunk.sync('image.sketch', 0, 4)));
  });

  it('should return false from gif Buffer', function() {
    assert(!isSketch(readChunk.sync('image.gif', 0, 4)));
  });

  it('should return false from jpg Buffer', function() {
    assert(!isSketch(readChunk.sync('image.jpg', 0, 4)));
  });

  it('should return false from png Buffer', function() {
    assert(!isSketch(readChunk.sync('image.png', 0, 4)));
  });
});
