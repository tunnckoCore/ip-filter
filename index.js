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
