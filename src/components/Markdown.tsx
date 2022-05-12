import ReactMarkdown from "react-markdown";
import { Dayjs } from "dayjs";
import { ThemeContext } from "../lightOrDark";
import React from "react";

export function convertMarkdown(markdown: string) {
  const { theme } = React.useContext(ThemeContext);
  return (
    <article className={`blogPost ${theme}`} key={markdown.split("\n")[1]}>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </article>
  );
}

export function addPostDate(markdown: string, date: Dayjs) {
  const mdLines = markdown.split("\n");
  mdLines.splice(1, 1, `${date.format("MMM D, YYYY")}\n`);
  return mdLines.join("\n");
}
