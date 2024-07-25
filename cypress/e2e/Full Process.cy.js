/// <reference types="cypress" />

describe('GDIC CI Motor test', () => {
    it('Logs in and navigates through the motor insurance module', function() {
      // Visit the login page
      cy.visit('https://cisqatest.green-delta.com/');
  
      // Perform login
      cy.get('.mb-5 > .input-group > .form-control').click().type('22222');
      cy.get(':nth-child(3) > .input-group > .form-control').click().type('UmmaHabiba1412');
      cy.get('#kt_login_signin_submit').click();
  
      // Wait for the login to complete and the page to load
      cy.wait(2000); // Consider using a more reliable way to wait, such as waiting for an element to be visible
  
      // Open the dropdown menu
      cy.get('.ng-select-container').click();
  
      // Select "AHO" from the dropdown menu
      cy.get('.ng-option').contains('AHO').click();
  
      // Verify the branch selection
      cy.get('.ng-select-container').should('contain', 'AHO');
  
     // Navigate to the motor insurance module
    cy.get(':nth-child(3) > .menu-toggle > .menu-arrow').click();
    cy.get('.menu-item-open > .menu-submenu > .menu-subnav > :nth-child(4) > .menu-link > .menu-text').click();
    // cy.screenshot();
    cy.get('.card-toolbar > .btn').click();
    cy.get(':nth-child(1) > .sorting_1 > .checkbox > span').click();
    cy.get('.flex-between > [style="align-items: center;"] > :nth-child(2) > .btn').click();

    // Increase timeout for the element to be visible
    cy.get('.common-info-body > :nth-child(1) > .select-group > div[_ngcontent-egy-c308=""] > .ng-select > .ng-select-container > .ng-arrow-wrapper', { timeout: 10000 })
      .should('be.visible')
      .click();
  });
});
    