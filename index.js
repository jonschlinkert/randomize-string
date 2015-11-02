/*!
 * randomize-string <https://github.com/jonschlinkert/randomize-string>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var isNumber = require('is-number');

module.exports = function randomize(chars, num) {
  if (typeof chars !== 'string') {
    throw new TypeError('expected a string.');
  }

  var len = chars.length;
  var str = '';

  num = isNumber(num) ? +num : len;
  while (num--) {
    str += chars[parseInt(Math.random() * len)];
  }
  return str;
};
