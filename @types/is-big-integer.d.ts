export = isBigInteger;
/**
 * @function isBigInteger
 * @alias isBigInt
 * @description Determine item is type of big integer number or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {boolean} [option.negative] A negative big integer number.
 * @param {boolean} [option.positive] A positive big integer number.
 * @param {boolean} [option.prime] A prime number.
 * @param {boolean} [option.safe] An IEEE-754 big integer number.
 * @param {boolean} [option.unsafe] Not an IEEE-754 big integer number.
 * @returns {boolean} Determine result.
 */
declare function isBigInteger(item: any, option?: {
    negative?: boolean;
    positive?: boolean;
    prime?: boolean;
    safe?: boolean;
    unsafe?: boolean;
}): boolean;
