import { deepStrictEqual } from "node:assert";
/**
 * @function areEqual
 * @description Determine items are equal or not.
 * @param {unknown} a
 * @param {unknown} [b]
 * @returns {boolean} Determine result.
 */
function areEqual(a: unknown, b?: unknown): boolean {
	try {
		deepStrictEqual(a, b);
		return true;
	} catch {
		return false;
	}
}
export {
	areEqual
};
