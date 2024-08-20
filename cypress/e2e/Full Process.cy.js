/// <reference types="cypress" />

describe('GDIC CI Motor test', () => {
  it('Logs in and navigates through the motor insurance module', function() {
      // Visit the login page
      cy.visit('https://cisqatest.green-delta.com/');

      // Perform login
      cy.get('.mb-5 > .input-group > .form-control').click().type('22222');
      cy.get(':nth-child(3) > .input-group > .form-control').click().type('UmmaHabiba1412');
      cy.get('#kt_login_signin_submit').click();

      // Wait for the page to load
      cy.wait(2000);

      // Open the dropdown menu and select "AHO"
      cy.get('.ng-select-container').click();
      cy.get('.ng-option').contains('AHO').click();
      cy.get('.ng-select-container').should('contain', 'AHO');

      // Navigate to the motor insurance module
      cy.get(':nth-child(3) > .menu-toggle > .menu-arrow').click();
      cy.get('.menu-item-open > .menu-submenu > .menu-subnav > :nth-child(4) > .menu-link > .menu-text').click();
      cy.get('.card-toolbar > .btn').click();
      cy.get(':nth-child(1) > .sorting_1 > .checkbox > span').click();
      cy.get('.flex-between > [style="align-items: center;"] > :nth-child(2) > .btn').click();
      cy.get('.form-footer > :nth-child(2) > .btn').click();

      cy.get('ng-select[formcontrolname="businessType"]').scrollIntoView().should('be.visible').click();
      cy.get('.ng-dropdown-panel .ng-option').contains('New').click();

      cy.get('ng-select[formcontrolname="businessStatus"]').scrollIntoView().should('be.visible').click();
      cy.get('.ng-dropdown-panel .ng-option').contains('Yes').click();

      cy.get('ng-select[formcontrolname="businessSource"]').scrollIntoView().should('be.visible').click();
      cy.get('.ng-dropdown-panel .ng-option').contains('D : Digital (For Digital Dept.)').click();

      cy.wait(2000);

      // Interact with "Policy Duration" dropdown
      cy.get('[formControlName="policyDuration"]').scrollIntoView().should('be.visible').click({ force: true });
      cy.wait(2000);
      cy.contains("Full").click();

      // Interact with "validFrom" date input
      cy.get(':nth-child(4) > .select-group > .form-control').scrollIntoView().should('be.visible').click();
      cy.get(':nth-child(5) > :nth-child(7) > .ng-star-inserted').click();

      // Open the "Other Contact Number" dropdown
      cy.get('.ng-select[formcontrolname="contactNumberId"]').scrollIntoView().should('be.visible').click({ force: true });
      cy.wait(5000);  // Wait for dropdown options to load

      // Interact with dropdowns
      cy.get('ng-select[formcontrolname="businessSector"]').scrollIntoView().should('be.visible').click();
      cy.get('.ng-dropdown-panel .ng-option').contains('Engineering').click();

      cy.get('ng-select[formcontrolname="businessSubSector"]').scrollIntoView().should('be.visible').click();
      cy.get('.ng-dropdown-panel .ng-option').contains('Light Engineering').click();

      cy.get('.ng-dropdown-panel', { timeout: 10000 }).should('be.visible').within(() => {
        cy.get('.ng-option').each(($el, index, $list) => {
          cy.log($el.text());
        });
      });

      cy.get('.ng-dropdown-panel .ng-option', { timeout: 10000 }).contains('01924427666').click();
      cy.wait(2000)
      cy.get('ng-select[formcontrolname="businessType"]').scrollIntoView().should('be.visible').click();
      cy.get('.ng-dropdown-panel .ng-option').contains('New').click();
      cy.get('.form-footer > :nth-child(2) > .btn').click({force:true})
      //---------------------2nd form submitted----------------------------------------------------//
  });
});
