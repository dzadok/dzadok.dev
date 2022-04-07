import React from "react";

describe("Visit Main page", () => {
  it("Has my name as a title", () => {
    cy.visit("").get("title").should("contain.text", "David Zadok");
  });
  it("Has my name in an H1", () => {
    cy.visit("").get("h1").should("contain.text", "David Zadok");
  });
});
