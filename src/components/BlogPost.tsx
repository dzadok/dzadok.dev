import React from "react";
import { convertMarkdown } from "./Markdown";
import { theme } from "../lightOrDark";
import { DocumentData, DocumentSnapshot } from "firebase/firestore/lite";
import Dayjs from "dayjs";

export default function BlogPost(props: {
  lightOrDarkTheme: theme;
  blogPost: DocumentSnapshot<DocumentData>;
}) {
  const date = props.blogPost.get("date").substring(0, 10);

  return (
    <article className={`blogPost ${props.lightOrDarkTheme}`} key={date}>
      <h1>{props.blogPost.get("title")}</h1>
      <p>{Dayjs(date).format("MMM D, YYYY")}</p>
      {convertMarkdown(props.blogPost.get("content"))}
    </article>
  );
}
