"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const convertBlogPost_1 = __importDefault(require("./convertBlogPost"));
const fs = __importStar(require("node:fs"));
const MD_FILE_NAME = "./.20000101.md";
const MD_DATE = new Date("2000-01-01T00:00").toISOString();
beforeAll(() => {
    fs.writeFileSync(MD_FILE_NAME, "#Title\n\n##Heading\n\nContent\n");
});
afterAll(() => {
    fs.unlinkSync(MD_FILE_NAME);
});
describe("convert a blog post to json", () => {
    it("throws on a non-existent file", () => {
        expect(() => (0, convertBlogPost_1.default)("a")).rejects.toThrowError("ENOENT");
    });
    it("generates wellformed json", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(() => __awaiter(void 0, void 0, void 0, function* () { return yield (0, convertBlogPost_1.default)(MD_FILE_NAME); })).not.toThrow();
    }));
    it("inserts the date", () => __awaiter(void 0, void 0, void 0, function* () {
        expect((yield (0, convertBlogPost_1.default)(MD_FILE_NAME)).date).toEqual(MD_DATE);
    }));
    it("has the right title", () => __awaiter(void 0, void 0, void 0, function* () {
        expect((yield (0, convertBlogPost_1.default)(MD_FILE_NAME)).title).toEqual("Title");
    }));
    it("has the right content", () => __awaiter(void 0, void 0, void 0, function* () {
        expect((yield (0, convertBlogPost_1.default)(MD_FILE_NAME)).content).toEqual("##Heading\n\nContent\n");
    }));
});
