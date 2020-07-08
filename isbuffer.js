/*==================
[NodeJS] Advanced Determine - Is Buffer
	Language:
		NodeJS 14
==================*/
/**
 * @function isBuffer
 * @alias isBuf
 * @param {*} item
 * @returns {boolean}
 */
function isBuffer(item) {
	return (
		item !== null && item !== undefined && item.constructor !== null && item.constructor !== undefined && typeof item.constructor.isBuffer == "function" && item.constructor.isBuffer(item)
	);
};
module.exports = isBuffer;
