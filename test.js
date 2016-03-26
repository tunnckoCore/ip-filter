/*!
 * ip-filter <https://github.com/tunnckoCore/ip-filter>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var test = require('assertit')
var ipFilter = require('./index')

test('should throw Error if not valid IPv4 or IPv6 ip is given', function (done) {
  function fixture () {
    ipFilter('foo.bar.baz.123', './**/.glob*')
  }

  test.throws(fixture, Error)
  test.throws(fixture, /ip-filter expect only valid IPv4/)
  done()
})

test('should return IP if match given patterns', function (done) {
  var actual = ipFilter('123.77.34.89', '123.??.34.8*')
  var expected = '123.77.34.89'

  test.equal(actual, expected)
  done()
})

test('should return null if not match', function (done) {
  var actual = ipFilter('123.222.34.89', ['123.???.34.8*', '!123.222.34.89'])
  var expected = null

  test.equal(actual, expected)
  done()
})

test('should support no strict mode to compare other than IPs', function (done) {
  var actual = ipFilter('x-koaip', ['*-koaip', '!foo-koa'], true)
  var expected = 'x-koaip'

  test.equal(actual, expected)
  done()
})

test('should work in no strict mode', function (done) {
  var actual = ipFilter('x-koaip.foo', ['*-koaip.*', '!foo-koa.*'], true)
  test.strictEqual(actual, 'x-koaip.foo')
  done()
})

