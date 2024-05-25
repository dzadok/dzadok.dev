export {};

describe("Visit Main page", () => {
  it("Has my name as a title", () => {
    cy.visit("").get("title").should("contain.text", "David Zadok");
  });
  it("Has my name on the page", () => {
    cy.visit("").get("header > .myName").should("contain.text", "David Zadok");
  });
  it('Display markdown with a title starting with "Motivation"', () => {
    cy.visit("").get(".blogPost > h1").should("include.text", "Motivation");
  });
  it("Should show the blog post date", () => {
    cy.visit("")
      .get(".blogPost > :nth-child(2)")
      .should("include.text", "Apr 6, 2022");
  });
});
