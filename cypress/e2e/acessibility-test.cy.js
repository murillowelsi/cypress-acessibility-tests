describe('Acessibility', () => {
  it('should run acessibility audits', () => {
    cy.visit('https://school.linuxtips.io/')
    cy.injectAxe()
    cy.checkA11y()
  });
});