import ReactMarkdown from "react-markdown";
import { Dayjs } from "dayjs";
import { ThemeContext } from "../lightOrDark";
import { useContext } from "react";

export function convertMarkdown(markdown: string) {
  const { theme } = useContext(ThemeContext);
  return (
    <article className={`blogPost ${theme}`} key={markdown.split("\n")[1]}>
      <ReactMarkdown children={markdown}></ReactMarkdown>
    </article>
  );
}

export function addPostDate(markdown: string, date: Dayjs) {
  const mdLines = markdown.split("\n");
  mdLines.splice(1, 1, `${date.format("MMM D, YYYY")}\n`);
  return mdLines.join("\n");
}
