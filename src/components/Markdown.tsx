import ReactMarkdown from "react-markdown";
import { Dayjs } from "dayjs";

export function convertMarkdown(markdown: string) {
  return (
    <article key={markdown.split("\n")[1]} className="blogPost-dark">
      <ReactMarkdown children={markdown}></ReactMarkdown>
    </article>
  );
}

export function addPostDate(markdown: string, date: Dayjs) {
  const mdLines = markdown.split("\n");
  mdLines.splice(1, 1, `${date.format("MMM D, YYYY")}\n`);
  return mdLines.join("\n");
}
