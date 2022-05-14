"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addDate_1 = require("./addDate");
const mdToJson_1 = require("./mdToJson");
const fs = require("node:fs");
async function run(path) {
    const date = path.slice(-11, -3);
    const md = fs.readFileSync(path).toString();
    return (0, addDate_1.default)((0, mdToJson_1.default)(md), date);
}
exports.default = run;
