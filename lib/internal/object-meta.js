/**
 * @class ObjectMeta
 */
class ObjectMeta {
	/**
	 * @constructor
	 * @param {object} item
	 */
	constructor(item) {
		this.prototypes = Object.getPrototypeOf(item);
		this.keysSymbol = Object.getOwnPropertySymbols(item);
		this.descriptors = Object.getOwnPropertyDescriptors(item);
		this.entriesConfigurable = [];
		this.entriesEnumerable = [];
		this.entriesGetter = [];
		this.entriesNonAccessor = [];
		this.entriesNonConfigurable = [];
		this.entriesNonEnumerable = [];
		this.entriesNonWritable = [];
		this.entriesSetter = [];
		this.entriesWritable = [];
		for (let descriptor in this.descriptors) {
			if (Object.prototype.hasOwnProperty.call(this.descriptors, descriptor)) {
				let descriptorProperties = this.descriptors[descriptor];
				if (descriptorProperties.configurable) {
					this.entriesConfigurable.push(descriptor);
				} else {
					this.entriesNonConfigurable.push(descriptor);
				}
				if (descriptorProperties.enumerable) {
					this.entriesEnumerable.push(descriptor);
				} else {
					this.entriesNonEnumerable.push(descriptor);
				}
				if (typeof descriptorProperties.get !== "undefined") {
					this.entriesGetter.push(descriptor);
				}
				if (typeof descriptorProperties.set !== "undefined") {
					this.entriesSetter.push(descriptor);
				}
				if (typeof descriptorProperties.get === "undefined" && typeof descriptorProperties.set === "undefined") {
					this.entriesNonAccessor.push(descriptor);
				}
				if (descriptorProperties.writable) {
					this.entriesWritable.push(descriptor);
				} else {
					this.entriesNonWritable.push(descriptor);
				}
			}
		}
	}
}
export {
	ObjectMeta
};
