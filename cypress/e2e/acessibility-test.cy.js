/// <reference types="cypress" />





describe("Acessibility", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("https://www.linuxtips.io/pt-pt");
  });

  it("should run acessibility audits on the landing page", () => {
    cy.checkPageA11y()
  });

  it("should not have a11y violations in the Contato page", () => {
    cy.contains("span", "Contato").click();
    cy.checkPageA11y()
  });

  it("should not have a11y violations in the Contato page", () => {
    cy.get(".card-wrapper").each(($el, index, $list) => {
      cy.wrap($el).click();
      cy.checkPageA11y()
    });
  });
});
