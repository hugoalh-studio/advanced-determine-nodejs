import { notDeepStrictEqual as assertNotDeepStrictEqual } from "node:assert";
import ObjectMeta from "./internal/object-meta.mjs";
import typeOf from "./type-of.mjs";
/**
 * @private
 * @function $compareObjectProperties
 * @param {object} item1 Item 1.
 * @param {object} item2 Item 2.
 * @returns {boolean}
 */
function $compareObjectProperties(item1, item2) {
	let item1ObjectMeta = new ObjectMeta(item1);
	let item2ObjectMeta = new ObjectMeta(item2);
	if (!$areEqual(item1ObjectMeta.prototypes, item2ObjectMeta.prototypes)) {
		return false;
	}
	if (item1ObjectMeta.symbolKeys.length !== item2ObjectMeta.symbolKeys.length) {
		return false;
	}
	for (let item1SymbolKey of item1ObjectMeta.symbolKeys) {
		if (
			!item2ObjectMeta.symbolKeys.includes(item1SymbolKey) ||
			!$areEqual(item1[item1SymbolKey], item2[item1SymbolKey])
		) {
			return false;
		}
	}
	if (Object.entries(item1ObjectMeta.descriptors).length !== Object.entries(item2ObjectMeta.descriptors).length) {
		return false;
	}
	if (
		item1ObjectMeta.configurableEntries.length !== item2ObjectMeta.configurableEntries.length ||
		item1ObjectMeta.enumerableEntries.length !== item2ObjectMeta.enumerableEntries.length ||
		item1ObjectMeta.getterEntries.length !== item2ObjectMeta.getterEntries.length ||
		item1ObjectMeta.nonAccessorEntries.length !== item2ObjectMeta.nonAccessorEntries.length ||
		item1ObjectMeta.nonConfigurableEntries.length !== item2ObjectMeta.nonConfigurableEntries.length ||
		item1ObjectMeta.nonEnumerableEntries.length !== item2ObjectMeta.nonEnumerableEntries.length ||
		item1ObjectMeta.nonWritableEntries.length !== item2ObjectMeta.nonWritableEntries.length ||
		item1ObjectMeta.setterEntries.length !== item2ObjectMeta.setterEntries.length ||
		item1ObjectMeta.writableEntries.length !== item2ObjectMeta.writableEntries.length
	) {
		return false;
	}
	for (let item1ConfigurableEntry of item1ObjectMeta.configurableEntries) {
		if (!item2ObjectMeta.configurableEntries.includes(item1ConfigurableEntry)) {
			return false;
		}
	}
	for (let item1EnumerableEntry of item1ObjectMeta.enumerableEntries) {
		if (!item2ObjectMeta.enumerableEntries.includes(item1EnumerableEntry)) {
			return false;
		}
	}
	for (let item1GetterEntry of item1ObjectMeta.getterEntries) {
		if (
			!item2ObjectMeta.getterEntries.includes(item1GetterEntry) ||
			!$areEqual(item1[item1GetterEntry], item2[item1GetterEntry])
		) {
			return false;
		}
	}
	for (let item1NonAccessorEntry of item1ObjectMeta.nonAccessorEntries) {
		if (
			!item2ObjectMeta.nonAccessorEntries.includes(item1NonAccessorEntry) ||
			!$areEqual(item1[item1NonAccessorEntry], item2[item1NonAccessorEntry])
		) {
			return false;
		}
	}
	for (let item1NonConfigurableEntry of item1ObjectMeta.nonConfigurableEntries) {
		if (!item2ObjectMeta.nonConfigurableEntries.includes(item1NonConfigurableEntry)) {
			return false;
		}
	}
	for (let item1NonEnumerableEntry of item1ObjectMeta.nonEnumerableEntries) {
		if (!item2ObjectMeta.nonEnumerableEntries.includes(item1NonEnumerableEntry)) {
			return false;
		}
	}
	for (let item1NonWritableEntry of item1ObjectMeta.nonWritableEntries) {
		if (!item2ObjectMeta.nonWritableEntries.includes(item1NonWritableEntry)) {
			return false;
		}
	}
	for (let item1SetterEntry of item1ObjectMeta.setterEntries) {
		if (
			!item2ObjectMeta.setterEntries.includes(item1SetterEntry) ||
			!$areEqual(item1[item1SetterEntry], item2[item1SetterEntry])
		) {
			return false;
		}
	}
	for (let item1WritableEntry of item1ObjectMeta.writableEntries) {
		if (!item2ObjectMeta.writableEntries.includes(item1WritableEntry)) {
			return false;
		}
	}
	return true;
}
/**
 * @private
 * @function $areEqual
 * @param {unknown} item1 Item 1.
 * @param {unknown} item2 Item 2.
 * @returns {boolean}
 */
function $areEqual(item1, item2) {
	if (item1 === item2) {
		return true;
	}
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
	}
	if (item1TypeOf === "array") {
		if (Object.entries(item1).length !== Object.entries(item2).length) {
			return false;
		}
		return $compareObjectProperties(item1, item2);
	}
	if (item1 instanceof Map && item2 instanceof Map) {
		if (item1.size !== item2.size) {
			return false;
		}
		if ($areEqual(Array.from(item1.entries()), Array.from(item2.entries()))) {
			return true;
		}
		let item2Keys = Array.from(item2.keys());
		let item2Values = Array.from(item2.values());
		for (let [item1Key, item1Value] of item1.entries()) {
			let matchItem2KeysIndexes = [];
			item2Keys.forEach((item2Key, item2KeysIndex) => {
				if (
					(typeOf(item1Key) === "nan" && typeOf(item2Key) === "nan") ||
					$areEqual(item1Key, item2Key)
				) {
					matchItem2KeysIndexes.push(item2KeysIndex);
				}
			});
			if (matchItem2KeysIndexes.length === 0) {
				return false;
			}
			if (!matchItem2KeysIndexes.some((matchItem2KeysIndex) => {
				let matchItem2Value = item2Values[matchItem2KeysIndex];
				return (
					(typeOf(item1Value) === "nan" && typeOf(matchItem2Value) === "nan") ||
					$areEqual(item1Value, matchItem2Value)
				);
			})) {
				return false;
			}
		}
		return true;
	}
	if (item1 instanceof RegExp && item2 instanceof RegExp) {
		return (item1.flags === item2.flags && item1.source === item2.source);
	}
	if (item1 instanceof Set && item2 instanceof Set) {
		if (item1.size !== item2.size) {
			return false;
		}
		if ($areEqual(Array.from(item1.values()), Array.from(item2.values()))) {
			return true;
		}
		for (let item1Value of item1.values()) {
			let matchItem2Values = [];
			for (let item2Value of item2.values()) {
				if (
					(typeOf(item1Value) === "nan" && typeOf(item2Value) === "nan") ||
					$areEqual(item1Value, item2Value)
				) {
					matchItem2Values.push(item2Value);
				}
			}
			if (matchItem2Values.length === 0) {
				return false;
			}
		}
		return true;
	}
	if (item1TypeOf === "object" && item2TypeOf === "object") {
		if (Object.entries(item1).length !== Object.entries(item2).length) {
			return false;
		}
		return $compareObjectProperties(item1, item2);
	}
	try {
		assertNotDeepStrictEqual(item1, item2);
	} catch {
		return true;
	}
	return false;
}
/**
 * @function areEqual
 * @description Determine items are equal or not.
 * @param {...unknown} items Items that need to determine.
 * @returns {boolean} Determine result.
 */
function areEqual(...items) {
	switch (items.length) {
		case 0:
			throw new ReferenceError(`Argument \`items\` is not defined!`);
		case 1:
		case 2:
			return $areEqual(...items);
		default:
			for (let index = 0; index < items.length - 1; index++) {
				if (!$areEqual(items[index], items[index + 1])) {
					return false;
				}
			}
			return true;
	}
}
export default areEqual;
