# Advanced Determine (NodeJS Edition)

[`AdvancedDetermine.NodeJS`](https://github.com/hugoalh-studio/advanced-determine-nodejs) - A NodeJS module to provide a better and more accurate way to determine item type.

[![GitHub Contributors](https://img.shields.io/github/contributors/hugoalh-studio/advanced-determine-nodejs?label=Contributors&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/advanced-determine-nodejs/graphs/contributors)
[![GitHub Issues](https://img.shields.io/github/issues-raw/hugoalh-studio/advanced-determine-nodejs?label=Issues&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/advanced-determine-nodejs/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr-raw/hugoalh-studio/advanced-determine-nodejs?label=Pull%20Requests&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/advanced-determine-nodejs/pulls)
[![GitHub Discussions](https://img.shields.io/github/discussions/hugoalh-studio/advanced-determine-nodejs?label=Discussions&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/advanced-determine-nodejs/discussions)
[![GitHub Stars](https://img.shields.io/github/stars/hugoalh-studio/advanced-determine-nodejs?label=Stars&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/advanced-determine-nodejs/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/hugoalh-studio/advanced-determine-nodejs?label=Forks&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/advanced-determine-nodejs/network/members)
![GitHub Languages](https://img.shields.io/github/languages/count/hugoalh-studio/advanced-determine-nodejs?label=Languages&logo=github&logoColor=ffffff&style=flat-square)
[![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/hugoalh-studio/advanced-determine-nodejs?label=Grade&logo=codefactor&logoColor=ffffff&style=flat-square)](https://www.codefactor.io/repository/github/hugoalh-studio/advanced-determine-nodejs)
[![LGTM Alerts](https://img.shields.io/lgtm/alerts/g/hugoalh-studio/advanced-determine-nodejs?label=Alerts&logo=lgtm&logoColor=ffffff&style=flat-square)
![LGTM Grade](https://img.shields.io/lgtm/grade/javascript/g/hugoalh-studio/advanced-determine-nodejs?label=Grade&logo=lgtm&logoColor=ffffff&style=flat-square)](https://lgtm.com/projects/g/hugoalh-studio/advanced-determine-nodejs)
[![License](https://img.shields.io/static/v1?label=License&message=MIT&color=brightgreen&style=flat-square)](./LICENSE.md)

| **Release** | **Latest** | **Pre** |
|:-:|:-:|:-:|
| [**GitHub**](https://github.com/hugoalh-studio/advanced-determine-nodejs/releases) ![GitHub Total Downloads](https://img.shields.io/github/downloads/hugoalh-studio/advanced-determine-nodejs/total?label=%20&style=flat-square) | ![GitHub Latest Release Version](https://img.shields.io/github/release/hugoalh-studio/advanced-determine-nodejs?sort=semver&label=%20&style=flat-square) (![GitHub Latest Release Date](https://img.shields.io/github/release-date/hugoalh-studio/advanced-determine-nodejs?label=%20&style=flat-square)) | ![GitHub Latest Pre-Release Version](https://img.shields.io/github/release/hugoalh-studio/advanced-determine-nodejs?include_prereleases&sort=semver&label=%20&style=flat-square) (![GitHub Latest Pre-Release Date](https://img.shields.io/github/release-date-pre/hugoalh-studio/advanced-determine-nodejs?label=%20&style=flat-square)) |
| [**NPM**](https://www.npmjs.com/package/@hugoalh/advanced-determine) ![NPM Total Downloads](https://img.shields.io/npm/dt/@hugoalh/advanced-determine?label=%20&style=flat-square) | ![NPM Latest Release Version](https://img.shields.io/npm/v/@hugoalh/advanced-determine/latest?label=%20&style=flat-square) | ![NPM Latest Pre-Release Version](https://img.shields.io/npm/v/@hugoalh/advanced-determine/pre?label=%20&style=flat-square) |

## 📝 Description

### 🌟 Feature

- Better and more accurate type determine.
- Easier to identify empty string (`""`), empty array (`[]`), and empty object (`{}`).
- Native support for CommonJS and ECMAScript.
- Write complex condition(s) without writing a lot of codes.

## 📚 Documentation

*For the official documentation, please visit [GitHub Repository Wiki](https://github.com/hugoalh-studio/advanced-determine-nodejs/wiki).*

### Getting Started (Excerpt)

NodeJS (>= v14.15.0) & NPM (>= v6.14.8):

```sh
npm install @hugoalh/advanced-determine
```

### API (Excerpt)

- `allIs(condition, ...items)`
- `allIsNot(condition, ...items)`
- `areEqual(item1, item2)`
- `eitherIs(condition, ...items)`
- `eitherIsNot(condition, ...items)`
- `isArray(item, option?)`
- `isBigInteger(item)`
- `isBoolean(item, option?)`
- `isBuffer(item)`
- `isDate(item)`
- `isJSON(item, option?)`
- `isNull(item, option?)`
- `isNumber(item)`
- `isObject(item)`
- `isObjectPair(item, option?)`
- `isRegularExpression(item)`
- `isString(item)`
- `isStringASCII(item)`
- `isStringifyJSON(item, option?)`
- `isStringLowerCase(item)`
- `isStringMultipleLine(item)`
- `isStringSingleLine(item)`
- `isStringUpperCase(item)`
- `isUndefined(item, option?)`
- `typeOf(item)`

### Example (Excerpt)

```js
const advancedDetermine = require("@hugoalh/advanced-determine");

console.log(advancedDetermine.isArray([]));// null
console.log(advancedDetermine.isNull("", { allowExtend: true }));// true
console.log(advancedDetermine.isNull(""));// false
console.log(advancedDetermine.isNull("null", { allowStringify: false }));// false
console.log(advancedDetermine.isNull("null", { allowStringify: true }));// true
console.log(advancedDetermine.isNumberFloat(-8.31));// true
console.log(advancedDetermine.isNumberFloat(51));// false
console.log(advancedDetermine.isString(""));// null
console.log(advancedDetermine.isStringLowerCase("Test word."));// false
console.log(advancedDetermine.isStringLowerCase("word"));// true
console.log(advancedDetermine.isStringUpperCase("NO"));// true
```
