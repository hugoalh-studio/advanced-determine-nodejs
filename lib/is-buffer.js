/**
 * @function isBuffer
 * @alias isBuf
 * @description Determine item is type of buffer or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isBuffer(item) {
	return Buffer.isBuffer(item);
};
module.exports = isBuffer;
