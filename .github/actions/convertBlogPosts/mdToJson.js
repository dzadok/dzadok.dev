"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TITLE_REGEXP = /^#[^#].*$/gm;
function mdToJson(md) {
    var _a;
    const titles = md.split("\n").filter((x) => TITLE_REGEXP.test(x));
    const title = (_a = titles[0]) === null || _a === void 0 ? void 0 : _a.substring(1);
    const content = md
        .split("\n")
        .filter((x) => !TITLE_REGEXP.test(x))
        .join("\n")
        .substring(1);
    return JSON.stringify({ title, content });
}
exports.default = mdToJson;
