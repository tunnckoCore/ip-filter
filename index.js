/*!
 * ip-filter <https://github.com/tunnckoCore/ip-filter>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var ipRegex = require('ip-regex')
var isMatch = require('is-match')
var toPath = require('to-file-path')

/**
 * > Filter `ip` against glob `patterns`.
 *
 * **Example**
 *
 * ```js
 * var ipFilter = require('ip-filter')
 *
 * console.log(ipFilter('123.77.34.89', '123.??.34.8*')) // => '123.77.34.89'
 * console.log(ipFilter('123.222.34.88', '123.??.34.8*')) // => null
 * console.log(ipFilter('123.222.34.88', ['123.*.34.*', '!123.222.*'])) // => null
 * console.log(ipFilter('123.222.33.1', ['123.*.34.*', '*.222.33.*'])) // => '123.222.33.1'
 *
 * // no strict mode
 * console.log(ipFilter('x-koaip', ['*-koaip', '!foo-koa*'], true)) // => 'x-koaip'
 * console.log(ipFilter('x-koa.foo', ['*-koa.*', '!foo-koa.*'], true)) // => 'x-koa.foo'
 * ```
 *
 * @param  {String} `ip`
 * @param  {String|Array|RegExp|Function|Object} `patterns` Basically everything that [is-match][] can accept.
 * @param  {Boolean} `noStrict` Pass `true` if want to validate non-ip values.
 * @return {String|null} If not match returns `null`, otherwise the passed `ip`.
 * @api public
 */

module.exports = function ipFilter (ip, patterns, noStrict) {
  noStrict = typeof noStrict === 'boolean' ? noStrict : false

  if (!noStrict && !ipRegex().test(ip)) {
    throw new Error('ip-filter expect only valid IPv4/IPv6 IPs')
  }

  var match = noStrict
    ? isMatch(patterns)(ip)
    : isMatch(toPath(patterns))(toPath(ip))

  return match ? ip : null
}
