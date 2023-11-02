export type JSONPrimitive = boolean | null | number | string;
export type JSONArray = JSONValue[];
export type JSONObject = {
    [key: string]: JSONValue;
};
export type JSONValue = JSONArray | JSONObject | JSONPrimitive;
/**
 * Determine whether the item is a JSON.
 * @param {unknown} item Item that need to determine.
 * @returns {item is JSONValue} Determine result.
 */
export declare function isJSON(item: unknown): item is JSONValue;
export { isJSON as isJSONValue };
export default isJSON;
/**
 * Determine whether the item is a JSON array.
 * @param {unknown} item Item that need to determine.
 * @returns {item is JSONArray} Determine result.
 */
export declare function isJSONArray(item: unknown): item is JSONArray;
/**
 * Determine whether the item is a JSON object.
 * @param {unknown} item Item that need to determine.
 * @returns {item is JSONObject} Determine result.
 */
export declare function isJSONObject(item: unknown): item is JSONObject;
/**
 * Determine whether the item is a JSON primitive.
 * @param {unknown} item Item that need to determine.
 * @returns {item is JSONPrimitive} Determine result.
 */
export declare function isJSONPrimitive(item: unknown): item is JSONPrimitive;
//# sourceMappingURL=is-json.d.ts.map