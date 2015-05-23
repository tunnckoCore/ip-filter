/*!
 * ip-filter <https://github.com/tunnckoCore/ip-filter>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var ipFilter = require('./index')

test('ip-filter:', function () {
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
})
