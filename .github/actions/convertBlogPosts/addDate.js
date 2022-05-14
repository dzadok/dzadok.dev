"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dayjs = require("dayjs");
function addDate(json, date) {
    const jsonObj = json ? JSON.parse(json) : {};
    return { ...jsonObj, date: dayjs(date) };
}
exports.default = addDate;
