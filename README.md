# Advanced Determine (NodeJS)

[`AdvancedDetermine.NodeJS`](https://github.com/hugoalh-studio/advanced-determine-nodejs)

![License](https://img.shields.io/static/v1?label=License&message=MIT&style=flat-square "License")
[![GitHub Stars](https://img.shields.io/github/stars/hugoalh-studio/advanced-determine-nodejs?label=Stars&logo=github&logoColor=ffffff&style=flat-square "GitHub Stars")](https://github.com/hugoalh-studio/advanced-determine-nodejs/stargazers)
[![GitHub Contributors](https://img.shields.io/github/contributors/hugoalh-studio/advanced-determine-nodejs?label=Contributors&logo=github&logoColor=ffffff&style=flat-square "GitHub Contributors")](https://github.com/hugoalh-studio/advanced-determine-nodejs/graphs/contributors)
[![GitHub Issues](https://img.shields.io/github/issues-raw/hugoalh-studio/advanced-determine-nodejs?label=Issues&logo=github&logoColor=ffffff&style=flat-square "GitHub Issues")](https://github.com/hugoalh-studio/advanced-determine-nodejs/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr-raw/hugoalh-studio/advanced-determine-nodejs?label=Pull%20Requests&logo=github&logoColor=ffffff&style=flat-square "GitHub Pull Requests")](https://github.com/hugoalh-studio/advanced-determine-nodejs/pulls)
[![GitHub Discussions](https://img.shields.io/github/discussions/hugoalh-studio/advanced-determine-nodejs?label=Discussions&logo=github&logoColor=ffffff&style=flat-square "GitHub Discussions")](https://github.com/hugoalh-studio/advanced-determine-nodejs/discussions)
[![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/hugoalh-studio/advanced-determine-nodejs?label=Grade&logo=codefactor&logoColor=ffffff&style=flat-square "CodeFactor Grade")](https://www.codefactor.io/repository/github/hugoalh-studio/advanced-determine-nodejs)

| **Releases** | **Latest** (![GitHub Latest Release Date](https://img.shields.io/github/release-date/hugoalh-studio/advanced-determine-nodejs?label=&style=flat-square "GitHub Latest Release Date")) | **Pre** (![GitHub Latest Pre-Release Date](https://img.shields.io/github/release-date-pre/hugoalh-studio/advanced-determine-nodejs?label=&style=flat-square "GitHub Latest Pre-Release Date")) |
|:-:|:-:|:-:|
| [![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=ffffff&style=flat-square "GitHub")](https://github.com/hugoalh-studio/advanced-determine-nodejs/releases) ![GitHub Total Downloads](https://img.shields.io/github/downloads/hugoalh-studio/advanced-determine-nodejs/total?label=&style=flat-square "GitHub Total Downloads") | ![GitHub Latest Release Version](https://img.shields.io/github/release/hugoalh-studio/advanced-determine-nodejs?sort=semver&label=&style=flat-square "GitHub Latest Release Version") | ![GitHub Latest Pre-Release Version](https://img.shields.io/github/release/hugoalh-studio/advanced-determine-nodejs?include_prereleases&sort=semver&label=&style=flat-square "GitHub Latest Pre-Release Version") |
| [![NPM](https://img.shields.io/badge/NPM-CB3837?logo=npm&logoColor=ffffff&style=flat-square "NPM")](https://www.npmjs.com/package/@hugoalh/advanced-determine) ![NPM Total Downloads](https://img.shields.io/npm/dt/@hugoalh/advanced-determine?label=&style=flat-square "NPM Total Downloads") | ![NPM Latest Release Version](https://img.shields.io/npm/v/@hugoalh/advanced-determine/latest?label=&style=flat-square "NPM Latest Release Version") | ![NPM Latest Pre-Release Version](https://img.shields.io/npm/v/@hugoalh/advanced-determine/pre?label=&style=flat-square "NPM Latest Pre-Release Version") |

## 📝 Description

A NodeJS module to provide a better and more accurate way to determine item.

## 📚 Documentation (Excerpt)

For the full documentation, please visit the [GitHub Repository Wiki](https://github.com/hugoalh-studio/advanced-determine-nodejs/wiki).

### Getting Started

#### Install

- NodeJS ^ v12.20.0 \|\| ^ v14.15.0 \|\| >= v16.13.0

```sh
npm install @hugoalh/advanced-determine
```

#### Use

```js
/* Either */
import * as advancedDetermine from "@hugoalh/advanced-determine";// All
import { ... } from "@hugoalh/advanced-determine";// Part / Tree-shake
```

### API

#### Class

- `ArrayItemFilter`
- `BigIntegerItemFilter`
- `FunctionItemFilter`
- `GeneratorItemFilter`
- `JSONItemFilter`
- `MapItemFilter`
- `NumberItemFilter`
- `ObjectItemFilter`
- `PlainObjectItemFilter`
- `RegularExpressionItemFilter`
- `SetItemFilter`
- `StringifyJSONItemFilter`
- `StringItemFilter`

#### Function

- `areEqual`
- `isArray`
- `isBigInteger`
- `isFunction`
- `isGenerator`
- `isJSON`
- `isMap`
- `isNumber`
- `isObject`
- `isPlainObject`
- `isRegularExpression`
- `isSet`
- `isString`
- `isStringifyJSON`
- `typeOf`

### Example

```js
/* Class */new advancedDetermine.ArrayItemFilter().test([]);
/* Func. */advancedDetermine.isArray([]);
//=> false (`allowEmpty` is `false`)

/* Class */new advancedDetermine.ArrayItemFilter({ allowEmpty: true }).test([]);
/* Func. */advancedDetermine.isArray([], { allowEmpty: true });
//=> true

/* Class */new advancedDetermine.NumberItemFilter({ float: true, positive: true, safe: true }).test(8.31);
/* Func. */advancedDetermine.isNumber(8.31, { float: true, positive: true, safe: true });
//=> true

/* Class */new advancedDetermine.StringItemFilter().test("");
/* Func. */advancedDetermine.isString("");
//=> false (`allowEmpty` is `false`)

/* Class */new advancedDetermine.StringItemFilter({ allowEmpty: true }).test("");
/* Func. */advancedDetermine.isString("", { allowEmpty: true });
//=> true

/* Class */new advancedDetermine.StringItemFilter({ lowerCase: true }).test("Hello World");
/* Func. */advancedDetermine.isString("Hello World", { lowerCase: true });
//=> false
```
