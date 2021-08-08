import * as assert from "assert";
import isObjectPair from "./is-object-pair.mjs";
import typeOf from "./type-of.mjs";
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
	let item1TypeOf = typeOf(item1),
		item2TypeOf = typeOf(item2);
	if (
		item1TypeOf !== item2TypeOf ||
		item1TypeOf === "nan" ||
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
	let item1IsObjectPair = isObjectPair(item1),
		item2IsObjectPair = isObjectPair(item2);
	if (item1IsObjectPair !== false && item2IsObjectPair !== false) {
		if (item1IsObjectPair !== item2IsObjectPair) {
			return false;
		};
		if (item1IsObjectPair === null && item2IsObjectPair === null) {
			return true;
		};
		let item1Keys = Object.keys(item1),
			item2Keys = Object.keys(item2);
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
	} catch (error) {
		return true;
	};
	return false;
};
export default areEqual;
