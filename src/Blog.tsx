import ReactMarkdown from "react-markdown";

export function convertMarkdown(markdown: any) {
  return <ReactMarkdown children={markdown}></ReactMarkdown>;
}

function GetContent() {
  const x = import.meta.glob("./../content/*.md", { as: "raw" });
  const content: JSX.Element[] = [];
  for (const md in x) {
    content.push(convertMarkdown(x[md]));
  }

  return content;
}

function Blog() {
  return <div>{GetContent()}</div>;
}

export default Blog;
