# Advanced Determine (NodeJS)

[⚖️ MIT](./LICENSE.md)
[![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/hugoalh-studio/advanced-determine-nodejs?label=Grade&logo=codefactor&logoColor=ffffff&style=flat-square "CodeFactor Grade")](https://www.codefactor.io/repository/github/hugoalh-studio/advanced-determine-nodejs)

|  | **Heat** | **Release - Latest** | **Release - Pre** |
|:-:|:-:|:-:|:-:|
| [![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=ffffff&style=flat-square "GitHub")](https://github.com/hugoalh-studio/advanced-determine-nodejs) | [![GitHub Stars](https://img.shields.io/github/stars/hugoalh-studio/advanced-determine-nodejs?label=&logoColor=ffffff&style=flat-square "GitHub Stars")](https://github.com/hugoalh-studio/advanced-determine-nodejs/stargazers) \| ![GitHub Total Downloads](https://img.shields.io/github/downloads/hugoalh-studio/advanced-determine-nodejs/total?label=&style=flat-square "GitHub Total Downloads") | ![GitHub Latest Release Version](https://img.shields.io/github/release/hugoalh-studio/advanced-determine-nodejs?sort=semver&label=&style=flat-square "GitHub Latest Release Version") (![GitHub Latest Release Date](https://img.shields.io/github/release-date/hugoalh-studio/advanced-determine-nodejs?label=&style=flat-square "GitHub Latest Release Date")) | ![GitHub Latest Pre-Release Version](https://img.shields.io/github/release/hugoalh-studio/advanced-determine-nodejs?include_prereleases&sort=semver&label=&style=flat-square "GitHub Latest Pre-Release Version") (![GitHub Latest Pre-Release Date](https://img.shields.io/github/release-date-pre/hugoalh-studio/advanced-determine-nodejs?label=&style=flat-square "GitHub Latest Pre-Release Date")) |
| [![NPM](https://img.shields.io/badge/NPM-CB3837?logo=npm&logoColor=ffffff&style=flat-square "NPM")](https://www.npmjs.com/package/@hugoalh/advanced-determine) | ![NPM Total Downloads](https://img.shields.io/npm/dt/@hugoalh/advanced-determine?label=&style=flat-square "NPM Total Downloads") | ![NPM Latest Release Version](https://img.shields.io/npm/v/@hugoalh/advanced-determine/latest?label=&style=flat-square "NPM Latest Release Version") | ![NPM Latest Pre-Release Version](https://img.shields.io/npm/v/@hugoalh/advanced-determine/pre?label=&style=flat-square "NPM Latest Pre-Release Version") |

A NodeJS module to provide advanced method to determine item.

## 🔰 Begin

### NodeJS

- **Target Version:** ^ v14.15.0 \|\| >= v16.13.0, &:
  - TypeScript >= v5.1.0 *\[Development\]*
- **Require Permission:** *N/A*
- **Domain/Registry:**
  - [NPM](https://www.npmjs.com/package/@hugoalh/advanced-determine)
    ```sh
    npm install @hugoalh/advanced-determine
    ```
    ```js
    import ... from "@hugoalh/advanced-determine";
    ```

> **ℹ️ Notice:** It is also able to import part of the module with sub path if available, see [file `package.json`](./package.json) property `exports` for available sub paths.

## 🧩 API (Excerpt)

> **ℹ️ Notice:** Documentation is included inside the script file.

### Function

- `isArrayStrict`
- `isArrayUnique`
- `isArrayUniqueReference`
- `isAsyncFunction`
- `isAsyncGenerator`
- `isAsyncGeneratorFunction`
- `isBigIntegerEven`
- `isBigIntEven`
- `isBigIntNegative`
- `isBigIntOdd`
- `isBigIntPositive`
- `isBigIntSafe`
- `isEmpty`
- `isJSON`
- `isNumberEven`
- `isNumberFloat`
- `isNumberNegative`
- `isNumberOdd`
- `isNumberPositive`
- `isNumberSafe`
- `isNumericIntegralType`
- `isNumericPrime`
- `isObjectPlain`
- `isStringASCII`
- `isStringCaseLower`
- `isStringCaseUpper`
- `isStringSingleLine`
- `isStringTrimmable`
- `isStringTrimmableEnd`
- `isStringTrimmableStart`
- `isSyncFunction`
- `isSyncGenerator`
- `isSyncGeneratorFunction`

## ✍️ Example

- ```ts
  import { isArrayUnique } from "@hugoalh/advanced-determine/array/is-unique";

  isArrayUnique([{ foo: "bar" }, { foo: "bar" }]);
  //=> false
  ```
- ```ts
  import { isArrayUniqueReference } from "@hugoalh/advanced-determine/array/is-unique-reference";

  isArrayUniqueReference([{ foo: "bar" }, { foo: "bar" }]);
  //=> true
  ```
- ```ts
  import { isNumericPrime } from "@hugoalh/advanced-determine/numeric/is-prime";

  isNumericPrime(17n);
  //=> true
  ```
- ```ts
  import { isStringCaseUpper } from "@hugoalh/advanced-determine/string/is-case-upper";

  isStringCaseUpper("Hello, world!");
  //=> false
  ```

## 🔗 Other Edition

- [Deno](https://github.com/hugoalh-studio/advanced-determine-deno)
