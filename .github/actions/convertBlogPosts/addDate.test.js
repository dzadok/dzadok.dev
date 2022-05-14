"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addDate_1 = __importDefault(require("./addDate"));
describe("addDate", () => {
    it.only("Adds the date", () => {
        expect((0, addDate_1.default)("", "20220101")).toMatchObject({
            date: new Date("2022-01-01T00:00").toISOString(),
        });
    });
});
