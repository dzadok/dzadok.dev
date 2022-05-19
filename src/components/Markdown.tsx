import ReactMarkdown from "react-markdown";
import React from "react";

export function convertMarkdown(markdown: string) {
  return <ReactMarkdown>{markdown}</ReactMarkdown>;
}
