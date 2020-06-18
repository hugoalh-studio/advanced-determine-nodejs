# <div align="center">[NodeJS] Advanced Determine</div>

<div align="center">
  <code>hugoalh/NodeJS.AdvancedDetermine</code><br />
  <img src="https://img.shields.io/github/languages/count/hugoalh/NodeJS.AdvancedDetermine?style=flat-square&logo=github" />
  <img src="https://img.shields.io/github/languages/top/hugoalh/NodeJS.AdvancedDetermine?style=flat-square&logo=github" />
  <img src="https://img.shields.io/github/repo-size/hugoalh/NodeJS.AdvancedDetermine?style=flat-square&logo=github" />
  <img src="https://img.shields.io/github/watchers/hugoalh/NodeJS.AdvancedDetermine?style=flat-square&logo=github" />
  <img src="https://img.shields.io/github/stars/hugoalh/NodeJS.AdvancedDetermine?style=flat-square&logo=github" />
  <img src="https://img.shields.io/github/forks/hugoalh/NodeJS.AdvancedDetermine?style=flat-square&logo=github" />
  <a href="https://lgtm.com/projects/g/hugoalh/NodeJS.AdvancedDetermine/alerts/"><img src="https://img.shields.io/lgtm/alerts/g/hugoalh/NodeJS.AdvancedDetermine.svg?style=flat-square&logo=lgtm&label=%20" /></a>
  <a href="https://lgtm.com/projects/g/hugoalh/NodeJS.AdvancedDetermine/context:javascript"><img src="https://img.shields.io/lgtm/grade/javascript/g/hugoalh/NodeJS.AdvancedDetermine.svg?style=flat-square&logo=lgtm" /></a>
</div>

<table align="right">
  <tr>
    <td align="center">
      <b>Contributor</b><br />
      <img src="https://img.shields.io/github/contributors/hugoalh/NodeJS.AdvancedDetermine?style=flat-square&color=000000&label=%20" />
    </td>
    <td><a href="https://github.com/hugoalh">hugoalh</a></td>
  </tr>
  <tr>
    <td align="center"><b>License</b></td>
    <td><a href="./LICENSE.md">MIT</a></td>
  </tr>
  <tr>
    <td align="center"><b>Release</b></td>
    <td>
      <b>Stable: </b><img src="https://img.shields.io/github/release/hugoalh/NodeJS.AdvancedDetermine?style=flat-square&color=000000&label=%20" /> (<img src="https://img.shields.io/github/release-date/hugoalh/NodeJS.AdvancedDetermine?style=flat-square&color=000000&label=%20" />)<br />
      <b>Latest: </b><img src="https://img.shields.io/github/release/hugoalh/NodeJS.AdvancedDetermine?include_prereleases&style=flat-square&color=000000&label=%20" /> (<img src="https://img.shields.io/github/release-date-pre/hugoalh/NodeJS.AdvancedDetermine?style=flat-square&color=000000&label=%20" />)
    </td>
  </tr>
  <tr>
    <td align="center">
      <b>Download</b><br />
      <img src="https://img.shields.io/github/downloads/hugoalh/NodeJS.AdvancedDetermine/total?style=flat-square&color=000000&label=%20" />
    </td>
    <td><ul>
      <li><a href="https://github.com/hugoalh/NodeJS.AdvancedDetermine/releases">GitHub</a></li>
      <li><a href="https://www.npmjs.com/package/@hugoalh/advanced-determine">NPMJS</a></li>
    </td>
  </tr>
  <tr>
    <td align="center"><b>Issue</b></td>
    <td>
      <b>Open: </b><img src="https://img.shields.io/github/issues-raw/hugoalh/NodeJS.AdvancedDetermine?style=flat-square&color=000000&label=%20" /><br />
      <b>Closed: </b><img src="https://img.shields.io/github/issues-closed-raw/hugoalh/NodeJS.AdvancedDetermine?style=flat-square&color=000000&label=%20" />
    </td>
  </tr>
  <tr>
    <td align="center"><b>Pull Request</b></td>
    <td>
      <b>Open: </b><img src="https://img.shields.io/github/issues-pr-raw/hugoalh/NodeJS.AdvancedDetermine?style=flat-square&color=000000&label=%20" /><br />
      <b>Closed: </b><img src="https://img.shields.io/github/issues-pr-closed-raw/hugoalh/NodeJS.AdvancedDetermine?style=flat-square&color=000000&label=%20" />
    </td>
  </tr>
</table>

## 📜 Description

A library to provide a better and more accuracy determine.

## 💽 Installation

**For NPMJS:**

```powershell
> npm install @hugoalh/advanced-determine
```

## ✍ Guide

### API

|  | <div align="center"><b>Description</b></div> |
|:----|:----|
| `allIs(type, ...items)` | **type {string.lowercase}:** Type to determine, e.g.: `"regexp"`, `"stringifyjson"`.<br />**...items {\*}**: Support infinity arguments.<br /><br />Return `true` when items are all meet the `true` determine requirement; Return `false` otherwise. |
| `isActuallyNull(item)` | Return `true` when item is `""`, `[]`, or `{}`; Return `false` otherwise. |
| `isArray(item)` | Return `true` when item is array and has length (i.e.: `> 0`); Return `null` when item is array but no length (i.e.: `= 0`); Return `false` otherwise. |
| `isBuffer(item)` |  |
| `isDate(item)` |  |
| `isJSON(item)` | Return `true` when item is JSON and has length (i.e.: `> 0`); Return `null` when item is JSON but no length (i.e.: `= 0`); Return `false` otherwise. |
| `isNumber(item)` | Return `false` when item is type of bigint, or `NaN`. |
| `isRegExp(item)` |  |
| `isString(item)` | Return `true` when item is string and has length (i.e.: `> 0`); Return `null` when item is string but no length (i.e.: `= 0`); Return `false` otherwise. |
| `isStringifyJSON(item)` | Return `true` when item is stringify JSON and has length (i.e.: `> 0`); Return `null` when item is stringify JSON but no length (i.e.: `= 0`); Return `false` otherwise. |

### Example

```javascript
const determine = require("@hugoalh/advanced-determine");

console.log(determine.version);// 1.0.0

console.log(determine.isString(""));// null
console.log(determine.isActuallyNull(""));// true
console.log(determine.isArray([]));// null
console.log(determine.allIs("actuallynull", "", [], {}));// true
console.log(determine.allIs("string", "Hello, world!", 10, [8, 3, 1]));// false
```

## 🐛 Issue

Found any issue in this project? Submit the issue via [GitHub](https://github.com/hugoalh/NodeJS.AdvancedDetermine/issues).
