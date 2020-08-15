/*==================
[NodeJS] Advanced Determine - Type Of
	Language:
		NodeJS 14
==================*/
const internalService = require("./internalservice.js");
const isArray = require("./isarray.js");
const isJSON = require("./isjson.js");
const isNull = require("./isnull.js");
/**
 * @function typeOf
 * @description Determine item type automatically.
 * @param {*} item Item that need to determine.
 * @param {object} [option] Option.
 * @param {boolean} [option.allowExtend=false] Allow to extend determine type of null.
 * @param {boolean} [option.allowStringify=false] Allow stringify type.
 * @param {boolean} [option.simplifyResult=false] Simplify result.
 * @param {boolean} [option.useShortForm=false] Use short form.
 * @returns {boolean} Determine result.
 */
function typeOf(item, option) {
	let runtime = {
		simplifyResult: false,
		useShortForm: false
	};
	if (isJSON(option) == true) {
		if (option.simplifyResult) {
			if (typeof option.simplifyResult != "boolean") {
				return internalService.typeError(`Invalid type of "option.simplifyResult"! Require type of boolean.`);
			};
			runtime.simplifyResult = option.simplifyResult;
		};
		if (option.useShortForm) {
			if (typeof option.useShortForm != "boolean") {
				return internalService.typeError(`Invalid type of "option.useShortForm"! Require type of boolean.`);
			};
			runtime.useShortForm = option.useShortForm;
		};
	};
	switch (typeof item) {
		case "bigint":
			if (runtime.useShortForm == true) {
				return "bigint";
			};
			return "bigInteger";
			break;
		case "boolean":
			return "boolean";
			break;
		case "function":
			if (runtime.useShortForm == true) {
				return "fn";
			};
			return "function";
		case "number":
			if (Number.isNaN(item) == true) {
				if (runtime.useShortForm == true) {
					return "NaN";
				};
				return "notANumber";
			};
			if (runtime.simplifyResult == false) {

			};
			if (runtime.useShortForm == true) {
				return "num";
			};
			return "number";
			break;
		case "object":
			switch (isArray(item)) {
				case true:
					if (runtime.useShortForm == true) {
						return "arr";
					};
					return "array";
					break;
				case null:
					if (runtime.simplifyResult == true) {
						if (runtime.useShortForm == true) {
							return "arr";
						};
						return "array";
					};
					if (runtime.useShortForm == true) {
						return "arr.nul";
					};
					return "array.null";
					break;
				default:
					break;
			};
			switch (isJSON(item)) {
				case true:
					return "json";
					break;
				case null:
					if (runtime.simplifyResult == true) {
						return "json";
					};
					if (runtime.useShortForm == true) {
						return "json.nul";
					};
					return "json.null";
					break;
				default:
					break;
			};
			if (runtime.useShortForm == true) {
				return "obj";
			};
			return "object";
			break;
		case "string":
			
			break;
		case "symbol":
			return "symbol";
			break;
		case "undefined":
			return "undefined";
			break;
		default:
			return undefined;
			break;
	};
};
module.exports = typeOf;
