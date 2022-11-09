/**
 * @access private
 * @function isArrayInternal
 * @description Determine item is type of array or not.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {number} [param1.maximumLength=Infinity] Maximum length of the array.
 * @param {number} [param1.minimumLength=0] Minimum length of the array.
 * @param {boolean} [param1.strict=false] Whether to determine no custom defined properties in the array.
 * @param {boolean} [param1.unique=false] Whether to determine all of the elements in the array are unique.
 * @returns {item is Array} Determine result.
 */
function isArrayInternal(item, {
	maximumLength = Infinity,
	minimumLength = 0,
	strict,
	unique = false
} = {}) {
	if (
		!Array.isArray(item) ||
		!(item instanceof Array) ||
		item.constructor.name !== "Array" ||
		Object.prototype.toString.call(item) !== "[object Array]"
	) {
		return false;
	}
	if (strict) {
		let itemPrototype = Object.getPrototypeOf(item);
		if (
			(itemPrototype !== null && itemPrototype !== Array.prototype) ||
			Object.getOwnPropertySymbols(item).length > 0
		) {
			return false;
		}
		let itemDescriptors = Object.getOwnPropertyDescriptors(item);
		for (let itemPropertyKey in itemDescriptors) {
			if (Object.prototype.hasOwnProperty.call(itemDescriptors, itemPropertyKey)) {
				if (itemPropertyKey.search(/^(?:0|[1-9]\d*)$/u) === 0 && Number(itemPropertyKey) < 4294967296) {
					let itemPropertyDescriptor = itemDescriptors[itemPropertyKey];
					if (
						!itemPropertyDescriptor.configurable ||
						!itemPropertyDescriptor.enumerable ||
						typeof itemPropertyDescriptor.get !== "undefined" ||
						typeof itemPropertyDescriptor.set !== "undefined" ||
						!itemPropertyDescriptor.writable
					) {
						return false;
					}
				} else if (itemPropertyKey === "length") {
					let itemPropertyDescriptor = itemDescriptors[itemPropertyKey];
					if (
						itemPropertyDescriptor.configurable ||
						itemPropertyDescriptor.enumerable ||
						typeof itemPropertyDescriptor.get !== "undefined" ||
						typeof itemPropertyDescriptor.set !== "undefined" ||
						!itemPropertyDescriptor.writable
					) {
						return false;
					}
				} else {
					return false;
				}
			}
		}
	}
	if (
		Object.entries(item).length !== item.length ||
		maximumLength < item.length ||
		item.length < minimumLength ||
		(unique && new Set(item).size !== item.length)
	) {
		return false;
	}
	return true;
}
export default isArrayInternal;
