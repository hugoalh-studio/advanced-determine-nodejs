import integerTypesRange from "../internal/integer-types-range.js";
import isPrimeNumber from "../internal/is-prime-number.js";
import undefinish from "@hugoalh/undefinish";
const maximumSafeInteger = BigInt(Number.MAX_SAFE_INTEGER);
const minimumSafeInteger = BigInt(Number.MIN_SAFE_INTEGER);
/**
 * @class BigIntegerItemFilter
 * @alias BigIntItemFilter
 * @description Determine item with the filter of type of big integer.
 */
class BigIntegerItemFilter {
	#even;
	#exclusiveMaximum;
	#exclusiveMinimum;
	#maximum;
	#minimum;
	#negative;
	#odd;
	#positive;
	#prime;
	#safe;
	#unsafe;
	/**
	 * @constructor
	 * @description Initialize the filter of type of big integer to determine item.
	 * @param {object} [param0={}] Options.
	 * @param {boolean} [param0.even] Whether an even big integer.
	 * @param {boolean} [param0.exclusiveMaximum=false] Whether to exclusive maximum of the big integer.
	 * @param {boolean} [param0.exclusiveMinimum=false] Whether to exclusive minimum of the big integer.
	 * @param {bigint} [param0.maximum=Infinity] Maximum of the big integer.
	 * @param {bigint} [param0.minimum=-Infinity] Minimum of the big integer.
	 * @param {boolean} [param0.negative] Whether a negative big integer.
	 * @param {boolean} [param0.odd] Whether an odd big integer.
	 * @param {boolean} [param0.positive] Whether a positive big integer.
	 * @param {boolean} [param0.prime] Whether a prime big integer.
	 * @param {boolean} [param0.safe] Whether an IEEE-754 big integer.
	 * @param {string} [param0.type] Type of the big integer.
	 * @param {boolean} [param0.unsafe] Whether not an IEEE-754 big integer.
	 */
	constructor({
		even,
		exclusiveMaximum,
		exclusiveMinimum,
		maximum,
		minimum,
		negative,
		odd,
		positive,
		prime,
		safe,
		type,
		unsafe,
		...aliases
	} = {}) {
		if (typeof even !== "boolean" && typeof even !== "undefined") {
			throw new TypeError(`Argument \`even\` must be type of boolean or undefined.`);
		}
		exclusiveMaximum = undefinish(exclusiveMaximum, aliases.exclusiveMax, false);
		if (typeof exclusiveMaximum !== "boolean") {
			throw new TypeError(`Argument \`exclusiveMaximum\` must be type of boolean.`);
		}
		exclusiveMinimum = undefinish(exclusiveMinimum, aliases.exclusiveMin, false);
		if (typeof exclusiveMinimum !== "boolean") {
			throw new TypeError(`Argument \`exclusiveMinimum\` must be type of boolean.`);
		}
		maximum = undefinish(maximum, aliases.max, Infinity);
		if (maximum !== Infinity && typeof maximum !== "bigint") {
			throw new TypeError(`Argument \`maximum\` must be \`Infinity\` or type of big integer.`);
		}
		minimum = undefinish(minimum, aliases.min, -Infinity);
		if (minimum !== -Infinity && !(typeof minimum === "bigint" && minimum <= maximum)) {
			throw new TypeError(`Argument \`minimum\` must be \`-Infinity\`, or type of big integer and <= ${maximum}.`);
		}
		negative = undefinish(negative, aliases.ngt, aliases.nega);
		if (typeof negative !== "boolean" && typeof negative !== "undefined") {
			throw new TypeError(`Argument \`negative\` must be type of boolean or undefined.`);
		}
		if (typeof odd !== "boolean" && typeof odd !== "undefined") {
			throw new TypeError(`Argument \`odd\` must be type of boolean or undefined.`);
		}
		positive = undefinish(positive, aliases.pst, aliases.posi);
		if (typeof positive !== "boolean" && typeof positive !== "undefined") {
			throw new TypeError(`Argument \`positive\` must be type of boolean or undefined.`);
		}
		if (typeof prime !== "boolean" && typeof prime !== "undefined") {
			throw new TypeError(`Argument \`prime\` must be type of boolean or undefined.`);
		}
		if (typeof safe !== "boolean" && typeof safe !== "undefined") {
			throw new TypeError(`Argument \`safe\` must be type of boolean or undefined.`);
		}
		if (typeof unsafe !== "boolean" && typeof unsafe !== "undefined") {
			throw new TypeError(`Argument \`unsafe\` must be type of boolean or undefined.`);
		}
		if (typeof type === "string") {
			this.#exclusiveMaximum = false;
			this.#exclusiveMinimum = false;
			[this.#minimum, this.#maximum] = integerTypesRange(type);
		} else if (typeof type === "undefined") {
			this.#exclusiveMaximum = exclusiveMaximum;
			this.#exclusiveMinimum = exclusiveMinimum;
			this.#maximum = maximum;
			this.#minimum = minimum;
		} else {
			throw new TypeError(`Argument \`type\` must be type of string or undefined.`);
		}
		this.#even = even;
		this.#negative = negative;
		this.#odd = odd;
		this.#positive = positive;
		this.#prime = prime;
		this.#safe = safe;
		this.#unsafe = unsafe;
	}
	/**
	 * @method test
	 * @description Determine item with the configured filter of type of big integer.
	 * @param {unknown} item Item that need to determine.
	 * @returns {boolean} Determine result.
	 */
	test(item) {
		if (
			typeof item !== "bigint" ||
			(this.#even === false && item % 2n === 0n) ||
			(this.#even === true && item % 2n !== 0n) ||
			(this.#exclusiveMaximum && this.#maximum <= item) ||
			(!this.#exclusiveMaximum && this.#maximum < item) ||
			(this.#exclusiveMinimum && item <= this.#minimum) ||
			(!this.#exclusiveMinimum && item < this.#minimum) ||
			((
				this.#negative === true ||
				this.#positive === false
			) && item >= 0n) ||
			((
				this.#positive === true ||
				this.#negative === false
			) && item < 0n) ||
			(this.#odd === false && item % 2n !== 0n) ||
			(this.#odd === true && item % 2n === 0n) ||
			(this.#prime === false && isPrimeNumber(item)) ||
			(this.#prime === true && !isPrimeNumber(item)) ||
			(
				(
					this.#safe === true ||
					this.#unsafe === false
				) && (
					maximumSafeInteger < item ||
					item < minimumSafeInteger
				)
			) ||
			((
				this.#unsafe === true ||
				this.#safe === false
			) && minimumSafeInteger <= item && item <= maximumSafeInteger)
		) {
			return false;
		}
		return true;
	}
}
export default BigIntegerItemFilter;
