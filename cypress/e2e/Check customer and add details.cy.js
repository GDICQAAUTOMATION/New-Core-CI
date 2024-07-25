/// <reference types="cypress" />

describe('check edit function if customer and continue', () => {
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
    cy.get(':nth-child(1) > :nth-child(7) > :nth-child(1) > .d-inline-block > #dropdownBasic1').click();
    cy.get(':nth-child(1) > :nth-child(7) > :nth-child(1) > .d-inline-block > .dropdown-menu > .dropdown-item').click();
    cy.get(':nth-child(13) > .input-group > .form-control').type('Abdul Nasir');
    cy.get('.modal-footer > .btn-primary').click();
    cy.get('.confirm__modal__content > .btn');
    cy.get('.confirm__modal__content > .btn-primary').click();
    // Wait for the confirmation modal to appear
    cy.get('.confirm__modal__content').should('be.visible');

    // Click on the primary button to confirm
    cy.get('.confirm__modal__content > .btn-primary').click();

    // Optionally wait for any post-confirmation actions
    cy.wait(1000);

    // Verify the customer was added (adjust based on your application's behavior)
    // cy.get('.notification-message').should('contain', 'Customer added successfully');
    cy.get(':nth-child(1) > .sorting_1 > .checkbox > span').click();
    cy.get('.flex-between > [style="align-items: center;"] > :nth-child(2) > .btn').click();

    // Ensure the business type dropdown is scrollable into view
    cy.get('ng-select[formcontrolname="businessType"]').scrollIntoView().should('be.visible').click();
    
    // Wait for the dropdown options to be available
    cy.get('.ng-dropdown-panel .ng-option').should('be.visible');
    
    // Select business type as "New"
    cy.get('.ng-dropdown-panel .ng-option').contains('New').click();

    // Verify the selection
    cy.get('ng-select[formcontrolname="businessType"] .ng-value-container').should('contain', 'New');
  });
});
