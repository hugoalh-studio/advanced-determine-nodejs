/**
 * @class ObjectMeta
 */
declare class ObjectMeta {
    prototypes: any;
    keysSymbol: symbol[];
    descriptors: object & {
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
    /**
     * @constructor
     * @param {object} item
     */
    constructor(item: object);
}
export { ObjectMeta };
//# sourceMappingURL=object-meta.d.ts.map