/**
 * @function isDataView
 * @description Determine item is instance of data view or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isDataView(item) {
	return (item instanceof DataView);
};
module.exports = isDataView;
