const $isPlainObject = require("./internal/is-plain-object.js");
const assert = require("assert");
const typeOf = require("./type-of.js");
/**
 * @private
 * @function $areEqual
 * @param {any} item1
 * @param {any} item2
 * @returns {boolean}
 */
function $areEqual(item1, item2) {
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
		let item1Length = item1.length;
		if (item1Length !== item2.length) {
			return false;
		};
		for (let index = 0; index < item1Length; index++) {
			if ($areEqual(item1[index], item2[index]) === false) {
				return false;
			};
		};
		return true;
	};
	if (item1TypeOf === "map") {
		if (item1.size !== item2.size) {
			return false;
		};
		if ($areEqual(Array.from(item1), Array.from(item2)) === true) {
			return true;
		};
		let item1Keys = Array.from(item1.keys());
		let item1KeysLength = item1Keys.length;
		let item1Values = Array.from(item1.values());
		let item2Keys = Array.from(item2.keys());
		let item2Values = Array.from(item2.values());
		for (let indexItem1Keys = 0; indexItem1Keys < item1KeysLength; indexItem1Keys++) {
			let item1Key = item1Keys[indexItem1Keys];
			let item1Value = item1Values[indexItem1Keys];
			let item2KeyIndexes = [];
			item2Keys.forEach((item2Key, indexItem2Keys) => {
				if (
					$areEqual(item1Key, item2Key) === true ||
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
					$areEqual(item1Value, item2ValueDelta) === true ||
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
		if ($areEqual(item1Values, item2Values) === true) {
			return true;
		};
		for (let item1Value of item1Values) {
			let item2EqualList = [];
			item2Values.forEach((item2Value) => {
				if (
					$areEqual(item1Value, item2Value) === true ||
					(typeOf(item1Value) === "nan" && typeOf(item2Value) === "nan")
				) {
					item2EqualList.push(item2Value);
				};
			});
			if (item2EqualList.length === 0) {
				return false;
			};
		};
		return true;
	};
	let item1IsPlainObject = $isPlainObject(item1);
	let item2IsPlainObject = $isPlainObject(item2);
	if (item1IsPlainObject !== false && item2IsPlainObject !== false) {
		if (item1IsPlainObject !== item2IsPlainObject) {
			return false;
		};
		if (item1IsPlainObject === null && item2IsPlainObject === null) {
			return true;
		};
		let item1Keys = Object.keys(item1);
		let item2Keys = Object.keys(item2);
		if (item1Keys.length !== item2Keys.length) {
			return false;
		};
		for (let item1Key of item1Keys) {
			if (
				item2Keys.includes(item1Key) === false ||
				$areEqual(item1[item1Key], item2[item1Key]) === false
			) {
				return false;
			};
		};
		return true;
	};
	try {
		assert.deepStrictEqual(item1, item2);
	} catch {
		return false;
	};
	return true;
};
/**
 * @function areEqual
 * @description Determine items are equal or not.
 * @param {...any} items Items that need to determine.
 * @returns {boolean} Determine result.
 */
function areEqual(...items) {
	switch (items.length) {
		case 0:
			throw new Error(`Argument \`items\` is not defined!`);
		case 1:
		case 2:
			return $areEqual(items[0], items[1]);
		default:
			let itemsLengthDelta = items.length - 1;
			for (let index = 0; index < itemsLengthDelta; index++) {
				if ($areEqual(items[index], items[index + 1]) === false) {
					return false;
				};
			};
			return true;
	};
};
module.exports = areEqual;
