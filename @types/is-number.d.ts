export = isNumber;
/**
 * @function isNumber
 * @alias isNum
 * @description Determine item is type of number or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {boolean} [option.finite] A finite number.
 * @param {boolean} [option.float] A float number.
 * @param {boolean} [option.infinite] An infinite number.
 * @param {boolean} [option.integer] An integer number.
 * @param {boolean} [option.negative] A negative number.
 * @param {boolean} [option.positive] A positive number.
 * @param {boolean} [option.prime] A prime number.
 * @param {boolean} [option.safe] An IEEE-754 number.
 * @param {boolean} [option.unsafe] Not an IEEE-754 number.
 * @returns {boolean} Determine result.
 */
declare function isNumber(item: any, option?: {
    finite?: boolean;
    float?: boolean;
    infinite?: boolean;
    integer?: boolean;
    negative?: boolean;
    positive?: boolean;
    prime?: boolean;
    safe?: boolean;
    unsafe?: boolean;
}): boolean;
//# sourceMappingURL=is-number.d.ts.map