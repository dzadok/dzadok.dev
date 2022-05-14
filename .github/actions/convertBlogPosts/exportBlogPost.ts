import addDate from "./addDate";
import mdToJson from "./mdToJson";
import { readFileSync } from "node:fs";

export default function exportBlogPost(blogPath: string) {
  addDate(mdToJson(readFileSync(blogPath).toString()), blogPath.split(".")[0]);
  return;
}
