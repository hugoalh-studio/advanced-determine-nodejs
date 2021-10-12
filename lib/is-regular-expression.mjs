import isPlainObjectInno from "./internal/is-plain-object-inno.mjs";
import undefinish from "@hugoalh/undefinish";
/**
 * @function isRegularExpression
 * @alias isRegEx
 * @alias isRegExp
 * @description Determine item is type of regular expression or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {boolean} [option.caseInsensitive] A case insensitive regular expression.
 * @param {boolean} [option.dotAll] A dot-all regular expression.
 * @param {boolean} [option.exactly] An exactly regular expression.
 * @param {boolean} [option.global] A global regular expression.
 * @param {boolean} [option.multipleLine] A multiple line regular expression.
 * @param {boolean} [option.sticky] A sticky regular expression.
 * @param {boolean} [option.unicode] An unicode regular expression.
 * @returns {boolean} Determine result.
 */
function isRegularExpression(item, option = {}) {
	if (isPlainObjectInno(option) === false) {
		throw new TypeError(`Argument \`option\` must be type of plain object!`);
	};
	option.caseInsensitive = undefinish(option.caseInsensitive, option.ignoreCase);
	if (typeof option.caseInsensitive !== "boolean" && typeof option.caseInsensitive !== "undefined") {
		throw new TypeError(`Argument \`option.caseInsensitive\` must be type of boolean or undefined!`);
	};
	if (typeof option.dotAll !== "boolean" && typeof option.dotAll !== "undefined") {
		throw new TypeError(`Argument \`option.dotAll\` must be type of boolean or undefined!`);
	};
	option.exactly = undefinish(option.exactly, option.exact);
	if (typeof option.exactly !== "boolean" && typeof option.exactly !== "undefined") {
		throw new TypeError(`Argument \`option.exactly\` must be type of boolean or undefined!`);
	};
	if (typeof option.global !== "boolean" && typeof option.global !== "undefined") {
		throw new TypeError(`Argument \`option.global\` must be type of boolean or undefined!`);
	};
	option.multipleLine = undefinish(option.multipleLine, option.multiLine);
	if (typeof option.multipleLine !== "boolean" && typeof option.multipleLine !== "undefined") {
		throw new TypeError(`Argument \`option.multipleLine\` must be type of boolean or undefined!`);
	};
	if (typeof option.sticky !== "boolean" && typeof option.sticky !== "undefined") {
		throw new TypeError(`Argument \`option.sticky\` must be type of boolean or undefined!`);
	};
	if (typeof option.unicode !== "boolean" && typeof option.unicode !== "undefined") {
		throw new TypeError(`Argument \`option.unicode\` must be type of boolean or undefined!`);
	};
	if ((item instanceof RegExp) !== true) {
		return false;
	};
	let itemSource = item.source;
	if (
		(option.caseInsensitive === false && item.ignoreCase === true) ||
		(option.caseInsensitive === true && item.ignoreCase === false) ||
		(option.dotAll === false && item.dotAll === true) ||
		(option.dotAll === true && item.dotAll === false) ||
		(option.exactly === false && itemSource.startsWith("^") === true && itemSource.endsWith("$") === true) ||
		(option.exactly === true && (
			itemSource.startsWith("^") !== true ||
			itemSource.endsWith("$") !== true
		)) ||
		(option.global === false && item.global === true) ||
		(option.global === true && item.global === false) ||
		(option.multipleLine === false && item.multiline === true) ||
		(option.multipleLine === true && item.multiline === false) ||
		(option.sticky === false && item.sticky === true) ||
		(option.sticky === true && item.sticky === false) ||
		(option.unicode === false && item.unicode === true) ||
		(option.unicode === true && item.unicode === false)
	) {
		return false;
	};
	return true;
};
export default isRegularExpression;
