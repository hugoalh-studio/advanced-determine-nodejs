const assert = require("assert");
const isObjectPair = require("./is-object-pair.js");
const typeOf = require("./type-of.js");
/**
 * @function areEqual
 * @description Determine items are equal or not.
 * @param {any} items Items that need to determine.
 * @returns {boolean} Determine result.
 */
function areEqual(...items) {
	if (items.length === 0) {
		throw new Error(`Argument \`items\` is not defined!`);
	};
	if (items.length > 2) {
		for (let index = 0; index < items.length - 1; index++) {
			if (areEqual(items[index], items[index + 1]) === false) {
				return false;
			};
		};
		return true;
	};
	let [item1, item2] = items;
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
			if (areEqual(item1[index], item2[index]) === false) {
				return false;
			};
		};
		return true;
	};
	if (item1TypeOf === "map") {
		if (item1.size !== item2.size) {
			return false;
		};
		if (areEqual(Array.from(item1), Array.from(item2)) === true) {
			return true;
		};
		let item1Keys = Array.from(item1.keys());
		let item1Values = Array.from(item1.values());
		let item2Keys = Array.from(item2.keys());
		let item2Values = Array.from(item2.values());
		for (let indexItem1Keys = 0; indexItem1Keys < item1Keys.length; indexItem1Keys++) {
			let item1Key = item1Keys[indexItem1Keys];
			let item2KeyIndex = -1;
			for (let indexItem2Keys = 0; indexItem2Keys < item2Keys.length; indexItem2Keys++) {
				if (areEqual(item1Key, item2Keys[indexItem2Keys]) === true) {
					item2KeyIndex = indexItem2Keys;
					break;
				};
			};
			if (item2KeyIndex < 0) {
				return false;
			};
			if (areEqual(item1Values[indexItem1Keys], item2Values[item2KeyIndex]) === false) {
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
		if (areEqual(item1Values, item2Values) === true) {
			return true;
		};
		for (let indexItem1Values = 0; indexItem1Values < item1Values.length; indexItem1Values++) {
			let item1Value = item1Values[indexItem1Values];
			let item2ValueIndex = -1;
			for (let indexItem2Values = 0; indexItem2Values < item2Values.length; indexItem2Values++) {
				if (areEqual(item1Value, item2Values[indexItem2Values]) === true) {
					item2ValueIndex = indexItem2Values;
					break;
				};
			};
			if (item2ValueIndex < 0) {
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
			if (areEqual(item1[key], item2[key]) === false) {
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
module.exports = areEqual;
