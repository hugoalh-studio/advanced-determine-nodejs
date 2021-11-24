import $isPlainObject from "./is-plain-object.mjs";
/**
 * @private
 * @function isPlainObjectInno
 * @param {any} item
 * @returns {boolean}
 */
function isPlainObjectInno(item) {
	return $isPlainObject(
		item,
		{
			configurable: true,
			enumerable: true,
			get: false,
			set: false,
			symbol: false,
			writable: true
		}
	);
};
export default isPlainObjectInno;
