import { convertMarkdown } from "./Blog";
import { mount } from "@cypress/react";

export {};

describe("Markdown conversion", () => {
  it("Renders simple markdown", () => {
    mount(convertMarkdown("## Test"));
    cy.get("h2").should("contain.text", "Test");
  });
});
