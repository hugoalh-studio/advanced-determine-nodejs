export default ObjectMeta;
/**
 * @private
 * @class ObjectMeta
 */
declare class ObjectMeta {
    /**
     * @constructor
     * @param {object} item
     */
    constructor(item: object);
    prototypes: any;
    symbolKeys: symbol[];
    descriptors: {
        [x: string]: TypedPropertyDescriptor<any>;
    } & {
        [x: string]: PropertyDescriptor;
    };
    configurableEntries: string[];
    enumerableEntries: string[];
    getterEntries: string[];
    nonAccessorEntries: string[];
    nonConfigurableEntries: string[];
    nonEnumerableEntries: string[];
    nonWritableEntries: string[];
    setterEntries: string[];
    writableEntries: string[];
}
//# sourceMappingURL=object-meta.d.mts.map