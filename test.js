/*!
 * ip-filter <https://github.com/tunnckoCore/ip-filter>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var test = require('mukla')
var ipFilter = require('./index')

test('should throw TypeError if `ip` not a string', function (done) {
  function fixture () {
    ipFilter(123)
  }
  test.throws(fixture, TypeError)
  test.throws(fixture, /expect `ip` to be a string/)
  done()
})

test('should throw Error if not valid IPv4 or IPv6 ip is given', function (done) {
  function fixture () {
    ipFilter('foo.bar.baz.123', './**/.glob*')
  }
  test.throws(fixture, Error)
  test.throws(fixture, /expect only valid IPs when `opts.strict` mode/)
  done()
})

test('should return IP if match string glob pattern', function (done) {
  var actual1 = ipFilter('123.222.34.88', '123.??.34.8*') // => null
  var actual2 = ipFilter('123.77.34.89', '123.??.34.8*') // => '123.77.34.89'

  test.strictEqual(actual1, null)
  test.strictEqual(actual2, '123.77.34.89')
  done()
})

test('should return IP if match one of array glob patterns', function (done) {
  var actual1 = ipFilter('123.222.34.88', ['123.*.34.*', '!123.222.**']) // => null
  var actual2 = ipFilter('123.222.34.88', ['123.*.34.*', '!123.222.*']) // => '123.222.34.88'
  var actual3 = ipFilter('123.222.33.1', ['123.*.34.*', '*.222.33.*']) // => '123.222.33.1'

  test.strictEqual(actual1, null)
  test.strictEqual(actual2, '123.222.34.88')
  test.strictEqual(actual3, '123.222.33.1')
  done()
})

test('should return null if not match', function (done) {
  var actual = ipFilter('123.222.34.89', ['123.???.34.8*', '!123.222.34.89'])
  var expected = null

  test.strictEqual(actual, expected)
  done()
})

test('should support no strict mode to compare other than IPs', function (done) {
  var actual1 = ipFilter('x-koaip', ['*-koaip', '!foo-koa'], { strict: false })
  var actual2 = ipFilter('foo.bar.baz.123', 'foo.bar.**', { strict: false })
  var expected = 'x-koaip'

  test.strictEqual(actual1, expected)
  test.strictEqual(actual2, 'foo.bar.baz.123')
  done()
})

test('should work in non strict mode', function (done) {
  var actual = ipFilter('x-koaip.foo', ['*-koaip.*', '!foo-koa.*'], { strict: false })
  test.strictEqual(actual, 'x-koaip.foo')
  done()
})
