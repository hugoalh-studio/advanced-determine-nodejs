/*==================
[NodeJS] Advanced Determine - Are Equal
	Language:
		NodeJS/10.0.0
==================*/
const isObjectPair = require("./isobjectpair.js"),
	typeOf = require("./typeof.js");
/**
 * @function areEqual
 * @description Determine 2 items are equal or not.
 * @param {*} item1 Item 1 that need to determine.
 * @param {*} item2 Item 2 that need to determine.
 * @returns {boolean} Determine result.
 */
function areEqual(item1, item2) {
	if (item1 === item2) {
		return true;
	};
	let item1TypeOf = typeOf(item1);
	let item2TypeOf = typeOf(item2);
	if (
		item1TypeOf !== item2TypeOf ||
		(item1TypeOf === "nan" && item2TypeOf === "nan") ||
		(item1TypeOf !== "array" && item1TypeOf !== "object")
	) {
		return false;
	};
	if (item1TypeOf === "array") {
		if (item1.length !== item2.length) {
			return false;
		};
		for (let index = 0; index < item1.length; index++) {
			if (areEqual(item1[index], item2[index]) === false) {
				return false;
			};
		};
		return true;
	};
	if (item1TypeOf === "object") {
		let item1IsObjectPair = isObjectPair(item1);
		let item2IsObjectPair = isObjectPair(item2);
		if (
			item1IsObjectPair !== item2IsObjectPair ||
			item1IsObjectPair === false ||
			item2IsObjectPair === false
		) {
			return false;
		};
		if (item1IsObjectPair === null && item2IsObjectPair === null) {
			return true;
		};
		let item1Key = Object.keys(item1);
		let item2Key = Object.keys(item2);
		if (item1Key.length !== item2Key.length) {
			return false;
		};
		for (let index = 0; index < item1Key.length; index++) {
			let key = item1Key[index];
			if (item2Key.includes(key) === false) {
				return false;
			};
			if (areEqual(item1[key], item2[key]) === false) {
				return false;
			};
			return true;
		};
	};
	return false;
};
module.exports = areEqual;
