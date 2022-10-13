/// <reference types="cypress" />

describe("IMDB Acessibility Checks", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("https://www.imdb.com");
  });

  it("should run acessibility audits on the home page", () => {
    cy.checkPageA11y();
  });

  it("should not have a11y violations on the Sign In page", () => {
    cy.contains("a", "Sign In").click();
    cy.checkPageA11y();
  });

  it("should not have a11y violations on the elements", () => {
    cy.checkPageA11y('#suggestion-search')
    cy.checkPageA11y('header');
    cy.checkPageA11y('h3')
  });
});
