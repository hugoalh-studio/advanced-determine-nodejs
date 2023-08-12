# Advanced Determine (NodeJS)

[⚖️ MIT](./LICENSE.md)

|  | **Heat** | **Release - Latest** | **Release - Pre** |
|:-:|:-:|:-:|:-:|
| [![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=ffffff&style=flat-square "GitHub")](https://github.com/hugoalh-studio/advanced-determine-nodejs) | [![GitHub Stars](https://img.shields.io/github/stars/hugoalh-studio/advanced-determine-nodejs?label=&logoColor=ffffff&style=flat-square "GitHub Stars")](https://github.com/hugoalh-studio/advanced-determine-nodejs/stargazers) \| ![GitHub Total Downloads](https://img.shields.io/github/downloads/hugoalh-studio/advanced-determine-nodejs/total?label=&style=flat-square "GitHub Total Downloads") | ![GitHub Latest Release Version](https://img.shields.io/github/release/hugoalh-studio/advanced-determine-nodejs?sort=semver&label=&style=flat-square "GitHub Latest Release Version") (![GitHub Latest Release Date](https://img.shields.io/github/release-date/hugoalh-studio/advanced-determine-nodejs?label=&style=flat-square "GitHub Latest Release Date")) | ![GitHub Latest Pre-Release Version](https://img.shields.io/github/release/hugoalh-studio/advanced-determine-nodejs?include_prereleases&sort=semver&label=&style=flat-square "GitHub Latest Pre-Release Version") (![GitHub Latest Pre-Release Date](https://img.shields.io/github/release-date-pre/hugoalh-studio/advanced-determine-nodejs?label=&style=flat-square "GitHub Latest Pre-Release Date")) |
| [![NPM](https://img.shields.io/badge/NPM-CB3837?logo=npm&logoColor=ffffff&style=flat-square "NPM")](https://www.npmjs.com/package/@hugoalh/advanced-determine) | ![NPM Total Downloads](https://img.shields.io/npm/dt/@hugoalh/advanced-determine?label=&style=flat-square "NPM Total Downloads") | ![NPM Latest Release Version](https://img.shields.io/npm/v/@hugoalh/advanced-determine/latest?label=&style=flat-square "NPM Latest Release Version") | ![NPM Latest Pre-Release Version](https://img.shields.io/npm/v/@hugoalh/advanced-determine/pre?label=&style=flat-square "NPM Latest Pre-Release Version") |

A NodeJS module to provide advanced method to determine item.

> **🔗 Other Edition:**
>
> - [Deno](https://github.com/hugoalh-studio/advanced-determine-deno)

## 📓 Documentation (Excerpt)

For the full documentation, please visit the [GitHub Repository Wiki](https://github.com/hugoalh-studio/advanced-determine-nodejs/wiki).

### Getting Started

- NodeJS ^ v14.15.0 \|\| >= v16.13.0

```sh
npm install @hugoalh/advanced-determine
```

```js
/* Either */
import { ... } from "@hugoalh/advanced-determine";// Named Import
import * as advancedDetermine from "@hugoalh/advanced-determine";// Namespace Import
```

### API

#### Class

- `ArrayFilter`
- `BigIntFilter`
- `JSONFilter`
- `MapFilter`
- `NumberFilter`
- `ObjectFilter`
- `RegExpFilter`
- `SetFilter`
- `StringFilter`

#### Function

- `isArrayStrict`
- `isArrayUnique`
- `isArrayUniqueReference`
- `isAsyncFunction`
- `isAsyncGenerator`
- `isAsyncGeneratorFunction`
- `isBigIntEven`
- `isBigIntIntegralNumericType`
- `isBigIntNegative`
- `isBigIntOdd`
- `isBigIntPositive`
- `isBigIntPrime`
- `isBigIntSafe`
- `isNumberEven`
- `isNumberFloat`
- `isNumberIntegralNumericType`
- `isNumberNegative`
- `isNumberOdd`
- `isNumberPositive`
- `isNumberPrime`
- `isNumberSafe`
- `isObjectPlain`
- `isStringASCII`
- `isStringLowerCase`
- `isStringMultipleLine`
- `isStringSingleLine`
- `isStringUpperCase`
- `isSyncFunction`
- `isSyncGenerator`
- `isSyncGeneratorFunction`

### Example

- ```js
  /* Either */
  new ArrayFilter().test([]);
  ArrayFilter.test([]);
  filterArray([]);
  //=> false (`allowEmpty` is `false`)
  ```
- ```js
  /* Either */
  new ArrayFilter({ allowEmpty: true }).test([]);
  new ArrayFilter().allowEmpty().test([]);
  ArrayFilter.test([], { allowEmpty: true });
  filterArray([], { allowEmpty: true });
  //=> true
  ```
- ```js
  /* Either */
  new NumberFilter({ ieee754: "safe", numericType: "float", sign: "positive" }).test(8.31);
  new NumberFilter().ieee754("safe").numericType("float").sign("positive").test(8.31);
  new NumberFilter().safe().float().positive().test(8.31);
  NumberFilter.test(8.31, { ieee754: "safe", numericType: "float", sign: "positive" });
  filterNumber(8.31, { ieee754: "safe", numericType: "float", sign: "positive" });
  //=> true
  ```
- ```js
  /* Either */
  new StringFilter().test("");
  StringFilter.test("");
  filterString("");
  //=> false (`allowEmpty` is `false`)
  ```
- ```js
  /* Either */
  new StringFilter({ allowEmpty: true }).test("");
  new StringFilter().allowEmpty().test("");
  StringFilter.test("", { allowEmpty: true });
  filterString("", { allowEmpty: true });
  //=> true
  ```
- ```js
  /* Either */
  new StringFilter({ case: "lower" }).test("Hello World");
  new StringFilter().case("lower").test("Hello World");
  new StringFilter().lowerCase().test("Hello World");
  StringFilter.test("Hello World", { case: "lower" });
  filterString("Hello World", { case: "lower" });
  //=> false
  ```
