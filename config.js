/*==================
[NodeJS] Advanced Determine - Config
	Language:
		NodeJS 14
==================*/
/**
 * @constant {string}
 */
const version = "2.0.0";
/**
 * @type {boolean}
 */
let ignoreErrorValue = false;
/**
 * @function ignoreError
 * @description Globally ignore errors to prevent script stop executing.
 * @param {(boolean|undefined)} [mode] Enable or disable this feature; Query current value.
 * @returns {(boolean|undefined)}
 */
function ignoreError(mode) {
	if (typeof mode == "boolean") {
		ignoreErrorValue = mode;
	} else {
		return ignoreErrorValue;
	};
};
module.exports.version = version;
module.exports.ignoreError = ignoreError;
