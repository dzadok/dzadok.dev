"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dayjs = require("dayjs");
const addDate_1 = require("./addDate");
describe("addDate", () => {
    it("Adds the date", () => {
        expect((0, addDate_1.default)("", "20220101")).toEqual({
            date: dayjs("20220101"),
        });
    });
});
