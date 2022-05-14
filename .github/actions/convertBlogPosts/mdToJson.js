"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mdToJson(md) {
    var _a;
    const lines = md.split("\n");
    // Markdown title without the #
    const title = (_a = lines[0]) === null || _a === void 0 ? void 0 : _a.substring(1);
    // Check if there was a blank line after the title
    const startOfContent = lines[1] === "" ? 2 : 1;
    const content = lines.slice(startOfContent, md.length).join("\n");
    return JSON.stringify({ title, content });
}
exports.default = mdToJson;
