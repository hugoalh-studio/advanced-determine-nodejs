# Advanced Determine (NodeJS)

[`AdvancedDetermine.NodeJS`](https://github.com/hugoalh-studio/advanced-determine-nodejs)
![License](https://img.shields.io/static/v1?label=License&message=MIT&style=flat-square)
[![GitHub Stars](https://img.shields.io/github/stars/hugoalh-studio/advanced-determine-nodejs?label=Stars&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/advanced-determine-nodejs/stargazers)
[![GitHub Contributors](https://img.shields.io/github/contributors/hugoalh-studio/advanced-determine-nodejs?label=Contributors&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/advanced-determine-nodejs/graphs/contributors)
[![GitHub Issues](https://img.shields.io/github/issues-raw/hugoalh-studio/advanced-determine-nodejs?label=Issues&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/advanced-determine-nodejs/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr-raw/hugoalh-studio/advanced-determine-nodejs?label=Pull%20Requests&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/advanced-determine-nodejs/pulls)
[![GitHub Discussions](https://img.shields.io/github/discussions/hugoalh-studio/advanced-determine-nodejs?label=Discussions&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/advanced-determine-nodejs/discussions)
[![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/hugoalh-studio/advanced-determine-nodejs?label=Grade&logo=codefactor&logoColor=ffffff&style=flat-square)](https://www.codefactor.io/repository/github/hugoalh-studio/advanced-determine-nodejs)

| **Releases** | **Latest** (![GitHub Latest Release Date](https://img.shields.io/github/release-date/hugoalh-studio/advanced-determine-nodejs?label=&style=flat-square)) | **Pre** (![GitHub Latest Pre-Release Date](https://img.shields.io/github/release-date-pre/hugoalh-studio/advanced-determine-nodejs?label=&style=flat-square)) |
|:-:|:-:|:-:|
| [GitHub](https://github.com/hugoalh-studio/advanced-determine-nodejs/releases) ![GitHub Total Downloads](https://img.shields.io/github/downloads/hugoalh-studio/advanced-determine-nodejs/total?label=&style=flat-square) | ![GitHub Latest Release Version](https://img.shields.io/github/release/hugoalh-studio/advanced-determine-nodejs?sort=semver&label=&style=flat-square) | ![GitHub Latest Pre-Release Version](https://img.shields.io/github/release/hugoalh-studio/advanced-determine-nodejs?include_prereleases&sort=semver&label=&style=flat-square) |
| [NPM](https://www.npmjs.com/package/@hugoalh/advanced-determine) ![NPM Total Downloads](https://img.shields.io/npm/dt/@hugoalh/advanced-determine?label=&style=flat-square) | ![NPM Latest Release Version](https://img.shields.io/npm/v/@hugoalh/advanced-determine/latest?label=&style=flat-square) | ![NPM Latest Pre-Release Version](https://img.shields.io/npm/v/@hugoalh/advanced-determine/pre?label=&style=flat-square) |

## 📝 Description

A NodeJS module to provide a better and more accurate way to determine item type.

### 🌟 Feature

- Better and more accurate type determine similar to TypeScript.
- Easier to identify empty string (`""`), empty array (`[]`), and empty object (`{}`).

## 📚 Documentation (Excerpt)

For the full documentation, please visit [GitHub Repository Wiki](https://github.com/hugoalh-studio/advanced-determine-nodejs/wiki).

### Getting Started

#### Install

- NodeJS ^ v12.20.0 || ^ v14.15.0 || >= v16.13.0

```sh
npm install @hugoalh/advanced-determine
```

#### Use

```js
/* Either */
import * as advancedDetermine from "@hugoalh/advanced-determine";// All
import advancedDetermine from "@hugoalh/advanced-determine";// All (>= v7.0.1)
import { ... } from "@hugoalh/advanced-determine";// Part / Tree-shake
```

### API

#### Function

- `areEqual(...items)`
- `isArray(item, option?)`
- `isBigInteger(item, option?)`
- `isFunction(item, option?)`
- `isGenerator(item, option?)`
- `isJSON(item, option?)`
- `isMap(item, option?)`
- `isNumber(item, option?)`
- `isObject(item)`
- `isPlainObject(item, option?)`
- `isRegularExpression(item, option?)`
- `isSet(item, option?)`
- `isString(item, option?)`
- `isStringifyJSON(item, option?)`
- `typeOf(item)`

### Example

```js
advancedDetermine.isArray([], { empty: false });
//=> false

advancedDetermine.isNumber(8.31, { float: true, positive: true, safe: true });
//=> true

advancedDetermine.isString("", { empty: false });
//=> false

advancedDetermine.isString("Hello World", { lowerCase: true });
//=> false
```
