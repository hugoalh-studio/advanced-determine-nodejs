/**
 * @private
 * @function warnConflictedArguments
 * @param {string} priority Priority argument.
 * @param {...string} conflicts Conflicted arguments.
 * @returns {void}
 */
function warnConflictedArguments(priority, ...conflicts) {
	let argumentsList = [priority, ...conflicts].sort().map((value) => {
		return `\`${value}\``;
	});
	let argumentsListLast = argumentsList.pop();
	console.warn(`Arguments ${argumentsList.join(", ")} and ${argumentsListLast} were set but conflicted! Argument \`${priority}\` will take priority.`);
}
export {
	warnConflictedArguments
};
