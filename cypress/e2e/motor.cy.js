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

    // Click on the buttons to proceed
    cy.get('.card-toolbar > .btn').click();
    cy.get('[style="align-items: center;"] > .btn').click();

    // Click the button again if necessary (this might be redundant)
    cy.get('[style="align-items: center;"] > .btn').click();

    // Open the customer type dropdown menu
    cy.get('ng-select[formcontrolname="customerType"]').click();
    cy.screenshot()

    // Wait for the dropdown options to be visible and select "BUSINESS"
    cy.get('.ng-dropdown-panel .ng-option').contains('PERSONAL').click({ force: true });

    // Verify the selection
    cy.get('ng-select[formcontrolname="customerType"] .ng-value-container')
      .should('contain', 'PERSONAL');
  });
});
