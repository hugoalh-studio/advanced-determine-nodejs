import { notDeepStrictEqual as assertNotDeepStrictEqual } from "assert";
import $isPlainObject from "./internal/is-plain-object.mjs";
import typeOf from "./type-of.mjs";
/**
 * @private
 * @function $checkObjectProperties
 * @param {object} item1
 * @param {object} item2
 * @returns {boolean}
 */
function $checkObjectProperties(item1, item2) {
	if ($areEqual(Object.getPrototypeOf(item1), Object.getPrototypeOf(item2)) === false) {
		return false;
	};
	let item1PropertiesSymbol = Object.getOwnPropertySymbols(item1);
	let item2PropertiesSymbol = Object.getOwnPropertySymbols(item2);
	if (item1PropertiesSymbol.length !== item2PropertiesSymbol.length) {
		return false;
	};
	for (let item1Symbol of item1PropertiesSymbol) {
		if (
			item2PropertiesSymbol.includes(item1Symbol) === false ||
			$areEqual(item1[item1Symbol], item2[item1Symbol]) !== true
		) {
			return false;
		};
	};
	let item1Descriptors = Object.getOwnPropertyDescriptors(item1);
	let item2Descriptors = Object.getOwnPropertyDescriptors(item2);
	if (Object.entries(item1Descriptors).length !== Object.entries(item2Descriptors).length) {
		return false;
	};
	let item1PropertiesConfigurable = [];
	let item1PropertiesEnumerable = [];
	let item1PropertiesGetter = [];
	let item1PropertiesNonAccessor = [];
	let item1PropertiesNonConfigurable = [];
	let item1PropertiesNonEnumerable = [];
	let item1PropertiesNonWritable = [];
	let item1PropertiesSetter = [];
	let item1PropertiesWritable = [];
	let item2PropertiesConfigurable = [];
	let item2PropertiesEnumerable = [];
	let item2PropertiesGetter = [];
	let item2PropertiesNonAccessor = [];
	let item2PropertiesNonConfigurable = [];
	let item2PropertiesNonEnumerable = [];
	let item2PropertiesNonWritable = [];
	let item2PropertiesSetter = [];
	let item2PropertiesWritable = [];
	for (let item1PropertyKey in item1Descriptors) {
		if (Object.prototype.hasOwnProperty.call(item1Descriptors, item1PropertyKey) === true) {
			let item1PropertyDescriptor = item1Descriptors[item1PropertyKey];
			if (item1PropertyDescriptor.configurable === true) {
				item1PropertiesConfigurable.push(item1PropertyKey);
			} else {
				item1PropertiesNonConfigurable.push(item1PropertyKey);
			};
			if (item1PropertyDescriptor.enumerable === true) {
				item1PropertiesEnumerable.push(item1PropertyKey);
			} else {
				item1PropertiesNonEnumerable.push(item1PropertyKey);
			};
			if (typeof item1PropertyDescriptor.get !== "undefined") {
				item1PropertiesGetter.push(item1PropertyKey);
			} else if (typeof item1PropertyDescriptor.set !== "undefined") {
				item1PropertiesSetter.push(item1PropertyKey);
			} else {
				item1PropertiesNonAccessor.push(item1PropertyKey);
			};
			if (item1PropertyDescriptor.writable === true) {
				item1PropertiesWritable.push(item1PropertyKey);
			} else {
				item1PropertiesNonWritable.push(item1PropertyKey);
			};
		};
	};
	for (let item2PropertyKey in item2Descriptors) {
		if (Object.prototype.hasOwnProperty.call(item2Descriptors, item2PropertyKey) === true) {
			let item2PropertyDescriptor = item2Descriptors[item2PropertyKey];
			if (item2PropertyDescriptor.configurable === true) {
				item2PropertiesConfigurable.push(item2PropertyKey);
			} else {
				item2PropertiesNonConfigurable.push(item2PropertyKey);
			};
			if (item2PropertyDescriptor.enumerable === true) {
				item2PropertiesEnumerable.push(item2PropertyKey);
			} else {
				item2PropertiesNonEnumerable.push(item2PropertyKey);
			};
			if (typeof item2PropertyDescriptor.get !== "undefined") {
				item2PropertiesGetter.push(item2PropertyKey);
			} else if (typeof item2PropertyDescriptor.set !== "undefined") {
				item2PropertiesSetter.push(item2PropertyKey);
			} else {
				item2PropertiesNonAccessor.push(item2PropertyKey);
			};
			if (item2PropertyDescriptor.writable === true) {
				item2PropertiesWritable.push(item2PropertyKey);
			} else {
				item2PropertiesNonWritable.push(item2PropertyKey);
			};
		};
	};
	if (
		item1PropertiesConfigurable.length !== item2PropertiesConfigurable.length ||
		item1PropertiesEnumerable.length !== item2PropertiesEnumerable.length ||
		item1PropertiesGetter.length !== item2PropertiesGetter.length ||
		item1PropertiesNonAccessor.length !== item2PropertiesNonAccessor.length ||
		item1PropertiesNonConfigurable.length !== item2PropertiesNonConfigurable.length ||
		item1PropertiesNonEnumerable.length !== item2PropertiesNonEnumerable.length ||
		item1PropertiesNonWritable.length !== item2PropertiesNonWritable.length ||
		item1PropertiesSetter.length !== item2PropertiesSetter.length ||
		item1PropertiesWritable.length !== item2PropertiesWritable.length
	) {
		return false;
	};
	for (let item1PropertyConfigurable of item1PropertiesConfigurable) {
		if (item2PropertiesConfigurable.includes(item1PropertyConfigurable) === false) {
			return false;
		};
	};
	for (let item1PropertyEnumerable of item1PropertiesEnumerable) {
		if (item2PropertiesEnumerable.includes(item1PropertyEnumerable) === false) {
			return false;
		};
	};
	for (let item1PropertyGetter of item1PropertiesGetter) {
		if (
			item2PropertiesGetter.includes(item1PropertyGetter) === false ||
			$areEqual(item1[item1PropertyGetter], item2[item1PropertyGetter]) !== true
		) {
			return false;
		};
	};
	for (let item1PropertyNonAccessor of item1PropertiesNonAccessor) {
		if (
			item2PropertiesNonAccessor.includes(item1PropertyNonAccessor) === false ||
			$areEqual(item1[item1PropertyNonAccessor], item2[item1PropertyNonAccessor]) !== true
		) {
			return false;
		};
	};
	for (let item1PropertyNonConfigurable of item1PropertiesNonConfigurable) {
		if (item2PropertiesNonConfigurable.includes(item1PropertyNonConfigurable) === false) {
			return false;
		};
	};
	for (let item1PropertyNonEnumerable of item1PropertiesNonEnumerable) {
		if (item2PropertiesNonEnumerable.includes(item1PropertyNonEnumerable) === false) {
			return false;
		};
	};
	for (let item1PropertyNonWritable of item1PropertiesNonWritable) {
		if (item2PropertiesNonWritable.includes(item1PropertyNonWritable) === false) {
			return false;
		};
	};
	for (let item1PropertySetter of item1PropertiesSetter) {
		if (
			item2PropertiesSetter.includes(item1PropertySetter) === false ||
			$areEqual(item1[item1PropertySetter], item2[item1PropertySetter]) !== true
		) {
			return false;
		};
	};
	for (let item1PropertyWritable of item1PropertiesWritable) {
		if (item2PropertiesWritable.includes(item1PropertyWritable) === false) {
			return false;
		};
	};
	return true;
};
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
		item1TypeOf === "bigint" ||
		item1TypeOf === "boolean" ||
		item1TypeOf === "nan" ||
		item1TypeOf === "null" ||
		item1TypeOf === "number" ||
		item1TypeOf === "string" ||
		item1TypeOf === "symbol" ||
		item1TypeOf === "undefined"
	) {
		return false;
	};
	if (item1TypeOf === "array") {
		if (Object.entries(item1).length !== Object.entries(item2).length) {
			return false;
		};
		return $checkObjectProperties(item1, item2);
	};
	if (item1TypeOf === "object" && item1 instanceof Map && item2 instanceof Map) {
		if (item1.size !== item2.size) {
			return false;
		};
		let item1Entries = item1.entries();
		if ($areEqual(Array.from(item1Entries), Array.from(item2.entries())) === true) {
			return true;
		};
		let item2Keys = Array.from(item2.keys());
		let item2Values = Array.from(item2.values());
		for (let [item1Key, item1Value] of item1Entries) {
			let matchItem2KeysIndexes = [];
			item2Keys.forEach((item2Key, item2KeysIndex) => {
				if (
					(typeOf(item1Key) === "nan" && typeOf(item2Key) === "nan") ||
					$areEqual(item1Key, item2Key) === true
				) {
					matchItem2KeysIndexes.push(item2KeysIndex);
				};
			});
			if (matchItem2KeysIndexes.length === 0) {
				return false;
			};
			if (matchItem2KeysIndexes.some((matchItem2KeysIndex) => {
				let matchItem2Value = item2Values[matchItem2KeysIndex];
				return (
					(typeOf(item1Value) === "nan" && typeOf(matchItem2Value) === "nan") ||
					$areEqual(item1Value, matchItem2Value) === true
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
	if (item1TypeOf === "object" && item1 instanceof Set && item2 instanceof Set) {
		if (item1.size !== item2.size) {
			return false;
		};
		let item1Values = item1.values();
		let item2Values = item2.values();
		if ($areEqual(Array.from(item1Values), Array.from(item2Values)) === true) {
			return true;
		};
		for (let item1Value of item1Values) {
			let matchItem2Values = [];
			for (let item2Value of item2Values) {
				if (
					(typeOf(item1Value) === "nan" && typeOf(item2Value) === "nan") ||
					$areEqual(item1Value, item2Value) === true
				) {
					matchItem2Values.push(item2Value);
				};
			};
			if (matchItem2Values.length === 0) {
				return false;
			};
		};
		return true;
	};
	let item1IsPlainObject = $isPlainObject(item1, {});
	let item2IsPlainObject = $isPlainObject(item2, {});
	if (item1IsPlainObject !== false && item2IsPlainObject !== false) {
		if (
			item1IsPlainObject !== item2IsPlainObject ||
			Object.entries(item1).length !== Object.entries(item2).length
		) {
			return false;
		};
		if (item1IsPlainObject === null && item2IsPlainObject === null) {
			return true;
		};
		return $checkObjectProperties(item1, item2);
	};
	try {
		assertNotDeepStrictEqual(item1, item2);
	} catch {
		return true;
	};
	return false;
};
/**
 * @function areEqual
 * @description Determine items are equal or not.
 * @param {...any} items Items that need to determine.
 * @returns {boolean} Determine result.
 */
function areEqual(...items) {
	let itemLength = items.length;
	switch (itemLength) {
		case 0:
			throw new Error(`Argument \`items\` is not defined!`);
		case 1:
		case 2:
			return $areEqual(...items);
		default:
			for (let index = 0; index < itemLength - 1; index++) {
				if ($areEqual(items[index], items[index + 1]) !== true) {
					return false;
				};
			};
			return true;
	};
};
export default areEqual;
