import { convertMarkdown } from "./markdown";

function GetBlogPosts() {
  const blogPosts = import.meta.glob("./../content/*.md", { as: "raw" });
  const content: JSX.Element[] = [];
  for (const md in blogPosts) {
    content.push(convertMarkdown(blogPosts[md]));
  }

  return content;
}

export default function Blog() {
  return <div id="blog">{GetBlogPosts()}</div>;
}
