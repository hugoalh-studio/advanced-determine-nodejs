const test = require("./lib/is-number.js");
console.log(test(Number.MAX_SAFE_INTEGER + 1, { safe: true }));