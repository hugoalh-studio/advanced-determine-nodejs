const assert = require("assert");
const ObjectMeta = require("./internal/object-meta.js");
const typeOf = require("./type-of.js");
/**
 * @private
 * @function $compareObjectProperties
 * @param {object} item1
 * @param {object} item2
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
		item1ObjectMeta.entriesConfigurable.length !== item2ObjectMeta.entriesConfigurable.length ||
		item1ObjectMeta.entriesEnumerable.length !== item2ObjectMeta.entriesEnumerable.length ||
		item1ObjectMeta.entriesGetter.length !== item2ObjectMeta.entriesGetter.length ||
		item1ObjectMeta.entriesNonAccessor.length !== item2ObjectMeta.entriesNonAccessor.length ||
		item1ObjectMeta.entriesNonConfigurable.length !== item2ObjectMeta.entriesNonConfigurable.length ||
		item1ObjectMeta.entriesNonEnumerable.length !== item2ObjectMeta.entriesNonEnumerable.length ||
		item1ObjectMeta.entriesNonWritable.length !== item2ObjectMeta.entriesNonWritable.length ||
		item1ObjectMeta.entriesSetter.length !== item2ObjectMeta.entriesSetter.length ||
		item1ObjectMeta.entriesWritable.length !== item2ObjectMeta.entriesWritable.length
	) {
		return false;
	}
	for (let item1EntryConfigurable of item1ObjectMeta.entriesConfigurable) {
		if (!item2ObjectMeta.entriesConfigurable.includes(item1EntryConfigurable)) {
			return false;
		}
	}
	for (let item1EntryEnumerable of item1ObjectMeta.entriesEnumerable) {
		if (!item2ObjectMeta.entriesEnumerable.includes(item1EntryEnumerable)) {
			return false;
		}
	}
	for (let item1EntryGetter of item1ObjectMeta.entriesGetter) {
		if (
			!item2ObjectMeta.entriesGetter.includes(item1EntryGetter) ||
			!$areEqual(item1[item1EntryGetter], item2[item1EntryGetter])
		) {
			return false;
		}
	}
	for (let item1EntryNonAccessor of item1ObjectMeta.entriesNonAccessor) {
		if (
			!item2ObjectMeta.entriesNonAccessor.includes(item1EntryNonAccessor) ||
			!$areEqual(item1[item1EntryNonAccessor], item2[item1EntryNonAccessor])
		) {
			return false;
		}
	}
	for (let item1EntryNonConfigurable of item1ObjectMeta.entriesNonConfigurable) {
		if (!item2ObjectMeta.entriesNonConfigurable.includes(item1EntryNonConfigurable)) {
			return false;
		}
	}
	for (let item1EntryNonEnumerable of item1ObjectMeta.entriesNonEnumerable) {
		if (!item2ObjectMeta.entriesNonEnumerable.includes(item1EntryNonEnumerable)) {
			return false;
		}
	}
	for (let item1EntryNonWritable of item1ObjectMeta.entriesNonWritable) {
		if (!item2ObjectMeta.entriesNonWritable.includes(item1EntryNonWritable)) {
			return false;
		}
	}
	for (let item1EntrySetter of item1ObjectMeta.entriesSetter) {
		if (
			!item2ObjectMeta.entriesSetter.includes(item1EntrySetter) ||
			!$areEqual(item1[item1EntrySetter], item2[item1EntrySetter])
		) {
			return false;
		}
	}
	for (let item1EntryWritable of item1ObjectMeta.entriesWritable) {
		if (!item2ObjectMeta.entriesWritable.includes(item1EntryWritable)) {
			return false;
		}
	}
	return true;
}
/**
 * @private
 * @function $areEqual
 * @param {unknown} item1
 * @param {unknown} item2
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
		assert.notDeepStrictEqual(item1, item2);
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
module.exports = areEqual;
