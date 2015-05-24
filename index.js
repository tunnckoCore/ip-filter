/*!
 * ip-filter <https://github.com/tunnckoCore/ip-filter>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict'

var ipRegex = require('ip-regex')
var matcher = require('is-match')

module.exports = function ipFilter (ip, patterns, strict) {
  if (!strict && !ipRegex().test(ip)) {
    throw new Error('ip-filter expect only valid IPv4/IPv6 IPs')
  }

  var isMatch = matcher(patterns)
  if (isMatch(ip)) {
    return ip
  }

  return null
}
