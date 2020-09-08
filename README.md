# \[NodeJS\] Advanced Determine

[`hugoalh-studio/NodeJS.AdvancedDetermine`](https://github.com/hugoalh-studio/NodeJS.AdvancedDetermine)

[![GitHub Contributors](https://img.shields.io/github/contributors/hugoalh-studio/NodeJS.AdvancedDetermine?logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/NodeJS.AdvancedDetermine/graphs/contributors)
[![License](https://img.shields.io/github/license/hugoalh-studio/NodeJS.AdvancedDetermine?logo=github&logoColor=ffffff&style=flat-square)](./LICENSE.md)
![GitHub Language Count](https://img.shields.io/github/languages/count/hugoalh-studio/NodeJS.AdvancedDetermine?logo=github&logoColor=ffffff&style=flat-square)
![GitHub Top Langauge](https://img.shields.io/github/languages/top/hugoalh-studio/NodeJS.AdvancedDetermine?logo=github&logoColor=ffffff&style=flat-square)
![GitHub Repo Size](https://img.shields.io/github/repo-size/hugoalh-studio/NodeJS.AdvancedDetermine?logo=github&logoColor=ffffff&style=flat-square)
![GitHub Code Size](https://img.shields.io/github/languages/code-size/hugoalh-studio/NodeJS.AdvancedDetermine?logo=github&logoColor=ffffff&style=flat-square)
![GitHub Watchers](https://img.shields.io/github/watchers/hugoalh-studio/NodeJS.AdvancedDetermine?logo=github&logoColor=ffffff&style=flat-square)
![GitHub Stars](https://img.shields.io/github/stars/hugoalh-studio/NodeJS.AdvancedDetermine?logo=github&logoColor=ffffff&style=flat-square)
![GitHub Forks](https://img.shields.io/github/forks/hugoalh-studio/NodeJS.AdvancedDetermine?logo=github&logoColor=ffffff&style=flat-square)
[![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/hugoalh-studio/NodeJS.AdvancedDetermine?logo=codefactor&logoColor=ffffff&style=flat-square)](https://www.codefactor.io/repository/github/hugoalh-studio/nodejs.advanceddetermine)
[![LGTM Alerts](https://img.shields.io/lgtm/alerts/g/hugoalh-studio/NodeJS.AdvancedDetermine.svg?label=%20&logo=lgtm&logoColor=ffffff&style=flat-square)](https://lgtm.com/projects/g/hugoalh-studio/NodeJS.AdvancedDetermine/alerts)
[![LGTM Grade](https://img.shields.io/lgtm/grade/javascript/g/hugoalh-studio/NodeJS.AdvancedDetermine.svg?logo=lgtm&logoColor=ffffff&style=flat-square)](https://lgtm.com/projects/g/hugoalh-studio/NodeJS.AdvancedDetermine/context:javascript)

| **[Release](https://github.com/hugoalh-studio/NodeJS.AdvancedDetermine/releases)** ![](https://img.shields.io/github/downloads/hugoalh-studio/NodeJS.AdvancedDetermine/total?style=flat-square&color=000000&label=%20) | **[Issue](https://github.com/hugoalh-studio/NodeJS.AdvancedDetermine/issues?q=is%3Aissue)** | **[Pull Request](https://github.com/hugoalh-studio/NodeJS.AdvancedDetermine/pulls?q=is%3Apr)** |
|:----|:----|:----|
| **Latest:** ![](https://img.shields.io/github/release/hugoalh-studio/NodeJS.AdvancedDetermine?sort=semver&style=flat-square&color=000000&label=%20) (![](https://img.shields.io/github/release-date/hugoalh-studio/NodeJS.AdvancedDetermine?style=flat-square&color=000000&label=%20))<br />**Pre:** ![](https://img.shields.io/github/release/hugoalh-studio/NodeJS.AdvancedDetermine?include_prereleases&sort=semver&style=flat-square&color=000000&label=%20) (![](https://img.shields.io/github/release-date-pre/hugoalh-studio/NodeJS.AdvancedDetermine?style=flat-square&color=000000&label=%20))<br />[![NPM](https://img.shields.io/npm/v/@hugoalh/advanced-determine?logo=npm&logoColor=ffffff&style=flat-square)](https://www.npmjs.com/package/@hugoalh/advanced-determine) | **Open:** ![](https://img.shields.io/github/issues-raw/hugoalh-studio/NodeJS.AdvancedDetermine?style=flat-square&color=000000&label=%20)<br />**Closed:** ![](https://img.shields.io/github/issues-closed-raw/hugoalh-studio/NodeJS.AdvancedDetermine?style=flat-square&color=000000&label=%20) | **Open:** ![](https://img.shields.io/github/issues-pr-raw/hugoalh-studio/NodeJS.AdvancedDetermine?style=flat-square&color=000000&label=%20)<br />**Closed:** ![](https://img.shields.io/github/issues-pr-closed-raw/hugoalh-studio/NodeJS.AdvancedDetermine?style=flat-square&color=000000&label=%20) |

## 📜 Description

A module/library to provide a better and more accurate way to determine item type.

[Click here to view the official documentation online.](https://github.com/hugoalh-studio/NodeJS.AdvancedDetermine/wiki)

## 📄 Documentation (Excerpt)

### Getting Started

NodeJS (v10+) & NPM (v6+):

```powershell
> npm install @hugoalh/advanced-determine
```

### API

- `isArray(item)`
- `isBoolean(item, option?)`
- `isBuffer(item, option?)`
- `isDate(item)`
- `isJSON(item)`
- `isNull(item, option?)`
- `isNumber(item)`
- `isObject(item)`
- `isRegularExpression(item)`
- `isString(item, option?)`
- `isStringASCII(item)`
- `isStringifyJSON(item)`
- `isStringLowerCase(item)`
- `isStringUpperCase(item)`
- `isUndefined(item, option?)`
- `typeOf(item)`

### Example

```javascript
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
