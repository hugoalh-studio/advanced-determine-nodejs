import { deepStrictEqual } from "node:assert";
/**
 * @function areEqual
 * @description Whether the items are equal or not.
 * @param {unknown} itemA
 * @param {unknown} [itemB]
 * @returns {boolean} Determine result.
 */
function areEqual(itemA: unknown, itemB?: unknown): boolean {
	try {
		deepStrictEqual(itemA, itemB);
		return true;
	} catch {
		return false;
	}
}
export {
	areEqual
};
