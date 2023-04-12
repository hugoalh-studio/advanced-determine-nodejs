var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PlainObjectItemFilter_entriesConfigurable, _PlainObjectItemFilter_entriesCountMaximum, _PlainObjectItemFilter_entriesCountMinimum, _PlainObjectItemFilter_entriesEnumerable, _PlainObjectItemFilter_entriesGetter, _PlainObjectItemFilter_entriesSetter, _PlainObjectItemFilter_entriesWritable, _PlainObjectItemFilter_keysSymbol;
import { checkNumberIPS, checkNumberIPSWithMaximum } from "./internal/check-item.js";
import { ObjectMeta } from "./internal/object-meta.js";
import { ObjectItemFilter } from "./object.js";
const objectFilter = new ObjectItemFilter();
/**
 * @class PlainObjectItemFilter
 * @description Determine item with the filter of type of plain object.
 */
class PlainObjectItemFilter {
    /**
     * @constructor
     * @description Initialize the filter of type of plain object to determine item.
     * @param {PlainObjectItemFilterOptions} [options={}] Options.
    */
    constructor(options = {}) {
        _PlainObjectItemFilter_entriesConfigurable.set(this, void 0);
        _PlainObjectItemFilter_entriesCountMaximum.set(this, void 0);
        _PlainObjectItemFilter_entriesCountMinimum.set(this, void 0);
        _PlainObjectItemFilter_entriesEnumerable.set(this, void 0);
        _PlainObjectItemFilter_entriesGetter.set(this, void 0);
        _PlainObjectItemFilter_entriesSetter.set(this, void 0);
        _PlainObjectItemFilter_entriesWritable.set(this, void 0);
        _PlainObjectItemFilter_keysSymbol.set(this, void 0);
        let { allowEmpty = false, entriesConfigurable, entriesCount, entriesCountMaximum, entriesCountMinimum, entriesEnumerable, entriesGetter, entriesSetter, entriesWritable, keysSymbol, strict = false, ...aliases } = options;
        entriesConfigurable ?? (entriesConfigurable = aliases.configurableEntries);
        entriesCount ?? (entriesCount = aliases.entries);
        entriesCountMaximum ?? (entriesCountMaximum = aliases.entriesMaximum ?? aliases.entriesCountMax ?? aliases.entriesMax ?? aliases.maximumEntries ?? aliases.maxEntries ?? Infinity);
        entriesCountMinimum ?? (entriesCountMinimum = aliases.entriesMinimum ?? aliases.entriesCountMin ?? aliases.entriesMin ?? aliases.minimumEntries ?? aliases.minEntries ?? 1);
        entriesEnumerable ?? (entriesEnumerable = aliases.enumerableEntries);
        entriesGetter ?? (entriesGetter = aliases.getterEntries);
        entriesSetter ?? (entriesSetter = aliases.setterEntries);
        entriesWritable ?? (entriesWritable = aliases.writableEntries);
        keysSymbol ?? (keysSymbol = aliases.symbolKeys);
        if (typeof allowEmpty !== "boolean") {
            throw new TypeError(`Argument \`options.allowEmpty\` must be type of boolean!`);
        }
        if (typeof entriesConfigurable !== "boolean" && typeof entriesConfigurable !== "undefined") {
            throw new TypeError(`Argument \`options.entriesConfigurable\` must be type of boolean or undefined!`);
        }
        if (!checkNumberIPS(entriesCount) && typeof entriesCount !== "undefined") {
            throw new TypeError(`Argument \`options.entriesCount\` must be type of number (integer, positive, and safe) or undefined!`);
        }
        if (entriesCountMaximum !== Infinity && !checkNumberIPS(entriesCountMaximum)) {
            throw new TypeError(`Argument \`options.entriesCountMaximum\` must be \`Infinity\` or type of number (integer, positive, and safe)!`);
        }
        if (!checkNumberIPSWithMaximum(entriesCountMinimum, entriesCountMaximum)) {
            throw new TypeError(`Argument \`options.entriesCountMinimum\` must be type of number (integer, positive, and safe) and <= ${entriesCountMaximum}!`);
        }
        if (typeof entriesEnumerable !== "boolean" && typeof entriesEnumerable !== "undefined") {
            throw new TypeError(`Argument \`options.entriesEnumerable\` must be type of boolean or undefined!`);
        }
        if (typeof entriesGetter !== "boolean" && typeof entriesGetter !== "undefined") {
            throw new TypeError(`Argument \`options.entriesGetter\` must be type of boolean or undefined!`);
        }
        if (typeof entriesSetter !== "boolean" && typeof entriesSetter !== "undefined") {
            throw new TypeError(`Argument \`options.entriesSetter\` must be type of boolean or undefined!`);
        }
        if (typeof entriesWritable !== "boolean" && typeof entriesWritable !== "undefined") {
            throw new TypeError(`Argument \`options.entriesWritable\` must be type of boolean or undefined!`);
        }
        if (typeof keysSymbol !== "boolean" && typeof keysSymbol !== "undefined") {
            throw new TypeError(`Argument \`options.keysSymbol\` must be type of boolean or undefined!`);
        }
        if (typeof strict !== "boolean") {
            throw new TypeError(`Argument \`options.strict\` must be type of boolean!`);
        }
        if (typeof entriesCount === "number") {
            __classPrivateFieldSet(this, _PlainObjectItemFilter_entriesCountMaximum, entriesCount, "f");
            __classPrivateFieldSet(this, _PlainObjectItemFilter_entriesCountMinimum, entriesCount, "f");
        }
        else {
            __classPrivateFieldSet(this, _PlainObjectItemFilter_entriesCountMaximum, entriesCountMaximum, "f");
            __classPrivateFieldSet(this, _PlainObjectItemFilter_entriesCountMinimum, allowEmpty ? 0 : entriesCountMinimum, "f");
        }
        if (strict) {
            __classPrivateFieldSet(this, _PlainObjectItemFilter_entriesConfigurable, true, "f");
            __classPrivateFieldSet(this, _PlainObjectItemFilter_entriesEnumerable, true, "f");
            __classPrivateFieldSet(this, _PlainObjectItemFilter_entriesGetter, false, "f");
            __classPrivateFieldSet(this, _PlainObjectItemFilter_entriesSetter, false, "f");
            __classPrivateFieldSet(this, _PlainObjectItemFilter_entriesWritable, true, "f");
            __classPrivateFieldSet(this, _PlainObjectItemFilter_keysSymbol, false, "f");
        }
        else {
            __classPrivateFieldSet(this, _PlainObjectItemFilter_entriesConfigurable, entriesConfigurable, "f");
            __classPrivateFieldSet(this, _PlainObjectItemFilter_entriesEnumerable, entriesEnumerable, "f");
            __classPrivateFieldSet(this, _PlainObjectItemFilter_entriesGetter, entriesGetter, "f");
            __classPrivateFieldSet(this, _PlainObjectItemFilter_entriesSetter, entriesSetter, "f");
            __classPrivateFieldSet(this, _PlainObjectItemFilter_entriesWritable, entriesWritable, "f");
            __classPrivateFieldSet(this, _PlainObjectItemFilter_keysSymbol, keysSymbol, "f");
        }
    }
    /**
     * @method test
     * @description Determine item with the configured filter of type of plain object.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item) {
        if (!objectFilter.test(item) ||
            !(item instanceof Object) ||
            item.constructor.name !== "Object" ||
            Object.prototype.toString.call(item) !== "[object Object]") {
            return false;
        }
        let itemObjectMeta = new ObjectMeta(item);
        if (itemObjectMeta.prototypes !== null && itemObjectMeta.prototypes !== Object.prototype) {
            return false;
        }
        let itemShadow = item;
        while (Object.getPrototypeOf(itemShadow) !== null) {
            itemShadow = Object.getPrototypeOf(itemShadow);
        }
        if (itemObjectMeta.prototypes !== itemShadow) {
            return false;
        }
        if (Object.entries(item).length !== itemObjectMeta.entriesEnumerable.length ||
            (__classPrivateFieldGet(this, _PlainObjectItemFilter_keysSymbol, "f") === false && itemObjectMeta.keysSymbol.length > 0) ||
            (__classPrivateFieldGet(this, _PlainObjectItemFilter_keysSymbol, "f") === true && itemObjectMeta.keysSymbol.length === 0) ||
            itemObjectMeta.entriesConfigurable.length + itemObjectMeta.entriesNonConfigurable.length !== itemObjectMeta.entriesEnumerable.length + itemObjectMeta.entriesNonEnumerable.length ||
            itemObjectMeta.entriesEnumerable.length + itemObjectMeta.entriesNonEnumerable.length !== itemObjectMeta.entriesGetter.length + itemObjectMeta.entriesNonAccessor.length + itemObjectMeta.entriesSetter.length ||
            itemObjectMeta.entriesGetter.length + itemObjectMeta.entriesNonAccessor.length + itemObjectMeta.entriesSetter.length !== itemObjectMeta.entriesNonWritable.length + itemObjectMeta.entriesWritable.length ||
            itemObjectMeta.entriesConfigurable.length + itemObjectMeta.entriesNonConfigurable.length !== itemObjectMeta.entriesNonWritable.length + itemObjectMeta.entriesWritable.length ||
            __classPrivateFieldGet(this, _PlainObjectItemFilter_entriesCountMaximum, "f") < itemObjectMeta.entriesGetter.length + itemObjectMeta.entriesNonAccessor.length + itemObjectMeta.entriesSetter.length + itemObjectMeta.keysSymbol.length ||
            itemObjectMeta.entriesGetter.length + itemObjectMeta.entriesNonAccessor.length + itemObjectMeta.entriesSetter.length + itemObjectMeta.keysSymbol.length < __classPrivateFieldGet(this, _PlainObjectItemFilter_entriesCountMinimum, "f") ||
            (__classPrivateFieldGet(this, _PlainObjectItemFilter_entriesConfigurable, "f") === false && itemObjectMeta.entriesConfigurable.length > 0) ||
            (__classPrivateFieldGet(this, _PlainObjectItemFilter_entriesConfigurable, "f") === true && itemObjectMeta.entriesNonConfigurable.length > 0) ||
            (__classPrivateFieldGet(this, _PlainObjectItemFilter_entriesEnumerable, "f") === false && itemObjectMeta.entriesEnumerable.length > 0) ||
            (__classPrivateFieldGet(this, _PlainObjectItemFilter_entriesEnumerable, "f") === true && itemObjectMeta.entriesNonEnumerable.length > 0) ||
            (__classPrivateFieldGet(this, _PlainObjectItemFilter_entriesGetter, "f") === false && itemObjectMeta.entriesGetter.length > 0) ||
            (__classPrivateFieldGet(this, _PlainObjectItemFilter_entriesSetter, "f") === false && itemObjectMeta.entriesSetter.length > 0) ||
            ((__classPrivateFieldGet(this, _PlainObjectItemFilter_entriesGetter, "f") === true ||
                __classPrivateFieldGet(this, _PlainObjectItemFilter_entriesSetter, "f") === true) && itemObjectMeta.entriesNonAccessor.length > 0) ||
            (__classPrivateFieldGet(this, _PlainObjectItemFilter_entriesWritable, "f") === false && itemObjectMeta.entriesWritable.length > 0) ||
            (__classPrivateFieldGet(this, _PlainObjectItemFilter_entriesWritable, "f") === true && itemObjectMeta.entriesNonWritable.length > 0)) {
            return false;
        }
        return true;
    }
    /**
     * @static test
     * @description Determine item with the filter of type of plain object.
     * @param {unknown} item Item that need to determine.
     * @param {PlainObjectItemFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item, options = {}) {
        return new this(options).test(item);
    }
}
_PlainObjectItemFilter_entriesConfigurable = new WeakMap(), _PlainObjectItemFilter_entriesCountMaximum = new WeakMap(), _PlainObjectItemFilter_entriesCountMinimum = new WeakMap(), _PlainObjectItemFilter_entriesEnumerable = new WeakMap(), _PlainObjectItemFilter_entriesGetter = new WeakMap(), _PlainObjectItemFilter_entriesSetter = new WeakMap(), _PlainObjectItemFilter_entriesWritable = new WeakMap(), _PlainObjectItemFilter_keysSymbol = new WeakMap();
/**
 * @function isPlainObject
 * @description Determine item with the filter of type of plain object.
 * @param {unknown} item Item that need to determine.
 * @param {PlainObjectItemFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
function isPlainObject(item, options = {}) {
    return new PlainObjectItemFilter(options).test(item);
}
export { isPlainObject, isPlainObject as isObjectPlain, PlainObjectItemFilter, PlainObjectItemFilter as ObjectPlainItemFilter };
