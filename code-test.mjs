let timeLoadStart = new Date();
import * as advancedDetermine from "./lib/main.mjs";
let timeLoadEnd = new Date();
let tests = [
	{
		code: advancedDetermine.areEqual,
		inputs: ["Test", "test"],
		expectedResult: false
	},
	{
		code: advancedDetermine.areEqual,
		inputs: [[10, [20], 30, 40], [10, 20, 30, 40]],
		expectedResult: false
	},
	{
		code: advancedDetermine.areEqual,
		inputs: [[10, 20, 30, 40], [10, 20, 30, 40]],
		expectedResult: true
	},
	{
		code: advancedDetermine.areEqual,
		inputs: [1, "1"],
		expectedResult: false
	},
	{
		code: advancedDetermine.isArray,
		inputs: [""],
		expectedResult: false
	},
	{
		code: advancedDetermine.isArray,
		inputs: [[]],
		expectedResult: null
	},
	{
		code: advancedDetermine.isArray,
		inputs: [[1, 2, 3]],
		expectedResult: true
	},
	{
		code: advancedDetermine.isBigInteger,
		inputs: [-10],
		expectedResult: false
	},
	{
		code: advancedDetermine.isBigInteger,
		inputs: [-10n, { positive: true }],
		expectedResult: false
	},
	{
		code: advancedDetermine.isBigInteger,
		inputs: [7n, { negative: true, positive: true }],
		expectedResult: false
	},
	{
		code: advancedDetermine.isBigInteger,
		inputs: [1024n, { positive: true }],
		expectedResult: true
	},
	{
		code: advancedDetermine.isBigInteger,
		inputs: [1024n],
		expectedResult: true
	},
	{
		code: advancedDetermine.isBigInteger,
		inputs: [NaN],
		expectedResult: false
	},
	{
		code: advancedDetermine.isFunction,
		inputs: [() => { }],
		expectedResult: true
	},
	{
		code: advancedDetermine.isFunction,
		inputs: [function* foo() { }, { generator: false }],
		expectedResult: false
	},
	{
		code: advancedDetermine.isJSON,
		inputs: [{ magic: () => { console.log("Test!"); } }],
		expectedResult: false
	},
	{
		code: advancedDetermine.isJSON,
		inputs: [{ number: 1 }],
		expectedResult: true
	},
	{
		code: advancedDetermine.isJSON,
		inputs: [{}],
		expectedResult: null
	},
	{
		code: advancedDetermine.isNumber,
		inputs: [-10, { positive: true }],
		expectedResult: false
	},
	{
		code: advancedDetermine.isNumber,
		inputs: [-10],
		expectedResult: true
	},
	{
		code: advancedDetermine.isNumber,
		inputs: [7.21, { float: true, integer: true }],
		expectedResult: false
	},
	{
		code: advancedDetermine.isNumber,
		inputs: [8.31, { float: true, positive: true, safe: true }],
		expectedResult: true
	},
	{
		code: advancedDetermine.isNumber,
		inputs: [1024, { positive: true }],
		expectedResult: true
	},
	{
		code: advancedDetermine.isNumber,
		inputs: [1024],
		expectedResult: true
	},
	{
		code: advancedDetermine.isNumber,
		inputs: [NaN],
		expectedResult: false
	},
	{
		code: advancedDetermine.isObject,
		inputs: [{ enable: false }],
		expectedResult: true
	},
	{
		code: advancedDetermine.isObject,
		inputs: [{ magic: () => { console.log("Test!"); } }],
		expectedResult: true
	},
	{
		code: advancedDetermine.isObject,
		inputs: [new Boolean(true)],
		expectedResult: true
	},
	{
		code: advancedDetermine.isObject,
		inputs: [null],
		expectedResult: false
	},
	{
		code: advancedDetermine.isObject,
		inputs: [true],
		expectedResult: false
	},
	{
		code: advancedDetermine.isPlainObject,
		inputs: [{ enable: false }],
		expectedResult: true
	},
	{
		code: advancedDetermine.isPlainObject,
		inputs: [{ magic: () => { console.log("Test!"); } }],
		expectedResult: true
	},
	{
		code: advancedDetermine.isPlainObject,
		inputs: [new Boolean(true)],
		expectedResult: false
	},
	{
		code: advancedDetermine.isPlainObject,
		inputs: [null],
		expectedResult: false
	},
	{
		code: advancedDetermine.isPlainObject,
		inputs: [true],
		expectedResult: false
	},
	{
		code: advancedDetermine.isString,
		inputs: ["    ", { allowWhitespace: false }],
		expectedResult: null
	},
	{
		code: advancedDetermine.isString,
		inputs: ["    "],
		expectedResult: true
	},
	{
		code: advancedDetermine.isString,
		inputs: [""],
		expectedResult: null
	},
	{
		code: advancedDetermine.isString,
		inputs: ["Hello World", { lowerCase: true }],
		expectedResult: false
	},
	{
		code: advancedDetermine.isString,
		inputs: ["Hello, world!", { lowerCase: true, upperCase: true }],
		expectedResult: false
	},
	{
		code: advancedDetermine.isString,
		inputs: ["Hello, world!"],
		expectedResult: true
	},
	{
		code: advancedDetermine.isString,
		inputs: ["null", { lowerCase: true }],
		expectedResult: true
	},
	{
		code: advancedDetermine.isString,
		inputs: ["null"],
		expectedResult: true
	},
	{
		code: advancedDetermine.isString,
		inputs: [null],
		expectedResult: false
	},
	{
		code: advancedDetermine.isStringifyJSON,
		inputs: ["{ \"number\": 1 }"],
		expectedResult: true
	},
	{
		code: advancedDetermine.isStringifyJSON,
		inputs: ["{}"],
		expectedResult: null
	},
	{
		code: advancedDetermine.isStringifyJSON,
		inputs: ["word"],
		expectedResult: false
	},
	{
		code: advancedDetermine.typeOf,
		inputs: ["undefined"],
		expectedResult: "string"
	},
	{
		code: advancedDetermine.typeOf,
		inputs: [[]],
		expectedResult: "array"
	},
	{
		code: advancedDetermine.typeOf,
		inputs: [[10, 20]],
		expectedResult: "array"
	},
	{
		code: advancedDetermine.typeOf,
		inputs: [undefined],
		expectedResult: "undefined"
	}
];
let testsFailed = [];
let timeExecuteStart = new Date();
tests.forEach((test, index) => {
	try {
		if (test.code(...test.inputs) !== test.expectedResult) {
			throw new Error("Actual result is not as expected!");
		};
	} catch (error) {
		testsFailed.push({
			index: index,
			reason: error
		});
	};
});
let timeExecuteEnd = new Date();
console.log(`Load Time: ${(timeLoadEnd - timeLoadStart) / 1000} s`);
console.log(`Execute Time (Total - ${tests.length}): ${(timeExecuteEnd - timeExecuteStart) / 1000} s`);
console.log(`Execute Time (Each): ${(timeExecuteEnd - timeExecuteStart) / 1000 / tests.length} s`);
if (testsFailed.length > 0) {
	console.error("Failed Tests:");
	testsFailed.forEach((testFailed) => {
		console.error(`{${testFailed.index}}: ${testFailed.reason}`);
	});
	process.exit(1);
};
