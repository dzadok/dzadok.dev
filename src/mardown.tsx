import { mount } from "@cypress/react";
import { convertMarkdown } from "./markdown";

describe("Markdown conversion", () => {
  it("Renders simple markdown", () => {
    mount(convertMarkdown("## Test"));
    cy.get("h2").should("contain.text", "Test");
  });
});
