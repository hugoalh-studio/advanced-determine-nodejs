/*==================
[NodeJS] Advanced Determine - Is Buffer
	Contributor:
		hugoalh
	Language:
		NodeJS 14
==================*/
function isBuffer(item) {
	return (
		item != null && item.constructor != null && typeof item.constructor.isBuffer == "function" && item.constructor.isBuffer(item)
	);
};
module.exports = isBuffer;
