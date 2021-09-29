const assert = require("assert");
const isObjectPair = require("./is-object-pair.js");
const typeOf = require("./type-of.js");
/**
 * @private
 * @function areEqualInternal
 * @param {any} item1
 * @param {any} item2
 * @returns {boolean}
 */
function areEqualInternal(item1, item2) {
	if (item1 === item2) {
		return true;
	};
	let item1TypeOf = typeOf(item1);
	let item2TypeOf = typeOf(item2);
	if (
		item1TypeOf !== item2TypeOf ||
		item1TypeOf === "nan"
	) {
		return false;
	};
	if (item1TypeOf === "array") {
		if (item1.length !== item2.length) {
			return false;
		};
		for (let index = 0; index < item1.length; index++) {
			if (areEqualInternal(item1[index], item2[index]) === false) {
				return false;
			};
		};
		return true;
	};
	if (item1TypeOf === "map") {
		if (item1.size !== item2.size) {
			return false;
		};
		if (areEqualInternal(Array.from(item1), Array.from(item2)) === true) {
			return true;
		};
		let item1Keys = Array.from(item1.keys());
		let item1Values = Array.from(item1.values());
		let item2Keys = Array.from(item2.keys());
		let item2Values = Array.from(item2.values());
		for (let indexItem1Keys = 0; indexItem1Keys < item1Keys.length; indexItem1Keys++) {
			let item1Key = item1Keys[indexItem1Keys];
			let item1Value = item1Values[indexItem1Keys];
			let item2KeyIndexes = [];
			item2Keys.forEach((item2Key, indexItem2Keys) => {
				if (
					areEqualInternal(item1Key, item2Key) === true ||
					(typeOf(item1Key) === "nan" && typeOf(item2Key) === "nan")
				) {
					item2KeyIndexes.push(indexItem2Keys);
				};
			});
			if (item2KeyIndexes.length === 0) {
				return false;
			};
			let item2ValuesDelta = item2KeyIndexes.map((indexItem2Keys) => {
				return item2Values[indexItem2Keys];
			});
			if (item2ValuesDelta.some((item2ValueDelta) => {
				return (
					areEqualInternal(item1Value, item2ValueDelta) === true ||
					(typeOf(item1Value) === "nan" && typeOf(item2ValueDelta) === "nan")
				);
			}) === false) {
				return false;
			};
		};
		return true;
	};
	if (item1TypeOf === "regexp") {
		if (
			item1.flags !== item2.flags ||
			item1.source !== item2.source
		) {
			return false;
		};
		return true;
	};
	if (item1TypeOf === "set") {
		if (item1.size !== item2.size) {
			return false;
		};
		let item1Values = Array.from(item1);
		let item2Values = Array.from(item2);
		if (areEqualInternal(item1Values, item2Values) === true) {
			return true;
		};
		for (let indexItem1Values = 0; indexItem1Values < item1Values.length; indexItem1Values++) {
			let item1Value = item1Values[indexItem1Values];
			let item2ValueIndexes = [];
			item2Values.forEach((item2Value, indexItem2Values) => {
				if (
					areEqualInternal(item1Value, item2Value) === true ||
					(typeOf(item1Value) === "nan" && typeOf(item2Value) === "nan")
				) {
					item2ValueIndexes.push(indexItem2Values);
				};
			});
			if (item2ValueIndexes.length === 0) {
				return false;
			};
		};
		return true;
	};
	let item1IsObjectPair = isObjectPair(item1);
	let item2IsObjectPair = isObjectPair(item2);
	if (item1IsObjectPair !== false && item2IsObjectPair !== false) {
		if (item1IsObjectPair !== item2IsObjectPair) {
			return false;
		};
		if (item1IsObjectPair === null && item2IsObjectPair === null) {
			return true;
		};
		let item1Keys = Object.keys(item1);
		let item2Keys = Object.keys(item2);
		if (item1Keys.length !== item2Keys.length) {
			return false;
		};
		for (let index = 0; index < item1Keys.length; index++) {
			let key = item1Keys[index];
			if (item2Keys.includes(key) === false) {
				return false;
			};
			if (areEqualInternal(item1[key], item2[key]) === false) {
				return false;
			};
		};
		return true;
	};
	try {
		assert.notDeepStrictEqual(item1, item2);
	} catch {
		return true;
	};
	return false;
};
/**
 * @function areEqual
 * @description Determine items are equal or not.
 * @param {any} items Items that need to determine.
 * @returns {boolean} Determine result.
 */
function areEqual(...items) {
	switch (items.length) {
		case 0:
			throw new Error(`Argument \`items\` is not defined!`);
		case 1:
		case 2:
			return areEqualInternal(items[0], items[1]);
		default:
			for (let index = 0; index < items.length - 1; index++) {
				if (areEqualInternal(items[index], items[index + 1]) === false) {
					return false;
				};
			};
			return true;
	};
};
module.exports = areEqual;
