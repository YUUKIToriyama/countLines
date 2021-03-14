/* countLines.js */

const fs = require("fs");
const split = require("split");

const countLines = (filePath) => {
	let flagError = false;
	let lineCount = 0;
	let dataStream = fs.createReadStream(filePath).pipe(split());
	return new Promise((resolve, reject) => {
		dataStream.on("data", (line) => {
			lineCount = lineCount + 1;
		});
		dataStream.on("error", (error) => {
			flagError = true;
			reject(error);
		});
		dataStream.on("end", () => {
			if (flagError) {
				return "something error was occured";
			} else {
				resolve(lineCount - 1);
			}
		});
	})
}

module.exports = countLines;
