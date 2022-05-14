"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addDate_1 = __importDefault(require("./addDate"));
const mdToJson_1 = __importDefault(require("./mdToJson"));
const node_fs_1 = require("node:fs");
function exportBlogPost(blogPath) {
    (0, addDate_1.default)((0, mdToJson_1.default)((0, node_fs_1.readFileSync)(blogPath).toString()), blogPath.split(".")[0]);
    return;
}
exports.default = exportBlogPost;
