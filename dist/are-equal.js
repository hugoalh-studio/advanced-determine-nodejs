import { notDeepStrictEqual } from "node:assert";
import { ObjectMeta } from "./internal/object-meta.js";
import { typeOf } from "./type-of.js";
/**
 * @access private
 * @function areEqualObjectMeta
 * @param {object} item1 Item 1.
 * @param {object} item2 Item 2.
 * @returns {boolean}
 */
function areEqualObjectMeta(item1, item2) {
    let item1ObjectMeta = new ObjectMeta(item1);
    let item2ObjectMeta = new ObjectMeta(item2);
    if (item1ObjectMeta.keysSymbol.length !== item2ObjectMeta.keysSymbol.length ||
        Object.entries(item1ObjectMeta.descriptors).length !== Object.entries(item2ObjectMeta.descriptors).length ||
        item1ObjectMeta.entriesConfigurable.length !== item2ObjectMeta.entriesConfigurable.length ||
        item1ObjectMeta.entriesEnumerable.length !== item2ObjectMeta.entriesEnumerable.length ||
        item1ObjectMeta.entriesGetter.length !== item2ObjectMeta.entriesGetter.length ||
        item1ObjectMeta.entriesNonAccessor.length !== item2ObjectMeta.entriesNonAccessor.length ||
        item1ObjectMeta.entriesNonConfigurable.length !== item2ObjectMeta.entriesNonConfigurable.length ||
        item1ObjectMeta.entriesNonEnumerable.length !== item2ObjectMeta.entriesNonEnumerable.length ||
        item1ObjectMeta.entriesNonWritable.length !== item2ObjectMeta.entriesNonWritable.length ||
        item1ObjectMeta.entriesSetter.length !== item2ObjectMeta.entriesSetter.length ||
        item1ObjectMeta.entriesWritable.length !== item2ObjectMeta.entriesWritable.length ||
        !areEqualInternal(item1ObjectMeta.prototypes, item2ObjectMeta.prototypes)) {
        return false;
    }
    for (let objectMetaType of ["keysSymbol", "entriesGetter", "entriesNonAccessor", "entriesSetter"]) {
        for (let item1ObjectMetaTypeEntry of item1ObjectMeta[objectMetaType]) {
            if (!item2ObjectMeta[objectMetaType].includes(item1ObjectMetaTypeEntry) ||
                !areEqualInternal(item1[item1ObjectMetaTypeEntry], item2[item1ObjectMetaTypeEntry])) {
                return false;
            }
        }
    }
    for (let objectMetaType of ["entriesConfigurable", "entriesEnumerable", "entriesNonConfigurable", "entriesNonEnumerable", "entriesNonWritable", "entriesWritable"]) {
        for (let item1ObjectMetaTypeEntry of item1ObjectMeta[objectMetaType]) {
            if (!item2ObjectMeta[objectMetaType].includes(item1ObjectMetaTypeEntry)) {
                return false;
            }
        }
    }
    return true;
}
/**
 * @access private
 * @function areEqualInternal
 * @param {unknown} item1 Item 1.
 * @param {unknown} [item2] Item 2.
 * @returns {boolean}
 */
function areEqualInternal(item1, item2) {
    if (item1 === item2) {
        return true;
    }
    let item1TypeOf = typeOf(item1);
    let item2TypeOf = typeOf(item2);
    if (item1TypeOf !== item2TypeOf ||
        item1TypeOf === "bigint" ||
        item1TypeOf === "boolean" ||
        item1TypeOf === "nan" ||
        item1TypeOf === "null" ||
        item1TypeOf === "number" ||
        item1TypeOf === "string" ||
        item1TypeOf === "symbol" ||
        item1TypeOf === "undefined") {
        return false;
    }
    if (item1 instanceof Map && item2 instanceof Map) {
        if (item1.size !== item2.size) {
            return false;
        }
        if (areEqualInternal(Array.from(item1.entries()), Array.from(item2.entries()))) {
            return true;
        }
        let item2Keys = Array.from(item2.keys());
        let item2Values = Array.from(item2.values());
        for (let [item1Key, item1Value] of item1.entries()) {
            let matchItem2KeysIndexes = [];
            item2Keys.forEach((item2Key, item2KeysIndex) => {
                if ((typeOf(item1Key) === "nan" && typeOf(item2Key) === "nan") ||
                    areEqualInternal(item1Key, item2Key)) {
                    matchItem2KeysIndexes.push(item2KeysIndex);
                }
            });
            if (matchItem2KeysIndexes.length === 0) {
                return false;
            }
            if (matchItem2KeysIndexes.some((matchItem2KeysIndex) => {
                let matchItem2Value = item2Values[matchItem2KeysIndex];
                return !((typeOf(item1Value) === "nan" && typeOf(matchItem2Value) === "nan") ||
                    areEqualInternal(item1Value, matchItem2Value));
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
        if (areEqualInternal(Array.from(item1.values()), Array.from(item2.values()))) {
            return true;
        }
        for (let item1Value of item1.values()) {
            let matchItem2Values = [];
            for (let item2Value of item2.values()) {
                if ((typeOf(item1Value) === "nan" && typeOf(item2Value) === "nan") ||
                    areEqualInternal(item1Value, item2Value)) {
                    matchItem2Values.push(item2Value);
                }
            }
            if (matchItem2Values.length === 0) {
                return false;
            }
        }
        return true;
    }
    if ((Array.isArray(item1) && Array.isArray(item2)) ||
        (typeof item1 === "object" && typeof item2 === "object")) {
        if (Object.entries(item1).length !== Object.entries(item2).length) {
            return false;
        }
        return areEqualObjectMeta(item1, item2);
    }
    try {
        notDeepStrictEqual(item1, item2);
    }
    catch {
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
    if (items.length === 0) {
        throw new ReferenceError(`Argument \`items\` is not defined!`);
    }
    for (let index = 0; index < items.length - 1; index++) {
        if (!areEqualInternal(items[index], items[index + 1])) {
            return false;
        }
    }
    return true;
}
export { areEqual };
