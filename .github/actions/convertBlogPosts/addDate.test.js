"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dayjs_1 = __importDefault(require("dayjs"));
const addDate_1 = __importDefault(require("./addDate"));
describe("addDate", () => {
    it.only("Adds the date", () => {
        expect((0, addDate_1.default)("", "20220101")).toEqual({
            date: (0, dayjs_1.default)("20220101"),
        });
    });
});
