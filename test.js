'use strict';

var assert    = require('power-assert');
var readChunk = require('read-chunk');
var isSQlite  = require('./');

describe('isSQLite', function() {
  it('should detect SQLite file from Buffer', function() {
    assert(isSQlite(readChunk.sync('fixture.sqlite', 0, 4)));
  });

  it('should return false from gif Buffer', function() {
    assert(!isSQlite(readChunk.sync('fixture.gif', 0, 4)));
  });

  it('should return false from jpg Buffer', function() {
    assert(!isSQlite(readChunk.sync('fixture.jpg', 0, 4)));
  });

  it('should return false from png Buffer', function() {
    assert(!isSQlite(readChunk.sync('fixture.png', 0, 4)));
  });
});
