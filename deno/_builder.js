import { existsSync as fsExistsSync } from "node:fs";
import { mkdir as fsMKDir, readdir as fsReadDir, rm as fsRemove, writeFile as fsWriteFile, readFile as fsReadFile } from "node:fs/promises";
import { dirname as pathDirName, join as pathJoin } from "node:path";
import { fileURLToPath } from "node:url";
const root = pathDirName(fileURLToPath(import.meta.url));
const inputDirectoryPath = pathJoin(root, "../src");
const outputDirectoryPath = root;
async function getDirectoryItem(directoryPath, relativeBasePath) {
	if (typeof relativeBasePath === "undefined") {
		relativeBasePath = directoryPath;
	}
	try {
		let result = [];
		for (let item of await fsReadDir(directoryPath, { withFileTypes: true })) {
			if (item.isDirectory()) {
				result.push(...await getDirectoryItem(pathJoin(directoryPath, item.name), relativeBasePath));
			} else {
				result.push(pathJoin(directoryPath, item.name).slice(relativeBasePath.length + 1).replace(/\\/gu, "/"));
			}
		}
		return result;
	} catch (error) {
		return [];
	}
}

/* Clean up or initialize output directory (need to await in order to prevent race conditions). */
if (fsExistsSync(outputDirectoryPath)) {
	for (let outputFileName of await getDirectoryItem(outputDirectoryPath)) {
		if (
			outputFileName === "_builder.js" ||
			outputFileName === "deno.json"
		) {
			continue;
		}
		await fsRemove(pathJoin(outputDirectoryPath, outputFileName), { recursive: true });
	}
} else {
	await fsMKDir(outputDirectoryPath, { recursive: true });
}

/* Create output. */
for (let inputFileName of await getDirectoryItem(inputDirectoryPath)) {
	let inputFileContent = await fsReadFile(pathJoin(inputDirectoryPath, inputFileName), { encoding: "utf8" });
	let outputFileContent = inputFileContent.replace(/(?<statement>import(?: .+? from)? "\.?\.\/.+?)\.js";/gu, "$<statement>.ts\"");
	await fsWriteFile(pathJoin(outputDirectoryPath, (inputFileName === "main.ts") ? "mod.ts" : inputFileName), outputFileContent, { encoding: "utf8" });
}
