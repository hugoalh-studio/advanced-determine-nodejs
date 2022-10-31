/**
 * @private
 * @class ObjectMeta
 */
class ObjectMeta {
	/**
	 * @constructor
	 * @param {object} item
	 */
	constructor(item) {
		this.prototypes = Object.getPrototypeOf(item);
		this.symbolKeys = Object.getOwnPropertySymbols(item);
		this.descriptors = Object.getOwnPropertyDescriptors(item);
		this.configurableEntries = [];
		this.enumerableEntries = [];
		this.getterEntries = [];
		this.nonAccessorEntries = [];
		this.nonConfigurableEntries = [];
		this.nonEnumerableEntries = [];
		this.nonWritableEntries = [];
		this.setterEntries = [];
		this.writableEntries = [];
		for (let descriptor in this.descriptors) {
			if (Object.prototype.hasOwnProperty.call(this.descriptors, descriptor)) {
				let descriptorProperties = this.descriptors[descriptor];
				if (descriptorProperties.configurable) {
					this.configurableEntries.push(descriptor);
				} else {
					this.nonConfigurableEntries.push(descriptor);
				}
				if (descriptorProperties.enumerable) {
					this.enumerableEntries.push(descriptor);
				} else {
					this.nonEnumerableEntries.push(descriptor);
				}
				if (typeof descriptorProperties.get !== "undefined") {
					this.getterEntries.push(descriptor);
				}
				if (typeof descriptorProperties.set !== "undefined") {
					this.setterEntries.push(descriptor);
				}
				if (typeof descriptorProperties.get === "undefined" && typeof descriptorProperties.set === "undefined") {
					this.nonAccessorEntries.push(descriptor);
				}
				if (descriptorProperties.writable) {
					this.writableEntries.push(descriptor);
				} else {
					this.nonWritableEntries.push(descriptor);
				}
			}
		}
	}
}
export default ObjectMeta;
