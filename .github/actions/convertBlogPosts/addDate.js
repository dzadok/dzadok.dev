"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dayjs_1 = __importDefault(require("dayjs"));
function addDate(json, date) {
    const jsonObj = json ? JSON.parse(json) : {};
    return Object.assign(Object.assign({}, jsonObj), { date: (0, dayjs_1.default)(date).toISOString() });
}
exports.default = addDate;
