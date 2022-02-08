var advancedDetermine = require("@hugoalh/advanced-determine");
console.log(advancedDetermine.isArray([], { empty: false }));
console.log(advancedDetermine.isNumber(8.31, { float: true, positive: true, safe: true }));
console.log(advancedDetermine.isString("", { empty: false }));
console.log(advancedDetermine.isString("Hello World", { lowerCase: true }));
