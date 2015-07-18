'use strict';

module.exports = function(buffer) {

  if (!buffer || buffer.length < 4) {
    return false;
  }

  return buffer[0] === 83 &&
         buffer[1] === 81 &&
         buffer[2] === 76 &&
         buffer[3] === 105;
};
