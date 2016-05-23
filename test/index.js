'use strict';

const test = require('ava');
const readChunk = require('read-chunk');
const isSQlite = require('../');

test('should detect SQLite file from Buffer', t => {
  t.true(isSQlite(readChunk.sync('fixture.sqlite', 0, 4)));
});

test('should return false from gif Buffer', t => {
  t.true(!isSQlite(readChunk.sync('fixture.gif', 0, 4)));
});

test('should return false from jpg Buffer', t => {
  t.true(!isSQlite(readChunk.sync('fixture.jpg', 0, 4)));
});

test('should return false from png Buffer', t => {
  t.true(!isSQlite(readChunk.sync('fixture.png', 0, 4)));
});
