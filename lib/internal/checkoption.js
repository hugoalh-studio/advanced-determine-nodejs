/*==================
Advanced Determine - Internal - Check Option
	Language:
		NodeJS/14.15.0
==================*/
const isObjectPair = require("../isobjectpair.js");
function checkOption(option) {
	if (isObjectPair(option) === false) {
		throw new TypeError(`Argument "option" must be type of object pair! (Advanced Determine - Internal - Check Option)`);
	};
};
module.exports = checkOption;
