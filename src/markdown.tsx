import ReactMarkdown from "react-markdown";

export function convertMarkdown(markdown: any) {
  return <ReactMarkdown children={markdown}></ReactMarkdown>;
}
