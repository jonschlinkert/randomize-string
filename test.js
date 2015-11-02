'use strict';

require('mocha');
require('should');
var assert = require('assert');
var randomize = require('./');

describe('randomize', function () {
  it('should randomize the given string:', function () {
    randomize('abcde').length.should.eql(5);
    randomize('abcde', 3).length.should.eql(3);
    randomize('abcde', 4).length.should.eql(4);
    randomize('abcde', 1).length.should.eql(1);
    randomize('abcde', 50).length.should.eql(50);
  });

  it('should throw an error:', function () {
    (function () {
      randomize();
    }).should.throw('expected a string.');
  });
});
