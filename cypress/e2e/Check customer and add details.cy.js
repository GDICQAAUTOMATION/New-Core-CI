/// <reference types="cypress" />

describe('Check edit function for customer and continue', () => {
  it('Logs in and navigates through the motor insurance module', function() {
    // Set the viewport size for consistent UI behavior
    cy.viewport(1280, 720);
    
    // Visit the login page
    cy.visit('https://cisqatest.green-delta.com/');
  
    // Perform login by entering the username and password, then clicking submit
    cy.get('.mb-5 > .input-group > .form-control').click().type('22222');
    cy.get(':nth-child(3) > .input-group > .form-control').click().type('APURNAKHAN1412');
    cy.get('#kt_login_signin_submit').click();
    
    // Wait for the page to fully load before proceeding
    cy.wait(2000);
  
    // Open the branch selection dropdown and select "AHO"
    cy.get('.ng-select-container').click();
    cy.get('.ng-option').contains('AHO').click();

    // Verify that "AHO" is selected in the dropdown
    cy.get('.ng-select-container').should('contain', 'AHO');

    // Navigate to the motor insurance module via the sidebar menu
    cy.get(':nth-child(3) > .menu-toggle > .menu-arrow').click(); // Click to open the menu
    cy.get('.menu-item-open > .menu-submenu > .menu-subnav > :nth-child(4) > .menu-link > .menu-text').click();

    // Click the button to add a new entry or customer
    cy.get('.card-toolbar > .btn').click();

    // Click the dropdown button in the first row of entries
    cy.get(':nth-child(1) > :nth-child(7) > :nth-child(1) > .d-inline-block > #dropdownBasic1').click();

    // Click on the "Edit" option from the dropdown menu
    cy.get(':nth-child(1) > :nth-child(7) > :nth-child(1) > .d-inline-block > .dropdown-menu > .dropdown-item').click();

    // Type in the new name for the customer in the input field
    cy.get(':nth-child(13) > .input-group > .form-control').type('Abdul Nasir');

    // Click the "Save" button in the modal
    cy.get('.modal-footer > .btn-primary').click();

    // Ensure that the confirmation modal appears and click "Confirm"
    cy.get('.confirm__modal__content').should('be.visible');
    cy.get('.confirm__modal__content > .btn-primary').click();

    // Optionally, wait for any post-confirmation actions to complete
    cy.wait(1000);

    // Verify that the customer was edited successfully (you might need to adjust this based on your application's feedback)
    // Example: cy.get('.notification-message').should('contain', 'Customer updated successfully');
    cy.get('.confirm__modal__content > .btn').click()
    // Select the newly edited customer using the checkbox in the list
    cy.get(':nth-child(1) > .sorting_1 > .checkbox > span').click();

    // Click the "Continue" button to proceed with the selected customer
    cy.get('.flex-between > [style="align-items: center;"] > :nth-child(2) > .btn').click();

    // Ensure that the business type dropdown is visible before interacting
    cy.get('ng-select[formcontrolname="businessType"]').click();
    
    // Wait for the dropdown options to be loaded and visible
    cy.get('.ng-dropdown-panel .ng-option').should('be.visible');
    
    // Select "New" from the business type dropdown
    // Select business type as "New"
    cy.get('.ng-dropdown-panel .ng-option').contains('New').click();

    // Verify that "New" is selected in the business type dropdown
    cy.get('ng-select[formcontrolname="businessType"] .ng-value-container').should('contain', 'New');
    cy.get('.form-footer > :nth-child(2) > .btn').click()
  });
});
