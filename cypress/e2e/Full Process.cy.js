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

     
 // Select policy duration as "Full"
 cy.get('ng-select[formcontrolname="policyDuration"]').scrollIntoView().should('be.visible').click({ force: true });
 cy.get('.ng-dropdown-panel').should('be.visible').within(() => {
     cy.get('.ng-option').contains('Full').click({ force: true });
 });

 // Select valid from date as 30th July 2024
 cy.get('input[formcontrolname="validFrom"]').should('be.visible').clear().type('2024-07-30');
     // Select banca bank as "BRAC Bank PLC"
     cy.get('ng-select[formcontrolname="bancaBank"]').scrollIntoView().should('be.visible').click();
     cy.get('.ng-dropdown-panel .ng-option').contains('BRAC Bank PLC').click();

     // Select banca branch as "Agrabad Branch"
     cy.get('ng-select[formcontrolname="bancaBranch"]').scrollIntoView().should('be.visible').click();
     cy.get('.ng-dropdown-panel .ng-option').contains('Agrabad Branch').click();

     // Type banca employee ID as "3344552211"
     cy.get('input[formcontrolname="bancaEmployeeId"]').scrollIntoView().should('be.visible').type('3344552211');


  });
});
    