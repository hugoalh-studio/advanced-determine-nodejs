import { isObjectPlain } from "./object/is-plain.js";
/**
 * Determine whether the item is a JSON.
 * @param {unknown} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
export function isJSON(item) {
    switch (typeof item) {
        case "bigint":
            return false;
        case "boolean":
            return true;
        case "function":
            return false;
        case "number":
            return (!Number.isNaN(item) && item !== -Infinity && item !== Infinity);
        case "object":
            if (item === null) {
                return true;
            }
            if (Array.isArray(item)) {
                for (const element of item) {
                    if (!isJSON(element)) {
                        return false;
                    }
                }
                return true;
            }
            try {
                JSON.stringify(item);
            }
            catch {
                return false;
            }
            if (!isObjectPlain(item)) {
                return false;
            }
            for (const key in item) {
                if (Object.prototype.hasOwnProperty.call(item, key)) {
                    //@ts-ignore Impact not exists.
                    if (!isJSON(item[key])) {
                        return false;
                    }
                }
            }
            return true;
        case "string":
            return true;
        case "symbol":
            return false;
        case "undefined":
            return false;
        default:
            return false;
    }
}
export default isJSON;