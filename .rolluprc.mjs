// $<Schema>$ https://rollupjs.org/guide/en/
let directoryInput = "lib";
let directoryOutput = "lib";

import { readdirSync as fileSystemReadDirectorySync } from "fs";
function readDirectory(directory) {
	return fileSystemReadDirectorySync(directory, { encoding: "utf8", withFileTypes: true });
};
let directoryList = [
	directoryInput
];
let fileNeedBundleList = [];
while (directoryList.length > 0) {
	let directoryCurrent = directoryList.shift();
	readDirectory(directoryCurrent).forEach((dirent) => {
		if (dirent.isDirectory() === true) {
			directoryList.push(`${directoryCurrent}/${dirent.name}`);
		} else if (dirent.isFile() === true && dirent.name.search(/\.mjs$/gu) !== -1) {
			fileNeedBundleList.push(`${directoryCurrent}/${dirent.name}`);
		};
	});
};
export {
	directoryInput,
	directoryOutput,
	fileNeedBundleList
};
export default {
	input: fileNeedBundleList,
	output: {
		compact: false,
		dir: directoryOutput,
		entryFileNames: "[name].js",
		format: "cjs",
		esModule: false,
		freeze: false,
		generatedCode: {
			preset: "es2015",
			reservedNamesAsProps: false
		},
		interop: false,
		preserveModules: true,
		strict: false
	},
	treeshake: false
};
