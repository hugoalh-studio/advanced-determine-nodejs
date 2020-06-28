/*==================
[NodeJS] Advanced Determine - Is Buffer
	Language:
		NodeJS 14
==================*/
function isBuffer(item) {
	return (
		item != null && item.constructor != null && typeof item.constructor.isBuffer == "function" && item.constructor.isBuffer(item)
	);
};
module.exports = isBuffer;
