import { contains } from "cypress/types/jquery";
import React from "react";

describe("Visit Main page", () => {
  it("Has my name as a title", () => {
    cy.visit("").get("title").should("contain.text", "David Zadok");
  });
  it("Has my name in an H1", () => {
    cy.visit("").get("h1").should("contain.text", "David Zadok");
  });
  it('Display markdown with a title starting with "Motivation"', () => {
    cy.visit("").get(":nth-child(2) > h1").should("contain.text", "Motivation");
  });
});
