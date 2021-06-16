"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var split_1 = __importDefault(require("split"));
var countLines = function (filePath) {
    var flagError = false;
    var lineCount = 0;
    var dataStream = fs_1.default.createReadStream(filePath).pipe(split_1.default());
    return new Promise(function (resolve, reject) {
        dataStream.on("data", function () {
            lineCount = lineCount + 1;
        });
        dataStream.on("error", function (error) {
            flagError = true;
            reject(error);
        });
        dataStream.on("end", function () {
            if (flagError) {
                return "something error was occured";
            }
            else {
                resolve(lineCount - 1);
            }
        });
    });
};
exports.default = countLines;
//# sourceMappingURL=countlines.js.map