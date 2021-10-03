/**
 * @private
 * @function undefinish
 * @param {...any} items
 * @returns {any}
 */
function undefinish(...items) {
	for (let item of items) {
		if (typeof item !== "undefined") {
			return item;
		};
	};
	return undefined;
};
module.exports = undefinish;
