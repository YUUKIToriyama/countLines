import fs from "fs";
import split from "split";

const countLines = (filePath: string): Promise<number> => {
	let flagError: boolean = false;
	let lineCount: number = 0;
	let dataStream = fs.createReadStream(filePath).pipe(split());
	return new Promise((resolve, reject) => {
		dataStream.on("data", () => {
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
export default countLines;