# [ip-filter][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Filters valid IPv4 or IPv6 against glob pattern, array, string and etc. If match returns passed `ip`, otherwise null is returned. Have no strict mode to check no IP values.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]

You might also be interested in [to-object-path][], [to-file-path][] or [koa-ip-filter][].

## Install
```
npm i ip-filter --save
```

## Usage
> For more use-cases see the [tests](./test.js)

```js
const ipFilter = require('ip-filter')
```

### [ipFilter](index.js#L39)
> Filter `ip` against glob `patterns`.

**Params**

* `ip` **{String}**    
* `patterns` **{String|Array|RegExp|Function|Object}**: Basically everything that [is-match][] can accept.    
* `noStrict` **{Boolean}**: Pass `true` if want to validate non-ip values.    
* `returns` **{String|null}**: If not match returns `null`, otherwise the passed `ip`.  

**Example**

```js
var ipFilter = require('ip-filter')

console.log(ipFilter('123.77.34.89', '123.??.34.8*')) // => '123.77.34.89'
console.log(ipFilter('123.222.34.88', '123.??.34.8*')) // => null
console.log(ipFilter('123.222.34.88', ['123.*.34.*', '!123.222.*'])) // => null
console.log(ipFilter('123.222.33.1', ['123.*.34.*', '*.222.33.*'])) // => '123.222.33.1'

// no strict mode
console.log(ipFilter('x-koaip', ['*-koaip', '!foo-koa*'], true)) // => 'x-koaip'
console.log(ipFilter('x-koa.foo', ['*-koa.*', '!foo-koa.*'], true)) // => 'x-koa.foo'
```

## Related
* [ip-regex](https://www.npmjs.com/package/ip-regex): Regular expression for matching IP addresses | [homepage](https://github.com/sindresorhus/ip-regex)
* [is-match](https://www.npmjs.com/package/is-match): Create a matching function from a glob pattern, regex, string, array,… [more](https://www.npmjs.com/package/is-match) | [homepage](https://github.com/jonschlinkert/is-match)
* [koa-ip-filter](https://www.npmjs.com/package/koa-ip-filter): koa middleware to filter request IPs or custom ID with glob… [more](https://www.npmjs.com/package/koa-ip-filter) | [homepage](https://github.com/tunnckocore/koa-ip-filter)
* [micromatch](https://www.npmjs.com/package/micromatch): Glob matching for javascript/node.js. A drop-in replacement and faster alternative to… [more](https://www.npmjs.com/package/micromatch) | [homepage](https://github.com/jonschlinkert/micromatch)
* [to-file-path](https://www.npmjs.com/package/to-file-path): Create a filepath from an object path (dot notation), list of… [more](https://www.npmjs.com/package/to-file-path) | [homepage](https://github.com/tunnckocore/to-file-path)

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/ip-filter/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[is-match]: https://github.com/jonschlinkert/is-match
[to-object-path]: https://github.com/jonschlinkert/to-object-path
[koa-ip-filter]: https://github.com/tunnckocore/koa-ip-filter
[to-file-path]: https://github.com/tunnckocore/to-file-path

[npmjs-url]: https://www.npmjs.com/package/ip-filter
[npmjs-img]: https://img.shields.io/npm/v/ip-filter.svg?label=ip-filter

[license-url]: https://github.com/tunnckoCore/ip-filter/blob/master/LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg

[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/ip-filter
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/ip-filter.svg

[travis-url]: https://travis-ci.org/tunnckoCore/ip-filter
[travis-img]: https://img.shields.io/travis/tunnckoCore/ip-filter/master.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/ip-filter
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/ip-filter.svg

[david-url]: https://david-dm.org/tunnckoCore/ip-filter
[david-img]: https://img.shields.io/david/tunnckoCore/ip-filter.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg

