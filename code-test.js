const advancedDetermine = require("./lib/main.js");
let tests = [
	[advancedDetermine.areEqual, ["Test", "test"], false],
	[advancedDetermine.areEqual, [[10, [20], 30, 40], [10, 20, 30, 40]], false],
	[advancedDetermine.areEqual, [[10, 20, 30, 40], [10, 20, 30, 40]], true],
	[advancedDetermine.areEqual, [1, "1"], false],
	[advancedDetermine.isArray, [""], false],
	[advancedDetermine.isArray, [[]], null],
	[advancedDetermine.isArray, [[1, 2, 3]], true],
	[advancedDetermine.isBigInteger, [-10], false],
	[advancedDetermine.isBigInteger, [-10n, { positive: true }], false],
	[advancedDetermine.isBigInteger, [7n, { negative: true, positive: true }], false],
	[advancedDetermine.isBigInteger, [1024n, { positive: true }], true],
	[advancedDetermine.isBigInteger, [1024n], true],
	[advancedDetermine.isBigInteger, [NaN], false],
	[advancedDetermine.isFunction, [() => { }], true],
	[advancedDetermine.isFunction, [function* foo() { }, { generator: false }], false],
	[advancedDetermine.isJSON, [{ magic: () => { console.log("Test!"); } }], false],
	[advancedDetermine.isJSON, [{ number: 1 }], true],
	[advancedDetermine.isJSON, [{}], null],
	[advancedDetermine.isNumber, [-10, { positive: true }], false],
	[advancedDetermine.isNumber, [-10], true],
	[advancedDetermine.isNumber, [7.21, { float: true, integer: true }], false],
	[advancedDetermine.isNumber, [8.31, { float: true, positive: true, safe: true }], true],
	[advancedDetermine.isNumber, [1024, { positive: true }], true],
	[advancedDetermine.isNumber, [1024], true],
	[advancedDetermine.isNumber, [NaN], false],
	[advancedDetermine.isObject, [{ enable: false }], true],
	[advancedDetermine.isObject, [{ magic: () => { console.log("Test!"); } }], true],
	[advancedDetermine.isObject, [new Boolean(true)], true],
	[advancedDetermine.isObject, [null], false],
	[advancedDetermine.isObject, [true], false],
	[advancedDetermine.isPlainObject, [{ enable: false }], true],
	[advancedDetermine.isPlainObject, [{ magic: () => { console.log("Test!"); } }], true],
	[advancedDetermine.isPlainObject, [new Boolean(true)], false],
	[advancedDetermine.isPlainObject, [null], false],
	[advancedDetermine.isPlainObject, [true], false],
	[advancedDetermine.isString, ["    ", { allowWhitespace: false }], null],
	[advancedDetermine.isString, ["    "], true],
	[advancedDetermine.isString, [""], null],
	[advancedDetermine.isString, ["Hello World", { lowerCase: true }], false],
	[advancedDetermine.isString, ["Hello, world!", { lowerCase: true, upperCase: true }], false],
	[advancedDetermine.isString, ["Hello, world!"], true],
	[advancedDetermine.isString, ["null", { lowerCase: true }], true],
	[advancedDetermine.isString, ["null"], true],
	[advancedDetermine.isString, [null], false],
	[advancedDetermine.isStringifyJSON, ["{ \"number\": 1 }"], true],
	[advancedDetermine.isStringifyJSON, ["{}"], null],
	[advancedDetermine.isStringifyJSON, ["word"], false],
	[advancedDetermine.typeOf, ["undefined"], "string"],
	[advancedDetermine.typeOf, [[]], "array"],
	[advancedDetermine.typeOf, [[10, 20]], "array"],
	[advancedDetermine.typeOf, [undefined], "undefined"]
];
let testsFailed = [];
for (let index = 0; index < tests.length; index++) {
	let [testFunction, testFunctionArguments, testExpectedResult] = tests[index];
	try {
		let testActualResult = testFunction(...testFunctionArguments);
		if (testActualResult !== testExpectedResult) {
			throw new Error("Actual result is not as expected!");
		};
	} catch (error) {
		testsFailed.push([index, error]);
	};
};
if (testsFailed.length > 0) {
	console.error("Code Test Failed:");
	testsFailed.forEach((testFailed) => {
		console.error(`{${testFailed[0]}}: ${testFailed[1]}`);
	});
	process.exit(1);
};
