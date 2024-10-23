/// <reference types="cypress" />

describe('GDIC CI Motor Endorsement - Negative Test Suite', () => {
    
    beforeEach(() => {
        // Set Viewport
        cy.viewport(1280, 720);

        // Visit the login page before each test
        cy.visit('https://cisqatest.green-delta.com/');
    });

    it('Negative Test - Invalid Login Credentials', function () {
        cy.log('Step 1: Visiting the login page.');
        
        // Attempt login with incorrect credentials
        cy.log('Step 2: Entering invalid username.');
        cy.get('.mb-5 > .input-group > .form-control').click().type('wrongUser');
        
        cy.log('Step 3: Entering invalid password.');
        cy.get(':nth-child(3) > .input-group > .form-control').click().type('wrongPassword');
        
        cy.log('Step 4: Clicking on the login button.');
        cy.get('#kt_login_signin_submit').click();

        // Verify error message is displayed
        cy.log('Step 5: Verifying that error message is displayed for invalid credentials.');
        cy.get('.alert-danger').should('be.visible').and('contain', 'Invalid username or password');
        
        cy.log('Completed test for invalid login credentials.');
    });

    it('Negative Test - Missing Required Fields in Endorsement Form', function () {
        cy.log('Step 1: Logging in with valid credentials.');

        // Perform login
        cy.get('.mb-5 > .input-group > .form-control').click().type('22222');
        cy.get(':nth-child(3) > .input-group > .form-control').click().type('APURNAKHAN1412');
        cy.get('#kt_login_signin_submit').click();
        
        cy.log('Step 2: Waiting for the page to load.');
        cy.wait(2000);

        // Navigate to the motor insurance module
        cy.log('Step 3: Selecting "AHO" from the dropdown.');
        cy.get('.ng-select-container').click();
        cy.get('.ng-option').contains('AHO').click();
        
        cy.log('Step 4: Navigating to the motor insurance module.');
        cy.get(':nth-child(3) > .menu-toggle > .menu-arrow').click();
        cy.get('.menu-item-open > .menu-submenu > .menu-subnav > :nth-child(4) > .menu-link > .menu-text').click();
        cy.wait(2000);

        cy.log('Step 5: Selecting a policy without filling in the required fields.');
        cy.get(':nth-child(4) > :nth-child(9) > :nth-child(1) > .d-inline-block > #dropdownBasic1').click({ force: true });
        cy.get(':nth-child(4) > :nth-child(9) > :nth-child(1) > .d-inline-block > .dropdown-menu > :nth-child(3)').click({ force: true });
        
        cy.log('Step 6: Clicking the continue button without filling the required fields.');
        cy.get('.flex > .btn').click();

        // Assert that an error message appears for missing fields
        cy.log('Step 7: Verifying error message for missing fields.');
        cy.get('.alert-danger').should('be.visible').and('contain', 'This field is required');
        
        cy.log('Completed test for missing required fields.');
    });

    it('Negative Test - Invalid Input for Change in Sum Insured', function () {
        cy.log('Step 1: Logging in with valid credentials.');
        
        // Perform login
        cy.get('.mb-5 > .input-group > .form-control').click().type('22222');
        cy.get(':nth-child(3) > .input-group > .form-control').click().type('APURNAKHAN1412');
        cy.get('#kt_login_signin_submit').click();
        
        cy.log('Step 2: Waiting for the page to load.');
        cy.wait(2000);

        // Navigate to the motor insurance module
        cy.log('Step 3: Selecting "AHO" from the dropdown.');
        cy.get('.ng-select-container').click();
        cy.get('.ng-option').contains('AHO').click();
        
        cy.log('Step 4: Navigating to the motor insurance module.');
        cy.get(':nth-child(3) > .menu-toggle > .menu-arrow').click();
        cy.get('.menu-item-open > .menu-submenu > .menu-subnav > :nth-child(4) > .menu-link > .menu-text').click();
        cy.wait(2000);
        
        cy.log('Step 5: Selecting a policy for endorsement.');
        cy.get(':nth-child(2) > :nth-child(9) > :nth-child(1) > .d-inline-block > #dropdownBasic1').click({ force: true });
        cy.get(':nth-child(2) > :nth-child(9) > :nth-child(1) > .d-inline-block > .dropdown-menu > :nth-child(3)').click({ force: true });

        // Select Financial Endorsement and Change in Sum Insured
        cy.log('Step 6: Selecting "Financial" endorsement type.');
        cy.get(':nth-child(1) > .select-group > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
        cy.get('.ng-option').contains('Financial').click();
        
        cy.log('Step 7: Selecting "Change in Sum Insured".');
        cy.get(':nth-child(2) > .select-group > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
        cy.get('.ng-option').contains('Change in Sum Insured').click();

        cy.log('Step 8: Entering an invalid sum insured value (-5000).');
        cy.get(':nth-child(17) > .input-group > .form-control').type('-5000');

        cy.log('Step 9: Clicking the continue button with invalid sum insured.');
        cy.get('.flex > .btn').click();

        // Verify that an error message appears
        cy.log('Step 10: Verifying error message for invalid sum insured value.');
        cy.get('.alert-danger').should('be.visible').and('contain', 'Invalid sum insured value');

        cy.log('Completed test for invalid sum insured value.');
    });

    it('Negative Test - Upload Unsupported File Format', function () {
        cy.log('Step 1: Logging in with valid credentials.');
        
        // Perform login
        cy.get('.mb-5 > .input-group > .form-control').click().type('22222');
        cy.get(':nth-child(3) > .input-group > .form-control').click().type('APURNAKHAN1412');
        cy.get('#kt_login_signin_submit').click();
        
        cy.log('Step 2: Waiting for the page to load.');
        cy.wait(2000);

        cy.log('Step 3: Selecting "AHO" from the dropdown.');
        cy.get('.ng-select-container').click();
        cy.get('.ng-option').contains('AHO').click();
        
        cy.log('Step 4: Navigating to the motor insurance module.');
        cy.get(':nth-child(3) > .menu-toggle > .menu-arrow').click();
        cy.get('.menu-item-open > .menu-submenu > .menu-subnav > :nth-child(4) > .menu-link > .menu-text').click();
        cy.wait(2000);
        
        cy.log('Step 5: Selecting a policy for endorsement.');
        cy.get(':nth-child(2) > :nth-child(9) > :nth-child(1) > .d-inline-block > #dropdownBasic1').click({ force: true });
        cy.get(':nth-child(2) > :nth-child(9) > :nth-child(1) > .d-inline-block > .dropdown-menu > :nth-child(3)').click({ force: true });

        cy.log('Step 6: Trying to upload an unsupported file format.');
        const unsupportedFile = 'unsupported_file.txt';
        cy.get('label > #fileUpload').attachFile(unsupportedFile);

        // Verify that an error message is displayed for unsupported file type
        cy.log('Step 7: Verifying error message for unsupported file upload.');
        cy.get('.alert-danger').should('be.visible').and('contain', 'Unsupported file format');
        
        cy.log('Completed test for unsupported file upload.');
    });
});
