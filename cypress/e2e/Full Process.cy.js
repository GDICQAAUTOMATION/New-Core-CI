/// <reference types="cypress" />

describe('GDIC CI Motor test', () => {
  it('Logs in and navigates through the motor insurance module', function() {
      // Visit the login page
      cy.visit('https://cisqatest.green-delta.com/');

      // Perform login perfect
      cy.get('.mb-5 > .input-group > .form-control').click().type('22222');
      cy.get(':nth-child(3) > .input-group > .form-control').click().type('UmmaHabiba1412');
      cy.get('#kt_login_signin_submit').click();

      // Wait for the page to load
      cy.wait(2000); // Adjust based on actual page load time
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

cy.get('.form-footer > :nth-child(2) > .btn').click()
// Interact with Business sector dropdown
cy.get('ng-select[formcontrolname="businessSector"]').scrollIntoView().should('be.visible').click();
cy.get('.ng-dropdown-panel .ng-option').contains('Engineering').click();

// Interact with Business sub sector dropdown
cy.get('ng-select[formcontrolname="businessSubSector"]').scrollIntoView().should('be.visible').click();
cy.get('.ng-dropdown-panel .ng-option').contains('Light Engineering').click();
// Interact with Business Type dropdown and select "New"
cy.get('ng-select[formcontrolname="businessType"]').scrollIntoView().should('be.visible').click();
cy.get('.ng-dropdown-panel .ng-option').contains('New').click();

// Interact with Business Status dropdown and select "Yes"
cy.get('ng-select[formcontrolname="businessStatus"]').scrollIntoView().should('be.visible').click();
cy.get('.ng-dropdown-panel .ng-option').contains('Yes').click();
 // Interact with Business sector dropdown
cy.get('ng-select[formcontrolname="businessSector"]').scrollIntoView().should('be.visible').click();
cy.get('.ng-dropdown-panel .ng-option').contains('Engineering').click();
// Interact with Business sub sector dropdown
cy.get('ng-select[formcontrolname="businessSubSector"]').scrollIntoView().should('be.visible').click();
cy.get('.ng-dropdown-panel .ng-option').contains('Light Engineering').click();
// Interact with Business Source dropdown and select "A:Bancassurance"
cy.get('ng-select[formcontrolname="businessSource"]').scrollIntoView().should('be.visible').click();
cy.get('.ng-dropdown-panel .ng-option').contains('A : Bancassurance').click();

cy.wait(9000); // Adjust based on actual page load time

cy.get('ng-select[formcontrolname="policyDuration"]').click({ force: true });
cy.screenshot('policy-duration-clicked');

cy.get('ng-dropdown-panel', { timeout: 10000 }).should('exist').and('be.visible');
cy.screenshot('policy-duration-dropdown-visible');

cy.get('ng-dropdown-panel .ng-option').contains('Full').click({ force: true });
cy.screenshot('policy-duration-full-selected');

  });
});
