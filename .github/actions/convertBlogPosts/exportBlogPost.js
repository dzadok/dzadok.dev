"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addDate_1 = require("./addDate");
const mdToJson_1 = require("./mdToJson");
const fs_1 = require("fs");
function exportBlogPost(blogPath) {
    (0, addDate_1.default)((0, mdToJson_1.default)((0, fs_1.readFileSync)(blogPath).toString()), blogPath.split(".")[0]);
    return;
}
exports.default = exportBlogPost;
