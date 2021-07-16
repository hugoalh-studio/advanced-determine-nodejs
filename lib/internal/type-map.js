const typeMapRegularExpression = {
	"array": /^(?:(?:arr(?:ay)?)|(?:list))$/giu,
	"big-integer-negative": /^big-?int(?:eger)?-?n(?:(?:egative)|(?:gt))$/giu,
	"big-integer-positive": /^big-?int(?:eger)?-?p(?:(?:ositive)|(?:st))$/giu,
	"big-integer": /^big-?int(?:eger)?$/giu,
	"boolean": /^bool(?:ean)?$/giu,
	"buffer": /^buf(?:fer)?$/giu,
	"data-view": /^data-?view$/giu,
	"date": /^date$/giu,
	"function": /^f(?:unctio)?n$/giu,
	"json": /^json$/giu,
	"map": /^map$/giu,
	"null": /^n(?:i|(?:ul?))l$/giu,
	"number-float": /^(?:num(?:ber)?-?)?fl(?:oa)?t$/giu,
	"number-integer": /^(?:num(?:ber)?-?)?int(?:eger)?$/giu,
	"number-negative-float": /^num(?:ber)?-?n(?:(?:egative)|(?:gt))-?fl(?:oa)?t$/giu,
	"number-negative-integer": /^num(?:ber)?-?n(?:(?:egative)|(?:gt))-?int(?:eger)?$/giu,
	"number-negative-safe-float": /^num(?:ber)?-?n(?:(?:egative)|(?:gt))-?s(?:afe)?-?fl(?:oa)?t$/giu,
	"number-negative-safe-integer": /^num(?:ber)?-?n(?:(?:egative)|(?:gt))-?s(?:afe)?-?int(?:eger)?$/giu,
	"number-negative": /^num(?:ber)?-?n(?:(?:egative)|(?:gt))$/giu,
	"number-positive-float": /^num(?:ber)?-?p(?:(?:ositive)|(?:st))-?fl(?:oa)?t$/giu,
	"number-positive-integer": /^num(?:ber)?-?p(?:(?:ositive)|(?:st))-?int(?:eger)?$/giu,
	"number-positive-safe-float": /^num(?:ber)?-?p(?:(?:ositive)|(?:st))-?s(?:afe)?-?fl(?:oa)?t$/giu,
	"number-positive-safe-integer": /^num(?:ber)?-?p(?:(?:ositive)|(?:st))-?s(?:afe)?-?int(?:eger)?$/giu,
	"number-positive": /^num(?:ber)?-?p(?:(?:ositive)|(?:st))$/giu,
	"number-safe-float": /^num(?:ber)?-?s(?:afe)?-?fl(?:oa)?t$/giu,
	"number-safe-integer": /^num(?:ber)?-?s(?:afe)?-?int(?:eger)?$/giu,
	"number": /^num(?:ber)?$/giu,
	"object-pair": /^(?:(?:dict(?:ionary)?)|(?:obj(?:ect)?-?p(?:(?:air)|(?:lain))))$/giu,
	"object": /^obj(?:ect)?$/giu,
	"regular-expression": /^reg(?:(?:ex(?:p|r)?)|(?:ular-?expression))$/giu,
	"set": /^set$/giu,
	"string-ascii": /^str(?:ing)?-?ascii$/giu,
	"string-lower-case": /^str(?:ing)?-?l(?:ower)?(?:-?c(?:ase)?)?$/giu,
	"string-multiple-line": /^str(?:ing)?-?m(?:ulti(?:ple)?)?-?l(?:ine)?$/giu,
	"string-single-line": /^str(?:ing)?-?s(?:ingle)?-?l(?:ine)?$/giu,
	"string-upper-case": /^str(?:ing)?-?u(?:pper)?(?:-?c(?:ase)?)?$/giu,
	"string": /^str(?:ing)?$/giu,
	"stringify-json": /^str(?:ingif(?:(?:ied)|y))?-?json$/giu,
	"symbol": /^symbol$/giu,
	"undefined": /^u(?:(?:df)|(?:ndefined))$/giu,
	"weak-map": /^(?:(?:map-?weak)|(?:weak-?map))$/giu,
	"weak-set": /^(?:(?:set-?weak)|(?:weak-?set))$/giu
};
const typeMapKey = Object.values(typeMapRegularExpression),
	typeMapValue = Object.keys(typeMapRegularExpression);
/**
 * @private
 * @function typeMap
 * @param {string} input
 * @returns {(string|undefined)}
 */
function typeMap(input) {
	for (let index = 0; index < typeMapKey.length; index++) {
		if (input.search(typeMapKey[index]) === 0) {
			return typeMapValue[index];
		};
	};
	return undefined;
};
module.exports = typeMap;
