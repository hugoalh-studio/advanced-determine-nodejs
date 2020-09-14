# \[NodeJS\] Advanced Determine

[`hugoalh-studio/NodeJS.AdvancedDetermine`](https://github.com/hugoalh-studio/NodeJS.AdvancedDetermine)

<table>
  <tr>
    <td><a href="./LICENSE.md"><b>License</b></a></td>
    <td>MIT</td>
  </tr>
  <tr>
    <td><a href="https://github.com/hugoalh-studio/NodeJS.AdvancedDetermine/releases"><b>Release</b></a> <img src="https://img.shields.io/github/downloads/hugoalh-studio/NodeJS.AdvancedDetermine/total?label=%20&style=flat-square" /></td>
    <td>
      <b>Latest:</b> <img src="https://img.shields.io/github/release/hugoalh-studio/NodeJS.AdvancedDetermine?sort=semver&label=%20&style=flat-square" /> (<img src="https://img.shields.io/github/release-date/hugoalh-studio/NodeJS.AdvancedDetermine?label=%20&style=flat-square" />)<br />
      <b>Pre:</b> <img src="https://img.shields.io/github/release/hugoalh-studio/NodeJS.AdvancedDetermine?include_prereleases&sort=semver&label=%20&style=flat-square" /> (<img src="https://img.shields.io/github/release-date-pre/hugoalh-studio/NodeJS.AdvancedDetermine?label=%20&style=flat-square" />)<br />
      <a href="https://www.npmjs.com/package/@hugoalh/advanced-determine"><img alt="NPM" src="https://img.shields.io/npm/v/@hugoalh/advanced-determine?logo=npm&logoColor=ffffff&style=flat-square" /></a>
    </td>
  </tr>
  <tr>
    <td><a href="https://github.com/hugoalh-studio/NodeJS.AdvancedDetermine/graphs/contributors"><b>Contributor</b></a> <img src="https://img.shields.io/github/contributors/hugoalh-studio/NodeJS.AdvancedDetermine?label=%20&style=flat-square" /></td>
    <td><ul>
        <li><a href="https://github.com/hugoalh-studio">hugoalh Studio</a></li>
        <li><a href="https://github.com/hugoalh">hugoalh</a></li>
    </ul></td>
  </tr>
  <tr>
    <td><a href="https://github.com/hugoalh-studio/NodeJS.AdvancedDetermine/issues?q=is%3Aissue"><b>Issue</b></a></td>
    <td><img src="https://img.shields.io/github/issues-raw/hugoalh-studio/NodeJS.AdvancedDetermine?label=%20&style=flat-square" /> : <img src="https://img.shields.io/github/issues-closed-raw/hugoalh-studio/NodeJS.AdvancedDetermine?label=%20&style=flat-square" /></td>
  </tr>
  <tr>
    <td><a href="https://github.com/hugoalh-studio/NodeJS.AdvancedDetermine/pulls?q=is%3Apr"><b>Pull Request</b></a></td>
    <td><img src="https://img.shields.io/github/issues-pr-raw/hugoalh-studio/NodeJS.AdvancedDetermine?label=%20&style=flat-square" /> : <img src="https://img.shields.io/github/issues-pr-closed-raw/hugoalh-studio/NodeJS.AdvancedDetermine?label=%20&style=flat-square" /></td>
  </tr>
  <tr>
    <td><b>Code Quality</b></td>
    <td>
      <a href="https://www.codefactor.io/repository/github/hugoalh-studio/nodejs.advanceddetermine"><img alt="CodeFactor Grade" src="https://img.shields.io/codefactor/grade/github/hugoalh-studio/NodeJS.AdvancedDetermine?logo=codefactor&logoColor=ffffff&style=flat-square" /></a>
      <a href="https://lgtm.com/projects/g/hugoalh-studio/NodeJS.AdvancedDetermine/alerts"><img alt="LGTM Alert" src="https://img.shields.io/lgtm/alerts/g/hugoalh-studio/NodeJS.AdvancedDetermine.svg?label=%20&logo=lgtm&logoColor=ffffff&style=flat-square" /></a>
      <a href="https://lgtm.com/projects/g/hugoalh-studio/NodeJS.AdvancedDetermine/context:javascript"><img alt="LGTM Grade" src="https://img.shields.io/lgtm/grade/javascript/g/hugoalh-studio/NodeJS.AdvancedDetermine.svg?logo=lgtm&logoColor=ffffff&style=flat-square" /></a>
    </td>
  </tr>
</table>

![GitHub Language Count](https://img.shields.io/github/languages/count/hugoalh-studio/NodeJS.AdvancedDetermine?logo=github&logoColor=ffffff&style=flat-square)
![GitHub Top Langauge](https://img.shields.io/github/languages/top/hugoalh-studio/NodeJS.AdvancedDetermine?logo=github&logoColor=ffffff&style=flat-square)
![GitHub Repo Size](https://img.shields.io/github/repo-size/hugoalh-studio/NodeJS.AdvancedDetermine?logo=github&logoColor=ffffff&style=flat-square)
![GitHub Code Size](https://img.shields.io/github/languages/code-size/hugoalh-studio/NodeJS.AdvancedDetermine?logo=github&logoColor=ffffff&style=flat-square)
![GitHub Watcher](https://img.shields.io/github/watchers/hugoalh-studio/NodeJS.AdvancedDetermine?logo=github&logoColor=ffffff&style=flat-square)
![GitHub Star](https://img.shields.io/github/stars/hugoalh-studio/NodeJS.AdvancedDetermine?logo=github&logoColor=ffffff&style=flat-square)
![GitHub Fork](https://img.shields.io/github/forks/hugoalh-studio/NodeJS.AdvancedDetermine?logo=github&logoColor=ffffff&style=flat-square)

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
