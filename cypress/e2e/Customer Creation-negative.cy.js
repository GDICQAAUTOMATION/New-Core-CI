/// <reference types="cypress" />

describe('GDIC CI Motor test', () => {
    before(() => {
      // Visit the login page
      cy.visit('https://cisqatest.green-delta.com/');
  
      // Perform login
      cy.get('.mb-5 > .input-group > .form-control').click().type('22222');
      cy.get(':nth-child(3) > .input-group > .form-control').click().type('APURNAKHAN1412');
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
    });
  
    // Positive Test Case: Successful customer creation
    it('should create a new customer successfully', () => {
      // Click on the buttons to proceed
      cy.get('.card-toolbar > .btn').click();
      cy.get('[style="align-items: center;"] > .btn').click();
      cy.get('[style="align-items: center;"] > .btn').click();
  
      // Open the customer type dropdown menu
      cy.get('ng-select[formcontrolname="customerType"]').click();
  
      // Wait for the dropdown options to be visible and select "personal"
      cy.get('.ng-dropdown-panel .ng-option').contains('PERSONAL').click({ force: true });
  
      // Verify the selection
      cy.get('ng-select[formcontrolname="customerType"] .ng-value-container')
        .should('contain', 'PERSONAL');
  
      // Fill in the customer form fields
      cy.get('form.ng-untouched > #required-fields > :nth-child(2) > .input-group > .form-control').type('Tamanna Islam');
      cy.get('form.ng-untouched > #required-fields > :nth-child(3) > .input-group > .form-control').type('Jhumur');
      cy.get('.ng-invalid.ng-dirty > #required-fields > :nth-child(5) > .input-group > .form-control').type('01538677800');
      cy.get(':nth-child(17) > .customer__edit__modal > .modal-content > app-add-customer-modal > .modal__control > .modal-body > .ng-invalid.ng-touched > #required-fields > :nth-child(16) > .input-group > .form-control').type('tamanna123@example.com');
      cy.get('form.ng-dirty > #required-fields > :nth-child(7) > .input-group > .form-control').type('Dhaka-1216');
      cy.get('.ng-invalid.ng-dirty > #required-fields > :nth-child(8)').type('Komilla');
      cy.get('.ng-invalid.ng-dirty > #required-fields > :nth-child(9) > .input-group > .form-control').type('9112101148');
  
      // Gender selection
      cy.get('form.ng-dirty > #required-fields > :nth-child(6) > .select-group > .ng-select > .ng-select-container > .ng-value-container > .ng-input').click();
      cy.get('.ng-option').contains('Female').click();
  
      // Save the customer
      cy.get('form.ng-dirty > .modal-footer > .btn-primary').click();
  
      // Wait for the confirmation modal to appear and click the primary button
      cy.get('.confirm__modal__content > .btn-primary').should('be.visible').click();
  
      // Click the "OK" button in the confirmation modal
      cy.get('.confirm__modal__content > .btn.btn-primary').contains('OK').should('be.visible').click();
  
      // Verify the customer was added
      // Uncomment and adjust based on your application's behavior
      // cy.get('.notification-message').should('contain', 'Customer Created successfully');
    });
  
    // Negative Test Case 1: Attempt to create a customer with empty fields
    it('should show an error when fields are empty', () => {
      cy.get('.card-toolbar > .btn').click();
      cy.get('[style="align-items: center;"] > .btn').click();
      cy.get('[style="align-items: center;"] > .btn').click();
  
      // Attempt to save the customer with empty fields
      cy.get('form.ng-dirty > .modal-footer > .btn-primary').click();
  
      // Check for error messages
      cy.get('.error-message').should('be.visible').and('contain', 'All fields are required');
      cy.screenshot('Empty Fields Error'); // Log the error
    });
  
    // Negative Test Case 2: Attempt to create a customer with invalid phone number
    it('should show an error when phone number is invalid', () => {
      cy.get('.card-toolbar > .btn').click();
      cy.get('[style="align-items: center;"] > .btn').click();
      cy.get('[style="align-items: center;"] > .btn').click();
  
      // Fill in valid details but invalid phone number
      cy.get('form.ng-untouched > #required-fields > :nth-child(2) > .input-group > .form-control').type('Tamanna Islam');
      cy.get('form.ng-untouched > #required-fields > :nth-child(3) > .input-group > .form-control').type('Jhumur');
      cy.get('.ng-invalid.ng-dirty > #required-fields > :nth-child(5) > .input-group > .form-control').type('InvalidPhoneNumber'); // Invalid phone
      cy.get(':nth-child(17) > .customer__edit__modal > .modal-content > app-add-customer-modal > .modal__control > .modal-body > .ng-invalid.ng-touched > #required-fields > :nth-child(16) > .input-group > .form-control').type('tamanna123@example.com');
      cy.get('form.ng-dirty > #required-fields > :nth-child(7) > .input-group > .form-control').type('Dhaka-1216');
      cy.get('.ng-invalid.ng-dirty > #required-fields > :nth-child(8)').type('Komilla');
      cy.get('.ng-invalid.ng-dirty > #required-fields > :nth-child(9) > .input-group > .form-control').type('9112101148');
  
      // Gender selection
      cy.get('form.ng-dirty > #required-fields > :nth-child(6) > .select-group > .ng-select > .ng-select-container > .ng-value-container > .ng-input').click();
      cy.get('.ng-option').contains('Female').click();
  
      // Attempt to save the customer
      cy.get('form.ng-dirty > .modal-footer > .btn-primary').click();
  
      // Check for error message
      cy.get('.error-message').should('be.visible').and('contain', 'Invalid phone number format');
      cy.screenshot('Invalid Phone Number Error'); // Log the error
    });
  
    // Negative Test Case 3: Attempt to create a customer with an invalid email
    it('should show an error when email is invalid', () => {
      cy.get('.card-toolbar > .btn').click();
      cy.get('[style="align-items: center;"] > .btn').click();
      cy.get('[style="align-items: center;"] > .btn').click();
  
      // Fill in valid details but invalid email
      cy.get('form.ng-untouched > #required-fields > :nth-child(2) > .input-group > .form-control').type('Tamanna Islam');
      cy.get('form.ng-untouched > #required-fields > :nth-child(3) > .input-group > .form-control').type('Jhumur');
      cy.get('.ng-invalid.ng-dirty > #required-fields > :nth-child(5) > .input-group > .form-control').type('01538677800');
      cy.get(':nth-child(17) > .customer__edit__modal > .modal-content > app-add-customer-modal > .modal__control > .modal-body > .ng-invalid.ng-touched > #required-fields > :nth-child(16) > .input-group > .form-control').type('invalidEmail'); // Invalid email
      cy.get('form.ng-dirty > #required-fields > :nth-child(7) > .input-group > .form-control').type('Dhaka-1216');
      cy.get('.ng-invalid.ng-dirty > #required-fields > :nth-child(8)').type('Komilla');
      cy.get('.ng-invalid.ng-dirty > #required-fields > :nth-child(9) > .input-group > .form-control').type('9112101148');
  
      // Gender selection
      cy.get('form.ng-dirty > #required-fields > :nth-child(6) > .select-group > .ng-select > .ng-select-container > .ng-value-container > .ng-input').click();
      cy.get('.ng-option').contains('Female').click();
  
      // Attempt to save the customer
      cy.get('form.ng-dirty > .modal-footer > .btn-primary').click();
  
      // Check for error message
      cy.get('.error-message').should('be.visible').and('contain', 'Invalid email format');
      cy.screenshot('Invalid Email Error'); // Log the error
    });
  
    // Negative Test Case 4: Attempt to create a customer with an invalid gender selection
    it('should show an error when gender is not selected', () => {
      cy.get('.card-toolbar > .btn').click();
      cy.get('[style="align-items: center;"] > .btn').click();
      cy.get('[style="align-items: center;"] > .btn').click();
  
      // Fill in valid details without selecting gender
      cy.get('form.ng-untouched > #required-fields > :nth-child(2) > .input-group > .form-control').type('Tamanna Islam');
      cy.get('form.ng-untouched > #required-fields > :nth-child(3) > .input-group > .form-control').type('Jhumur');
      cy.get('.ng-invalid.ng-dirty > #required-fields > :nth-child(5) > .input-group > .form-control').type('01538677800');
      cy.get(':nth-child(17) > .customer__edit__modal > .modal-content > app-add-customer-modal > .modal__control > .modal-body > .ng-invalid.ng-touched > #required-fields > :nth-child(16) > .input-group > .form-control').type('tamanna123@example.com');
      cy.get('form.ng-dirty > #required-fields > :nth-child(7) > .input-group > .form-control').type('Dhaka-1216');
      cy.get('.ng-invalid.ng-dirty > #required-fields > :nth-child(8)').type('Komilla');
      cy.get('.ng-invalid.ng-dirty > #required-fields > :nth-child(9) > .input-group > .form-control').type('9112101148');
  
      // Attempt to save the customer without selecting gender
      cy.get('form.ng-dirty > .modal-footer > .btn-primary').click();
  
      // Check for error message
      cy.get('.error-message').should('be.visible').and('contain', 'Gender selection is required');
      cy.screenshot('No Gender Selection Error'); // Log the error
    });
  
    // After all tests
    afterEach(() => {
      // Take a screenshot on failure
      if (this.currentTest.state === 'failed') {
        cy.screenshot(this.currentTest.title);
      }
    });
  });
  