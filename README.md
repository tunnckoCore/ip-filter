# ip-filter [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url]

> Filter valid IPv4 or IPv6 IP against glob pattern, array, string, regexp or matcher function, if match return the checked IP, otherwise return falsey value.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i ip-filter --save
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

- `return` **{String|Null}** string when match, otherwise `null`

```js
var ipFilter = require('ip-filter')

console.log(ipFilter('123.77.34.89', '123.??.34.8*'))
//=> '123.77.34.89'

console.log(ipFilter('123.222.34.89', ['123.???.34.8*', '!123.222.34.89']))
//=> null
```


## See also
- [apidocs-cli](https://github.com/tunnckocore/apidocs-cli): Async CLI for automatically generating API docs from code comments
- [is-missing](https://github.com/tunnckoCore/is-missing): Check that given `name` or `user/repo` exists in npm registry or in… [more](https://github.com/tunnckoCore/is-missing)
- [koa-ip-filter](https://github.com/tunnckocore/koa-ip-filter): Filter IPs with a glob pattern, regex, string, array or matcher function.… [more](https://github.com/tunnckocore/koa-ip-filter)
- [micromatch](https://github.com/jonschlinkert/micromatch): Glob matching for javascript/node.js. A drop-in replacement and faster… [more](https://github.com/jonschlinkert/micromatch)
- [npm-related](https://github.com/tunnckoCore/npm-related): Thin wrapper on top of `helper-related` for generating a list of links… [more](https://github.com/tunnckoCore/npm-related)


## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/ip-filter/issues/new).
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/ip-filter
[npmjs-img]: https://img.shields.io/npm/v/ip-filter.svg?label=ip-filter

[license-url]: https://github.com/tunnckoCore/ip-filter/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/ip-filter
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/ip-filter.svg

[travis-url]: https://travis-ci.org/tunnckoCore/ip-filter
[travis-img]: https://img.shields.io/travis/tunnckoCore/ip-filter.svg

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

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/send%20me-message-green.svg
