import ReactMarkdown from "react-markdown";
import { Dayjs } from "dayjs";

export function convertMarkdown(markdown: string) {
  return (
    <article>
      <ReactMarkdown children={markdown} className="blogPost"></ReactMarkdown>
    </article>
  );
}

export function addPostDate(markdown: string, date: Dayjs) {
  const mdLines = markdown.split("\n");
  mdLines.splice(1, 1, `### ${date.format("MMM D, YYYY")}`);
  return mdLines.join("\n");
}
