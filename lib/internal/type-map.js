/**
 * @private
 * @function typeMap
 * @param {string} input
 * @returns {(string|undefined)}
 */
function typeMap(input) {
	if (input.search(/^(?:arr(?:ay)?|list)$/giu) === 0) {
		return "array";
	};
	if (input.search(/^big-?int(?:eger)?$/giu) === 0) {
		return "big-integer";
	};
	if (input.search(/^big-?int(?:eger)?-?n(?:egative|gt)$/giu) === 0) {
		return "big-integer-negative";
	};
	if (input.search(/^big-?int(?:eger)?-?p(?:ositive|st)$/giu) === 0) {
		return "big-integer-positive";
	};
	if (input.search(/^bool(?:ean)?$/giu) === 0) {
		return "boolean";
	};
	if (input.search(/^buf(?:fer)?$/giu) === 0) {
		return "buffer";
	};
	if (input.search(/^data-?view$/giu) === 0) {
		return "data-view";
	};
	if (input.search(/^date$/giu) === 0) {
		return "date";
	};
	if (input.search(/^f(?:unctio)?n$/giu) === 0) {
		return "function";
	};
	if (input.search(/^json$/giu) === 0) {
		return "json";
	};
	if (input.search(/^map$/giu) === 0) {
		return "map";
	};
	if (input.search(/^n(?:i|ul?)l$/giu) === 0) {
		return "null";
	};
	if (input.search(/^num(?:ber)?$/giu) === 0) {
		return "number";
	};
	if (input.search(/^(?:num(?:ber)?-?)?fl(?:oa)?t$/giu) === 0) {
		return "number-float";
	};
	if (input.search(/^(?:num(?:ber)?-?)?int(?:eger)?$/giu) === 0) {
		return "number-integer";
	};
	if (input.search(/^num(?:ber)?-?n(?:egative|gt)$/giu) === 0) {
		return "number-negative";
	};
	if (input.search(/^num(?:ber)?-?n(?:egative|gt)-?fl(?:oa)?t$/giu) === 0) {
		return "number-negative-float";
	};
	if (input.search(/^num(?:ber)?-?n(?:egative|gt)-?int(?:eger)?$/giu) === 0) {
		return "number-negative-integer";
	};
	if (input.search(/^num(?:ber)?-?n(?:egative|gt)-?s(?:afe)?-?fl(?:oa)?t$/giu) === 0) {
		return "number-negative-safe-float";
	};
	if (input.search(/^num(?:ber)?-?n(?:egative|gt)-?s(?:afe)?-?int(?:eger)?$/giu) === 0) {
		return "number-negative-safe-integer";
	};
	if (input.search(/^num(?:ber)?-?p(?:ositive|st)$/giu) === 0) {
		return "number-positive";
	};
	if (input.search(/^num(?:ber)?-?p(?:ositive|st)-?fl(?:oa)?t$/giu) === 0) {
		return "number-positive-float";
	};
	if (input.search(/^num(?:ber)?-?p(?:ositive|st)-?int(?:eger)?$/giu) === 0) {
		return "number-positive-integer";
	};
	if (input.search(/^num(?:ber)?-?p(?:ositive|st)-?s(?:afe)?-?fl(?:oa)?t$/giu) === 0) {
		return "number-positive-safe-float";
	};
	if (input.search(/^num(?:ber)?-?p(?:ositive|st)-?s(?:afe)?-?int(?:eger)?$/giu) === 0) {
		return "number-positive-safe-integer";
	};
	if (input.search(/^num(?:ber)?-?s(?:afe)?-?fl(?:oa)?t$/giu) === 0) {
		return "number-safe-float";
	};
	if (input.search(/^num(?:ber)?-?s(?:afe)?-?int(?:eger)?$/giu) === 0) {
		return "number-safe-integer";
	};
	if (input.search(/^obj(?:ect)?$/giu) === 0) {
		return "object";
	};
	if (input.search(/^(?:dict(?:ionary)?|obj(?:ect)?-?p(?:air|lain))$/giu) === 0) {
		return "object-pair";
	};
	if (input.search(/^reg(?:ex(?:p|r)?|ular-?expression)$/giu) === 0) {
		return "regular-expression";
	};
	if (input.search(/^set$/giu) === 0) {
		return "set";
	};
	if (input.search(/^str(?:ing)?$/giu) === 0) {
		return "string";
	};
	if (input.search(/^str(?:ing)?-?ascii$/giu) === 0) {
		return "string-ascii";
	};
	if (input.search(/^str(?:ingif(?:ied|y))?-?json$/giu) === 0) {
		return "stringify-json";
	};
	if (input.search(/^str(?:ing)?-?l(?:ower)?(?:-?c(?:ase)?)?$/giu) === 0) {
		return "string-lower-case";
	};
	if (input.search(/^str(?:ing)?-?m(?:ulti(?:ple)?)?-?l(?:ine)?$/giu) === 0) {
		return "string-multiple-line";
	};
	if (input.search(/^str(?:ing)?-?s(?:ingle)?-?l(?:ine)?$/giu) === 0) {
		return "string-single-line";
	};
	if (input.search(/^str(?:ing)?-?u(?:pper)?(?:-?c(?:ase)?)?$/giu) === 0) {
		return "string-upper-case";
	};
	if (input.search(/^symbol$/giu) === 0) {
		return "symbol";
	};
	if (input.search(/^u(?:df|ndefined)$/giu) === 0) {
		return "undefined";
	};
	if (input.search(/^(?:map-weak|weak-?map)$/giu) === 0) {
		return "weak-map";
	};
	if (input.search(/^(?:set-weak|weak-?set)$/giu) === 0) {
		return "weak-set";
	};
	return undefined;
};
module.exports = typeMap;
