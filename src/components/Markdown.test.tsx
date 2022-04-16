import { mount } from "@cypress/react";
import dayjs from "dayjs";
import { convertMarkdown, addPostDate } from "./Markdown";

describe("Markdown conversion", () => {
  it("Renders simple markdown", () => {
    mount(convertMarkdown("## Test"));
    cy.get("h2").should("contain.text", "Test");
  });
});

describe("BlogPost Date", () => {
  it("Inserts a date as the second line", () => {
    mount(
      convertMarkdown(
        addPostDate(
          "## Test\n\nThis is a test blog post",
          dayjs("20000101", "YYYYMMDD")
        )
      )
    );
    cy.get("h3").should("contain.text", "Jan 1, 2000");
  });
});
