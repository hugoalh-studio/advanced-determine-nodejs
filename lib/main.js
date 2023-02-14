import areEqual from "./are-equal.js";
import ArrayItemFilter from "./item-filter/array.js";
import BigIntegerItemFilter from "./item-filter/big-integer.js";
import FunctionItemFilter from "./item-filter/function.js";
import GeneratorItemFilter from "./item-filter/generator.js";
import isArray from "./is/array.js";
import isBigInteger from "./is/big-integer.js";
import isFunction from "./is/function.js";
import isGenerator from "./is/generator.js";
import isJSON from "./is/json.js";
import isMap from "./is/map.js";
import isNumber from "./is/number.js";
import isObject from "./is/object.js";
import isPlainObject from "./is/plain-object.js";
import isRegularExpression from "./is/regular-expression.js";
import isSet from "./is/set.js";
import isString from "./is/string.js";
import isStringifyJSON from "./is/stringify-json.js";
import JSONItemFilter from "./item-filter/json.js";
import MapItemFilter from "./item-filter/map.js";
import NumberItemFilter from "./item-filter/number.js";
import ObjectItemFilter from "./item-filter/object.js";
import PlainObjectItemFilter from "./item-filter/plain-object.js";
import RegularExpressionItemFilter from "./item-filter/regular-expression.js";
import SetItemFilter from "./item-filter/set.js";
import StringifyJSONItemFilter from "./item-filter/stringify-json.js";
import StringItemFilter from "./item-filter/string.js";
import typeOf from "./type-of.js";
export {
	areEqual,
	ArrayItemFilter,
	BigIntegerItemFilter as BigIntItemFilter,
	BigIntegerItemFilter,
	FunctionItemFilter,
	GeneratorItemFilter,
	isArray,
	isBigInteger as isBigInt,
	isBigInteger,
	isFunction,
	isGenerator,
	isJSON,
	isMap,
	isNumber,
	isObject,
	isPlainObject as isObjectPlain,
	isPlainObject,
	isRegularExpression as isRegEx,
	isRegularExpression as isRegExp,
	isRegularExpression,
	isSet,
	isString,
	isStringifyJSON as isJSONStringified,
	isStringifyJSON as isJSONStringify,
	isStringifyJSON as isStringifiedJSON,
	isStringifyJSON,
	JSONItemFilter,
	MapItemFilter,
	NumberItemFilter,
	ObjectItemFilter,
	PlainObjectItemFilter as ObjectPlainItemFilter,
	PlainObjectItemFilter,
	RegularExpressionItemFilter as RegExItemFilter,
	RegularExpressionItemFilter as RegExpItemFilter,
	RegularExpressionItemFilter,
	SetItemFilter,
	StringifyJSONItemFilter as JSONStringifiedItemFilter,
	StringifyJSONItemFilter as JSONStringifyItemFilter,
	StringifyJSONItemFilter as StringifiedJSONItemFilter,
	StringifyJSONItemFilter,
	StringItemFilter,
	typeOf
};
export default {
	areEqual,
	ArrayItemFilter,
	BigIntegerItemFilter,
	BigIntItemFilter: BigIntegerItemFilter,
	FunctionItemFilter,
	GeneratorItemFilter,
	isArray,
	isBigInt: isBigInteger,
	isBigInteger,
	isFunction,
	isGenerator,
	isJSON,
	isJSONStringified: isStringifyJSON,
	isJSONStringify: isStringifyJSON,
	isMap,
	isNumber,
	isObject,
	isObjectPlain: isPlainObject,
	isPlainObject,
	isRegEx: isRegularExpression,
	isRegExp: isRegularExpression,
	isRegularExpression,
	isSet,
	isString,
	isStringifiedJSON: isStringifyJSON,
	isStringifyJSON,
	JSONItemFilter,
	JSONStringifiedItemFilter: StringifyJSONItemFilter,
	JSONStringifyItemFilter: StringifyJSONItemFilter,
	MapItemFilter,
	NumberItemFilter,
	ObjectItemFilter,
	ObjectPlainItemFilter: PlainObjectItemFilter,
	PlainObjectItemFilter,
	RegExItemFilter: RegularExpressionItemFilter,
	RegExpItemFilter: RegularExpressionItemFilter,
	RegularExpressionItemFilter,
	SetItemFilter,
	StringifiedJSONItemFilter: StringifyJSONItemFilter,
	StringifyJSONItemFilter,
	StringItemFilter,
	typeOf
};
