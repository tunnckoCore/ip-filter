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
 * > Filter `ip` against glob `patterns`,
 * using [micromatch][] under the hood, so
 * `options` are passed to it.
 *
 * **Example**
 *
 * ```js
 * var ipFilter = require('ip-filter')
 *
 * console.log(ipFilter('123.77.34.89', '123.??.34.8*')) // => '123.77.34.89'
 * console.log(ipFilter('123.222.34.88', '123.??.34.8*')) // => null
 * console.log(ipFilter('123.222.33.1', ['123.*.34.*', '*.222.33.*'])) // => '123.222.33.1'
 *
 * // should notice the difference
 * console.log(ipFilter('123.222.34.88', ['123.*.34.*', '!123.222.**']))
 * // => null
 * console.log(ipFilter('123.222.34.88', ['123.*.34.*', '!123.222.*']))
 * // => '123.222.34.88'
 *
 * //
 * // NON-STRICT mode
 * //
 *
 * var res = ipFilter('x-koaip', ['*-koaip', '!foo-koa*'], { strict: false })
 * console.log(res) // => 'x-koaip'
 *
 * var res = ipFilter('x-koa.foo', ['*-koa.*', '!foo-koa.*'], { strict: false })
 * console.log(res) // => 'x-koa.foo'
 * ```
 *
 * @param  {String} `ip` Accepts only valid IPs by default
 * @param  {String|Array|RegExp|Function|Object} `patterns` Basically everything that [is-match][] can accept.
 * @param  {Object} `options` Pass `strict: false` if want to validate non-ip values,
 *                            also passed to [is-match][].
 * @return {String|null} If not match returns `null`, otherwise the passed `ip`.
 * @api public
 */

module.exports = function ipFilter (ip, patterns, options) {
  if (typeof ip !== 'string') {
    throw new TypeError('ip-filter: expect `ip` to be a string')
  }

  options = typeof options === 'object' ? options : {}
  options.strict = typeof options.strict === 'boolean' ? options.strict : true

  if (options.strict && !ipRegex().test(ip)) {
    throw new Error('ip-filter: expect only valid IPs when `opts.strict` mode')
  }

  var id = options.strict ? tofp(ip) : ip
  patterns = options.strict ? tofp(patterns) : patterns

  return isMatch(patterns, options)(id) ? ip : null
}

function tofp (val) {
  val = typeof val === 'string' ? toPath(val) : val
  val = Array.isArray(val) ? val.map(function (p) {
    return toPath(p)
  }) : val
  return val
}
