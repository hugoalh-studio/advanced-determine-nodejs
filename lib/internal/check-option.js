const isObjectPairStrictInternal = require("./is-object-pair-strict.js");
/**
 * @private
 * @function checkOption
 * @param {*} option
 * @returns {void}
 */
function checkOption(option) {
	if (isObjectPairStrictInternal(option) === false) {
		throw new TypeError(`Argument \`option\` must be type of object pair!`);
	};
};
module.exports = checkOption;
