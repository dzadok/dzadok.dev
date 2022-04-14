import dayjs from "dayjs";
import { addPostDate, convertMarkdown } from "./markdown";

function GetBlogPosts() {
  const blogPosts: Record<string, string> = import.meta.glob(
    "./../../content/*.md",
    {
      as: "raw",
    }
  ) as any;

  const content = [];
  for (const md in blogPosts) {
    const filename = md.split("/").pop();
    const rawDate =
      filename?.substring(0, filename.lastIndexOf(".")) || filename;
    const date = dayjs(rawDate, "YYYYMMDD");
    content.push(convertMarkdown(addPostDate(blogPosts[md], date)));
  }

  return content;
}

export default function Blog() {
  return <div id="blog">{GetBlogPosts()}</div>;
}
