import addDate from "./addDate";
import mdToJson from "./mdToJson";
import * as fs from "node:fs";
export default async function run(path) {
    const date = path.slice(-11, -3);
    const md = fs.readFileSync(path).toString();
    return addDate(mdToJson(md), date);
}
