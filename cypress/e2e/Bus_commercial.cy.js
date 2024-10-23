/// <reference types="cypress" />

// Utility function for login
function login(username, password) {
  cy.get('.mb-5 > .input-group > .form-control').type(username);
  cy.get(':nth-child(3) > .input-group > .form-control').type(password);
  cy.get('#kt_login_signin_submit').click();
  cy.wait(2000);
}

// Utility function for selecting from a dropdown by label
function selectDropdown(label, option) {
  cy.get(`ng-select[formcontrolname="${label}"]`).scrollIntoView().click();
  cy.get('.ng-dropdown-panel .ng-option').contains(option).click();
  cy.get(`ng-select[formcontrolname="${label}"]`).should('contain', option);
}

// Utility function for entering vehicle details
function enterVehicleDetails(vehicleNumber, engineNumber, description, year, seatCount) {
  cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > .input-group > .form-control').type(vehicleNumber);
  cy.get('input[formcontrolname="motorEngineAndChassisNumber"]').type(engineNumber);
  cy.get(':nth-child(2) > :nth-child(2) > :nth-child(4) > .input-group > .form-control').type(description);
  cy.get(':nth-child(2) > :nth-child(2) > :nth-child(5) > .input-group > .form-control').type(year);
  cy.get(':nth-child(12) > .input-group > .form-control').type(seatCount);
}

// Utility function for selecting checkboxes by index
function selectCheckboxes(sectionSelector, indexes) {
  indexes.forEach(index => {
    cy.get(`${sectionSelector} > :nth-child(${index}) > .checkbox-list > .checkbox > span`).click();
  });
}

// Function to navigate to motor insurance module
function navigateToMotorInsurance() {
  cy.get(':nth-child(3) > .menu-toggle > .menu-arrow').click();
  cy.get('.menu-item-open > .menu-submenu > .menu-subnav > :nth-child(4) > .menu-link > .menu-text').click();
  cy.wait(2000);
}

// Main test
describe('GDIC CI Motor test', () => {
  it('Logs in and navigates through the motor insurance module', function () {

    cy.viewport(1280, 720);
    cy.visit('https://cisqatest.green-delta.com/');
    login('22222', 'APURNAKHAN1412');

    selectDropdown('businessType', 'New');
    selectDropdown('businessStatus', 'Yes');
    selectDropdown('businessSource', 'D : Digital (For Digital Dept.)');
    selectDropdown('policyDuration', 'Full');
    selectDropdown('businessSector', 'Engineering');
    selectDropdown('businessSubSector', 'Light Engineering');

    // Type and select the contact number
    cy.get('div[role="combobox"][aria-haspopup="listbox"]').find('input[aria-autocomplete="list"]').last()
      .type('01538677800');
    cy.contains('01538677800').click();

    // Select other options
    selectDropdown('productCode', 'MTR');
    selectDropdown('documentType', 'Certificate');
    selectDropdown('currencyType', 'BDT');
    selectDropdown('mtrPlanName', 'Comprehensive');
    selectDropdown('mtrVehicleName', 'Double Deck Bus');

    enterVehicleDetails('Kha-3421', '1HGCM82633A004352', 'BRTC Double Deck 400', '2022', '62');

    selectDropdown('mtrCcTon', 'SEAT');
    selectDropdown('motorTermsOfUseId', 'USE ONLY FOR SOCIAL PURPOSE AND IN CONNECTION WITH THE INSUREDS BUSINESS -- 1233');
    selectDropdown('mtrVehicleType', 'Commercial');

    // Enter additional information
    cy.get(':nth-child(15) > .input-group > .form-control').type('2');
    cy.get(':nth-child(2) > .mt-10 > :nth-child(2) > :nth-child(2) > .input-group > .form-control').type('1');
    cy.get(':nth-child(3) > :nth-child(2) > .input-group > .form-control').type('1');

    // Select options for gross premium and exclusions
    selectCheckboxes(':nth-child(2) > .border > .flex', [1, 2, 3]);
    selectCheckboxes(':nth-child(3) > .border > .flex', [1, 2]);

    // Set sum insured value and proceed
    cy.get(':nth-child(16) > .input-group > .form-control').type('200000');
    cy.get('.flex.mt-10 > :nth-child(2) > .select-group > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input').type('{enter}');

    // Get quotation, submit, and screenshot
    cy.get('.mt-5 > .btn-secondary').click();
    cy.screenshot('Double Deck Bus');
    cy.get('.btn-primary').click();

    // Add clauses and finalize
    cy.get(':nth-child(1) > .checkbox-list > .checkbox > span').click();
    cy.get('.mr-10 > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input').type('2001{enter}');
    cy.get('.ng-star-inserted > .btn').click();
    cy.get('.form-footer > :nth-child(2) > .btn').click();

    cy.screenshot('Preview Double Deck Bus');

    // Navigate back and modify risk
    cy.get('.form-footer > :nth-child(1) > .btn').click();
    cy.get('.mr-5 > .btn').click();
    selectCheckboxes(':nth-child(3) > .border > .flex', [1]);
    cy.get('.btn-primary').click();

    cy.wait(2000);
    cy.get('.mt-5 > .btn-primary').click();
  });
});
