import { config, filesNeedToBundle } from "./.rollup-config.mjs";
import { dirname as pathDirectoryName, join as pathJoin } from "path";
import { execSync as childProcessExecuteSync } from "child_process";
import { fileURLToPath } from "url";
import { readFileSync as fileSystemReadFileSync, writeFileSync as fileSystemWriteFileSync } from "fs";
try {
	let currentWorkingDirectory = pathDirectoryName(fileURLToPath(import.meta.url));
	childProcessExecuteSync(
		"rollup --config .rollup-config.mjs",
		{
			cwd: currentWorkingDirectory,
			encoding: "utf8",
			windowsHide: true
		}
	);
	let filesBundled = filesNeedToBundle.map((file) => {
		return file.replace(`${config.input}/`, `${config.output}/`).replace(".mjs", ".js");
	});
	filesBundled.forEach((file) => {
		let fileFullPath = pathJoin(currentWorkingDirectory, file);
		let content = fileSystemReadFileSync(
			fileFullPath,
			{
				encoding: "utf8",
				flag: "r"
			}
		);
		for (let search in config.postReplace) {
			let replace = config.postReplace[search];
			let searchRE = new RegExp(search, "gu");
			content = content.replace(searchRE, replace);
		};
		fileSystemWriteFileSync(fileFullPath,content);
	});
} catch (error) {
	console.error(error);
};
