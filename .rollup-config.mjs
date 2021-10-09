// $<Schema>$ https://rollupjs.org/guide/en/
let config = {
	input: "lib",
	output: "lib",
	postReplace: {
		"(?<!module\\.)exports\\.(?<key>.+) = ": "module.exports.$<key> = ",
		"(?<eol>\\r?\\n)\\k<eol>+": "$<eol>",
		"Json": "JSON",
		"require\\('(?<path>.+)'\\)": "require(\"$<path>\")"
	}
};
import { readdirSync as fileSystemReadDirectorySync } from "fs";
function readDirectory(directory) {
	return fileSystemReadDirectorySync(
		directory,
		{
			encoding: "utf8",
			withFileTypes: true
		}
	);
};
let directoriesQueue = [
	config.input
];
let filesNeedToBundle = [];
while (directoriesQueue.length > 0) {
	let directoryCurrent = directoriesQueue.shift();
	let directoryCurrentFiles = readDirectory(directoryCurrent);
	directoryCurrentFiles.forEach((dirent) => {
		if (dirent.isDirectory() === true) {
			directoriesQueue.push(`${directoryCurrent}/${dirent.name}`);
		} else if (dirent.isFile() === true && dirent.name.search(/\.mjs$/gu) !== -1) {
			filesNeedToBundle.push(`${directoryCurrent}/${dirent.name}`);
		};
	});
};
export {
	config,
	filesNeedToBundle
};
export default {
	input: filesNeedToBundle,
	output: {
		compact: false,
		dir: config.output,
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
