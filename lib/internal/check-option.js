const isObjectPair = require("../is-object-pair.js");
/**
 * @private
 * @function checkOption
 * @param {*} option
 * @returns {void}
 */
function checkOption(option) {
	if (isObjectPair(option) === false) {
		throw new TypeError(`Argument "option" must be type of object pair!`);
	};
};
module.exports = checkOption;
