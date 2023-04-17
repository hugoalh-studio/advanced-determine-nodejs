const newLineRegExp = /[\n\r]/u;
/**
 * @function isStringASCII
 * @description Determine the string is ASCII.
 * @param {string} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isStringASCII(item: string): boolean {
	for (let character of item) {
		if (character.charCodeAt(0) >= 128) {
			return false;
		}
	}
	return true;
}
/**
 * @function isStringLowerCase
 * @description Determine the string is lowercase.
 * @param {string} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isStringLowerCase(item: string): boolean {
	return (item === item.toLowerCase());
}
/**
 * @function isStringMultipleLine
 * @description Determine the string is multiple line.
 * @param {string} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isStringMultipleLine(item: string): boolean {
	return newLineRegExp.test(item);
}
/**
 * @function isStringSingleLine
 * @description Determine the string is single line.
 * @param {string} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isStringSingleLine(item: string): boolean {
	return !newLineRegExp.test(item);
}
/**
 * @function isStringUpperCase
 * @description Determine the string is uppercase.
 * @param {string} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isStringUpperCase(item: string): boolean {
	return (item === item.toUpperCase());
}
export {
	isStringASCII,
	isStringLowerCase,
	isStringMultipleLine,
	isStringSingleLine,
	isStringUpperCase
};
