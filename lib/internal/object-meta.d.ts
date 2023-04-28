/**
 * @class ObjectMeta
 */
export class ObjectMeta {
    /**
     * @constructor
     * @param {object} item
     */
    constructor(item: object);
    prototypes: any;
    keysSymbol: symbol[];
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
