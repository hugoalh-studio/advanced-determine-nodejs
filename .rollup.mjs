// $<Schema>$ https://rollupjs.org/guide/en/
import { directoryInput, directoryOutput, fileNeedBundleList } from "./.rolluprc.mjs";
import { dirname as pathDirectoryName, join as pathJoin } from "path";
import { execSync as childProcessExecuteSync } from "child_process";
import { fileURLToPath } from "url";
import { readFileSync as fileSystemReadFileSync, writeFileSync as fileSystemWriteFileSync } from "fs";
try {
	let currentWorkingDirectory = pathDirectoryName(fileURLToPath(import.meta.url));
	childProcessExecuteSync(
		"rollup --config .rolluprc.mjs",
		{
			cwd: currentWorkingDirectory,
			encoding: "utf8",
			windowsHide: true
		}
	);
	let fileBundleList = fileNeedBundleList.map((file) => {
		return file.replace(`${directoryInput}/`, `${directoryOutput}/`).replace(".mjs", ".js");
	});
	fileBundleList.forEach((file) => {
		let fullPath = pathJoin(currentWorkingDirectory, file);
		let content = fileSystemReadFileSync(
			fullPath,
			{
				encoding: "utf8",
				flag: "r"
			}
		);
		let contentModify = content.replace(/require\('(?<path>.+)'\)/gu, "require(\"$<path>\")").replace(/(?<!module\.)exports\.(?<key>.+) = /gu, "module.exports.$<key> = ")
		fileSystemWriteFileSync(fullPath,contentModify);
	});
} catch (error) {
	console.error(error);
};
