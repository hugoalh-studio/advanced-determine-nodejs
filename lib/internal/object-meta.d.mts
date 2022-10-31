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
    entriesConfigurable: string[];
    entriesEnumerable: string[];
    entriesGetter: string[];
    entriesNonAccessor: string[];
    entriesNonConfigurable: string[];
    entriesNonEnumerable: string[];
    entriesNonWritable: string[];
    entriesSetter: string[];
    entriesWritable: string[];
}
//# sourceMappingURL=object-meta.d.mts.map