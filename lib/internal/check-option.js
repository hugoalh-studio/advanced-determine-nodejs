const isObjectPair = require("../is-object-pair.js");
function checkOption(option) {
	if (isObjectPair(option) === false) {
		throw new TypeError(`Argument "option" must be type of object pair!`);
	};
};
module.exports = checkOption;
