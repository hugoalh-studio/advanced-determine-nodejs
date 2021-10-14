import { deepStrictEqual as assertDeepStrictEqual } from "assert";
import $isPlainObject from "./internal/is-plain-object.mjs";
import typeOf from "./type-of.mjs";
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
			if ($areEqual(item1[index], item2[index]) !== true) {
				return false;
			};
		};
		return true;
	};
	if (item1TypeOf === "object" && item1 instanceof Map && item2 instanceof Map) {
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
	if (item1TypeOf === "object" && item1 instanceof Set && item2 instanceof Set) {
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
	let item1IsPlainObject = $isPlainObject(item1, {});
	let item2IsPlainObject = $isPlainObject(item2, {});
	if (item1IsPlainObject !== false && item2IsPlainObject !== false) {
		if (item1IsPlainObject !== item2IsPlainObject) {
			return false;
		};
		if (item1IsPlainObject === null && item2IsPlainObject === null) {
			return true;
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
		let item1PropertiesConfigurable = [];
		let item1PropertiesEnumerable = [];
		let item1PropertiesGetter = [];
		let item1PropertiesNonConfigurable = [];
		let item1PropertiesNonEnumerable = [];
		let item1PropertiesNonGetter = [];
		let item1PropertiesNonSetter = [];
		let item1PropertiesNonWritable = [];
		let item1PropertiesSetter = [];
		let item1PropertiesWritable = [];
		let item2Descriptors = Object.getOwnPropertyDescriptors(item2);
		let item2PropertiesConfigurable = [];
		let item2PropertiesEnumerable = [];
		let item2PropertiesGetter = [];
		let item2PropertiesNonConfigurable = [];
		let item2PropertiesNonEnumerable = [];
		let item2PropertiesNonGetter = [];
		let item2PropertiesNonSetter = [];
		let item2PropertiesNonWritable = [];
		let item2PropertiesSetter = [];
		let item2PropertiesWritable = [];
		for (let item1PropertyKey in item1Descriptors) {
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
			if (typeof item1PropertyDescriptor.get === "undefined") {
				item1PropertiesNonGetter.push(item1PropertyKey);
			} else {
				item1PropertiesGetter.push(item1PropertyKey);
			};
			if (typeof item1PropertyDescriptor.set === "undefined") {
				item1PropertiesNonSetter.push(item1PropertyKey);
			} else {
				item1PropertiesSetter.push(item1PropertyKey);
			};
			if (item1PropertyDescriptor.writable === true) {
				item1PropertiesWritable.push(item1PropertyKey);
			} else {
				item1PropertiesNonWritable.push(item1PropertyKey);
			};
		};
		for (let item2PropertyKey in item2Descriptors) {
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
			if (typeof item2PropertyDescriptor.get === "undefined") {
				item2PropertiesNonGetter.push(item2PropertyKey);
			} else {
				item2PropertiesGetter.push(item2PropertyKey);
			};
			if (typeof item2PropertyDescriptor.set === "undefined") {
				item2PropertiesNonSetter.push(item2PropertyKey);
			} else {
				item2PropertiesSetter.push(item2PropertyKey);
			};
			if (item2PropertyDescriptor.writable === true) {
				item2PropertiesWritable.push(item2PropertyKey);
			} else {
				item2PropertiesNonWritable.push(item2PropertyKey);
			};
		};
		if (
			item1PropertiesConfigurable.length !== item2PropertiesConfigurable.length ||
			item1PropertiesEnumerable.length !== item2PropertiesEnumerable.length ||
			item1PropertiesGetter.length !== item2PropertiesGetter.length ||
			item1PropertiesNonConfigurable.length !== item2PropertiesNonConfigurable.length ||
			item1PropertiesNonEnumerable.length !== item2PropertiesNonEnumerable.length ||
			item1PropertiesNonGetter.length !== item2PropertiesNonGetter.length ||
			item1PropertiesNonSetter.length !== item2PropertiesNonSetter.length ||
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
			if (
				item2PropertiesEnumerable.includes(item1PropertyEnumerable) === false ||
				$areEqual(item1[item1PropertyEnumerable], item2[item1PropertyEnumerable]) !== true
			) {
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
		for (let item1PropertyNonConfigurable of item1PropertiesNonConfigurable) {
			if (item2PropertiesNonConfigurable.includes(item1PropertyNonConfigurable) === false) {
				return false;
			};
		};
		for (let item1PropertyNonEnumerable of item1PropertiesNonEnumerable) {
			if (
				item2PropertiesNonEnumerable.includes(item1PropertyNonEnumerable) === false ||
				$areEqual(item1[item1PropertyNonEnumerable], item2[item1PropertyNonEnumerable]) !== true
			) {
				return false;
			};
		};
		for (let item1PropertyNonGetter of item1PropertiesNonGetter) {
			if (item2PropertiesNonGetter.includes(item1PropertyNonGetter) === false) {
				return false;
			};
		};
		for (let item1PropertyNonSetter of item1PropertiesNonSetter) {
			if (item2PropertiesNonSetter.includes(item1PropertyNonSetter) === false) {
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
	try {
		assertDeepStrictEqual(item1, item2);
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
				if ($areEqual(items[index], items[index + 1]) !== true) {
					return false;
				};
			};
			return true;
	};
};
export default areEqual;
