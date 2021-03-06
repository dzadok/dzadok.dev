"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mdToJson_1 = __importDefault(require("./mdToJson"));
const SIMPLE_MD = "#Title\n\n##Header\n\nPlainText";
describe("md to json", () => {
    it("extracts the title", () => {
        expect(JSON.parse((0, mdToJson_1.default)(SIMPLE_MD)).title).toEqual("Title");
    });
    it("extracts the content", () => {
        expect(JSON.parse((0, mdToJson_1.default)(SIMPLE_MD)).content).toEqual("##Header\n\nPlainText");
    });
});
