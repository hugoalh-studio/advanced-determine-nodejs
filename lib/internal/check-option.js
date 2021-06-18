const isObjectPairInternal = require("./is-object-pair.js");
/**
 * @private
 * @function checkOption
 * @param {*} option
 * @returns {void}
 */
function checkOption(option) {
	if (isObjectPairInternal(option) === false) {
		throw new TypeError(`Argument "option" must be type of object pair!`);
	};
};
module.exports = checkOption;
