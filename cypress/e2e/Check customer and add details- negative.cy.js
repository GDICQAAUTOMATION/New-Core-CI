/// <reference types="cypress" />

describe('Check edit function for customer and continue', () => {
    before(() => {
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
    });
  
    it('should edit customer details and continue', () => {
      // Click the button to add a new entry or customer
      cy.get('.card-toolbar > .btn').click();
  
      // Click the dropdown button in the first row of entries
      cy.get(':nth-child(1) > :nth-child(7) > :nth-child(1) > .d-inline-block > #dropdownBasic1').click();
  
      // Click on the "Edit" option from the dropdown menu
      cy.get(':nth-child(1) > :nth-child(7) > :nth-child(1) > .d-inline-block > .dropdown-menu > .dropdown-item').click();
  
      // Type in the new name for the customer in the input field
      cy.get(':nth-child(13) > .input-group > .form-control').clear().type('Abdul Nasir');
  
      // Click the "Save" button in the modal
      cy.get('.modal-footer > .btn-primary').click();
  
      // Ensure that the confirmation modal appears and click "Confirm"
      cy.get('.confirm__modal__content').should('be.visible');
      cy.get('.confirm__modal__content > .btn-primary').click();
  
      // Wait for any post-confirmation actions to complete
      cy.wait(1000);
  
      // Verify that the customer was edited successfully
      cy.get('.confirm__modal__content > .btn').click();
  
      // Select the newly edited customer using the checkbox in the list
      cy.get(':nth-child(1) > .sorting_1 > .checkbox > span').click();
  
      // Click the "Continue" button to proceed with the selected customer
      cy.get('.flex-between > [style="align-items: center;"] > :nth-child(2) > .btn').click();
  
      // Ensure that the business type dropdown is visible before interacting
      cy.get('ng-select[formcontrolname="businessType"]').click();
      
      // Wait for the dropdown options to be loaded and visible
      cy.get('.ng-dropdown-panel .ng-option').should('be.visible');
      
      // Select "New" from the business type dropdown
      cy.get('.ng-dropdown-panel .ng-option').contains('New').click();
  
      // Verify that "New" is selected in the business type dropdown
      cy.get('ng-select[formcontrolname="businessType"] .ng-value-container').should('contain', 'New');
  
      // Click continue on the footer
      cy.get('.form-footer > :nth-child(2) > .btn').click();
    });
  
    // Negative test: Attempt to edit customer with an empty name
    it('should show an error when editing with an empty name', () => {
      cy.get('.card-toolbar > .btn').click();
      cy.get(':nth-child(1) > :nth-child(7) > :nth-child(1) > .d-inline-block > #dropdownBasic1').click();
      cy.get(':nth-child(1) > :nth-child(7) > :nth-child(1) > .d-inline-block > .dropdown-menu > .dropdown-item').click();
  
      // Clear the input field for customer name
      cy.get(':nth-child(13) > .input-group > .form-control').clear();
  
      // Click the "Save" button
      cy.get('.modal-footer > .btn-primary').click();
  
      // Check for error message
      cy.get('.error-message').should('be.visible').and('contain', 'Name is required');
      cy.screenshot('Empty Name Error'); // Log the error
    });
  
    // Negative test: Attempt to edit customer with invalid characters
    it('should show an error when editing with invalid characters', () => {
      cy.get('.card-toolbar > .btn').click();
      cy.get(':nth-child(1) > :nth-child(7) > :nth-child(1) > .d-inline-block > #dropdownBasic1').click();
      cy.get(':nth-child(1) > :nth-child(7) > :nth-child(1) > .d-inline-block > .dropdown-menu > .dropdown-item').click();
  
      // Type in invalid characters for customer name
      cy.get(':nth-child(13) > .input-group > .form-control').clear().type('!@#$%^&*()');
  
      // Click the "Save" button
      cy.get('.modal-footer > .btn-primary').click();
  
      // Check for error message
      cy.get('.error-message').should('be.visible').and('contain', 'Invalid name format');
      cy.screenshot('Invalid Name Error'); // Log the error
    });
  
    // Negative test: Attempt to edit customer without selecting a business type
    it('should show an error when continuing without selecting a business type', () => {
      cy.get('.card-toolbar > .btn').click();
      cy.get(':nth-child(1) > :nth-child(7) > :nth-child(1) > .d-inline-block > #dropdownBasic1').click();
      cy.get(':nth-child(1) > :nth-child(7) > :nth-child(1) > .d-inline-block > .dropdown-menu > .dropdown-item').click();
  
      // Type in a valid customer name
      cy.get(':nth-child(13) > .input-group > .form-control').clear().type('Abdul Nasir');
      cy.get('.modal-footer > .btn-primary').click();
      cy.get('.confirm__modal__content > .btn-primary').click();
  
      // Select the newly edited customer using the checkbox in the list
      cy.get(':nth-child(1) > .sorting_1 > .checkbox > span').click();
  
      // Click the "Continue" button without selecting a business type
      cy.get('.flex-between > [style="align-items: center;"] > :nth-child(2) > .btn').click();
  
      // Check for error message
      cy.get('.error-message').should('be.visible').and('contain', 'Business type is required');
      cy.screenshot('Missing Business Type Error'); // Log the error
    });
  
    // Negative test: Attempt to save and confirm without selecting customer
    it('should show an error when trying to save without selecting a customer', () => {
      cy.get('.card-toolbar > .btn').click();
      // Click the "Continue" button without selecting any customer
      cy.get('.flex-between > [style="align-items: center;"] > :nth-child(2) > .btn').click();
  
      // Check for error message
      cy.get('.error-message').should('be.visible').and('contain', 'Please select a customer');
      cy.screenshot('No Customer Selected Error'); // Log the error
    });
  });
  