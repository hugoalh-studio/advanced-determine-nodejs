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
var _MapItemFilter_sizeMaximum, _MapItemFilter_sizeMinimum;
/**
 * @class MapItemFilter
 * @description Determine item with the filter of type of map.
 */
class MapItemFilter {
    /**
     * @constructor
     * @description Initialize the filter of type of map to determine item.
     * @param {MapItemFilterOptions} [options={}] Options.
     */
    constructor(options = {}) {
        _MapItemFilter_sizeMaximum.set(this, void 0);
        _MapItemFilter_sizeMinimum.set(this, void 0);
        let { allowEmpty = false, size, sizeMaximum, sizeMinimum, ...aliases } = options;
        sizeMaximum ?? (sizeMaximum = aliases.sizeMax ?? aliases.maximumSize ?? aliases.maxSize ?? Infinity);
        sizeMinimum ?? (sizeMinimum = aliases.sizeMin ?? aliases.minimumSize ?? aliases.minSize ?? 1);
        if (typeof allowEmpty !== "boolean") {
            throw new TypeError(`Filter argument \`allowEmpty\` must be type of boolean!`);
        }
        if (typeof size === "number" && !Number.isNaN(size)) {
            if (!(Number.isSafeInteger(size) && size >= 0)) {
                throw new RangeError(`Filter argument \`size\` must be a number which is integer, positive, and safe!`);
            }
        }
        else if (typeof size !== "undefined") {
            throw new TypeError(`Filter argument \`size\` must be type of number or undefined!`);
        }
        if (!(typeof sizeMaximum === "number" && !Number.isNaN(sizeMaximum))) {
            throw new TypeError(`Filter argument \`sizeMaximum\` must be type of number!`);
        }
        if (sizeMaximum !== Infinity && !(Number.isSafeInteger(sizeMaximum) && sizeMaximum >= 0)) {
            throw new RangeError(`Filter argument \`sizeMaximum\` must be \`Infinity\`, or a number which is integer, positive, and safe!`);
        }
        if (!(typeof sizeMinimum === "number" && !Number.isNaN(sizeMinimum))) {
            throw new TypeError(`Filter argument \`sizeMinimum\` must be type of number!`);
        }
        if (!(Number.isSafeInteger(sizeMinimum) && sizeMinimum >= 0 && sizeMinimum <= sizeMaximum)) {
            throw new RangeError(`Filter argument \`sizeMinimum\` must be a number which is integer, positive, safe, and <= ${sizeMaximum}!`);
        }
        if (typeof size === "number") {
            __classPrivateFieldSet(this, _MapItemFilter_sizeMaximum, size, "f");
            __classPrivateFieldSet(this, _MapItemFilter_sizeMinimum, size, "f");
        }
        else {
            __classPrivateFieldSet(this, _MapItemFilter_sizeMaximum, sizeMaximum, "f");
            __classPrivateFieldSet(this, _MapItemFilter_sizeMinimum, allowEmpty ? 0 : sizeMinimum, "f");
        }
    }
    /**
     * @method test
     * @description Determine item with the configured filter of type of map.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item) {
        if (!(item instanceof Map) ||
            __classPrivateFieldGet(this, _MapItemFilter_sizeMaximum, "f") < item.size ||
            item.size < __classPrivateFieldGet(this, _MapItemFilter_sizeMinimum, "f")) {
            return false;
        }
        return true;
    }
    /**
     * @static test
     * @description Determine item with the filter of type of map.
     * @param {unknown} item Item that need to determine.
     * @param {MapItemFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item, options = {}) {
        return new this(options).test(item);
    }
}
_MapItemFilter_sizeMaximum = new WeakMap(), _MapItemFilter_sizeMinimum = new WeakMap();
/**
 * @function isMap
 * @description Determine item with the filter of type of map.
 * @param {unknown} item Item that need to determine.
 * @param {MapItemFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
function isMap(item, options = {}) {
    return new MapItemFilter(options).test(item);
}
export { isMap, MapItemFilter };
