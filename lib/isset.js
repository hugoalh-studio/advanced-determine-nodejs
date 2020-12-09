/*==================
[NodeJS] Advanced Determine - Is Set
	Language:
		NodeJS/14.15.0
==================*/
/**
 * @function isSet
 * @description Determine item is instance of set or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isSet(item) {
	return (item instanceof Set);
};
module.exports = isSet;
