/// <reference types="cypress" />

describe('GDIC CI Motor test', () => {
  it('Logs in and navigates through the motor insurance module', function() {
      // Visit the login page
      cy.visit('https://cisqatest.green-delta.com/');

      // Perform login
      cy.get('.mb-5 > .input-group > .form-control').click().type('22222');
      cy.get(':nth-child(3) > .input-group > .form-control').click().type('APURNAKHAN1412');
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

      cy.get('.ng-dropdown-panel .ng-option', { timeout: 10000 }).contains('01923423233').click();
      cy.wait(2000)
      cy.get('ng-select[formcontrolname="businessType"]').scrollIntoView().should('be.visible').click();
      cy.get('.ng-dropdown-panel .ng-option').contains('New').click();
      cy.get('.form-footer > :nth-child(2) > .btn').click({force:true})
   
 // Open the product code dropdown
cy.get('ng-select[formcontrolname="productCode"]', { timeout: 10000 })
.should('be.visible')
.click();  // Open the dropdown

// Wait for and select the option
cy.get('ng-dropdown-panel', { timeout: 10000 })
.should('be.visible')
.find('.ng-option')
.contains('MTR', { matchCase: true })
.click();  // Click on the option

// Verify the selected value
cy.get('ng-select[formcontrolname="productCode"]')
.should('contain.text', 'MTR');  // Verify the selection

      
   // Select Document Type as "Certificate"
   cy.get('ng-select[formcontrolname="documentType"]').scrollIntoView().should('be.visible').click();

   // Wait for the dropdown options to load and select "Certificate"
   cy.get('.ng-dropdown-panel .ng-option', { timeout: 10000 }).should('be.visible');
   cy.get('.ng-dropdown-panel .ng-option').contains('Certificate').click();

   // Wait for the selection to be applied
   cy.wait(2000);
     // Select Currency Type as "BDT"

 cy.log('Attempting to select BDT in Currency Type');
     cy.get('ng-select[formcontrolname="currencyType"]').scrollIntoView().should('be.visible').click();

     // Wait for the dropdown options to load
     cy.get('.ng-dropdown-panel .ng-option', { timeout: 10000 }).should('be.visible');

     // Select "BDT" from the dropdown options
     cy.get('.ng-dropdown-panel .ng-option').contains('BDT').click({ force: true });

     // Verify the BDT selection
     cy.get('ng-select[formcontrolname="currencyType"]').should('contain', 'BDT', { timeout: 10000 });
     // Select Plan Type as "Comprehensive"
cy.log('Attempting to select Comprehensive in Plan Type');
cy.get('ng-select[formcontrolname="mtrPlanName"]').scrollIntoView().should('be.visible').click();

// Wait for the dropdown options to load
cy.get('.ng-dropdown-panel .ng-option', { timeout: 10000 }).should('be.visible');


// Ensure we select the exact "Comprehensive" and not any variant
cy.get('.ng-dropdown-panel .ng-option').each(($el, index, $list) => {
  const optionText = $el.text().trim();
  cy.log(`Plan Type option ${index}: ${optionText}`);

  if (optionText === 'Comprehensive') {
      cy.wrap($el).scrollIntoView().click({ force: true });
      cy.log('Comprehensive option found and clicked!');
  }
});

// Verify the Comprehensive selection
cy.get('ng-select[formcontrolname="mtrPlanName"]').should('contain', 'Comprehensive', { timeout: 10000 });

// Select Vehicle Name as "Motor Cycle"
cy.log('Attempting to select Motor Cycle in Vehicle Name');
cy.get('ng-select[formcontrolname="mtrVehicleName"]').scrollIntoView().should('be.visible').click();

// Wait for the dropdown options to load
cy.get('.ng-dropdown-panel .ng-option', { timeout: 10000 }).should('be.visible');

// Ensure we select the exact "Motor Cycle" option
cy.get('.ng-dropdown-panel .ng-option').each(($el, index, $list) => {
  const optionText = $el.text().trim();
  cy.log(`Vehicle Name option ${index}: ${optionText}`);

  if (optionText === 'Motor Cycle') {
      cy.wrap($el).scrollIntoView().click({ force: true });
      cy.log('Motor Cycle option found and clicked!');
  }
});

// Verify the Motor Cycle selection
cy.get('ng-select[formcontrolname="mtrVehicleName"]').should('contain', 'Motor Cycle', { timeout: 10000 });
//Vehicle Registration Number
cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > .input-group > .form-control').type('Kha-3421');
//Vehicle engine and chesis number
// Enter Vehicle Engine and Chassis Number
cy.log('Entering Vehicle Engine and Chassis Number');
cy.get('input[formcontrolname="motorEngineAndChassisNumber"]')
  .scrollIntoView()
  .should('be.visible')
  .type('1HGCM82633A004352', { force: true });

// Verify that the input contains the correct value
cy.get('input[formcontrolname="motorEngineAndChassisNumber"]')
  .should('have.value', '1HGCM82633A004352', { timeout: 10000 });

  //Vehicle make type and body
  cy.get(':nth-child(2) > :nth-child(2) > :nth-child(4) > .input-group > .form-control').type('two wheeler is Bajaj Dominar 400')

  //Manufacturer year
  cy.get(':nth-child(2) > :nth-child(2) > :nth-child(5) > .input-group > .form-control').type('2022')

  // Select "CC" from the dropdown for Motor CC / Ton / Seat
cy.log('Selecting Motor CC / Ton / Seat as CC');

// Open the dropdown if it's not already open
cy.get('ng-select[formcontrolname="mtrCcTon"]')
  .scrollIntoView()
  .should('be.visible')
  .click();  // Open the dropdown

// Select "CC" from the dropdown options
cy.get('ng-dropdown-panel')
  .find('.ng-option')
  .contains('CC')  // Find the option with text "CC"
  .click();        // Click on the option

// Verify the selected value
cy.get('ng-select[formcontrolname="mtrCcTon"]')
  .should('contain', 'CC');
//CC value
  cy.get(':nth-child(12) > .input-group > .form-control').type('270')

 // Open the dropdown if it's not already open
cy.get('ng-select[formcontrolname="motorTermsOfUseId"]')
.scrollIntoView()
.should('be.visible')
.click();  // Open the dropdown

// Wait for the dropdown panel to have items
cy.get('ng-dropdown-panel')
.should('exist')
.find('.ng-option')
.should('have.length.greaterThan', 0)  // Ensure there are items
.contains('USE ONLY FOR SOCIAL PURPOSE AND IN CONNECTION WITH THE INSUREDS BUSINESS -- 1233')
.click();  // Click on the option

// Open the dropdown if it's not already open
cy.get('ng-select[formcontrolname="mtrVehicleType"]')  // Adjust the formcontrolname or selector as needed
  .click();  // Open the dropdown

// Select the "Commercial" option
cy.get('ng-dropdown-panel')
  .find('.ng-option')
  .contains('Commercial')
  .click();  // Click on the option

// Verify that the option is selected
cy.get('ng-select[formcontrolname="mtrVehicleType"]')
  .should('contain.text', 'Commercial');

//Seat Capacity
cy.get(':nth-child(15) > .input-group > .form-control').type('2')

//Passenger Info
cy.get(':nth-child(2) > .mt-10 > :nth-child(2) > :nth-child(2) > .input-group > .form-control').type('1');
//Driver info
cy.get(':nth-child(3) > :nth-child(2) > .input-group > .form-control').type('1');

//Gross premium selection
cy.get(':nth-child(2) > .border > .flex > :nth-child(1) > .checkbox-list > .checkbox > span').click()
cy.get(':nth-child(2) > .border > .flex > :nth-child(2) > .checkbox-list > .checkbox > span').click()
cy.get(':nth-child(2) > .border > .flex > :nth-child(3) > .checkbox-list > .checkbox > span').click()

//Comprehensive risk exclusion
cy.get(':nth-child(3) > .border > .flex > :nth-child(1) > .checkbox-list > .checkbox > span').click()
cy.get(':nth-child(3) > .border > .flex > :nth-child(2) > .checkbox-list > .checkbox > span').click()

//Sum insured value
cy.get(':nth-child(16) > .input-group > .form-control').type('200000')
//MTR
cy.get('.flex.mt-10 > :nth-child(2) > .select-group > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input').type('{enter}')

  //get quotation
  cy.get('.mt-5 > .btn-secondary').click() 
  cy.screenshot()
 //submission 
  cy.get('.btn-primary').click()

  //Clauses I Mort Bank
  cy.get(':nth-child(1) > .checkbox-list > .checkbox > span').click()
  //ADD CLAUSES ENTRY
  cy.get('.mr-10 > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input').type('2001{enter}')
   //add clause
   cy.get('.ng-star-inserted > .btn').click()  
   
   //Submit form (add clause)
   cy.get('.form-footer > :nth-child(2) > .btn').click()
   cy.screenshot('Preview')
// going back option checking
   cy.get('.form-footer > :nth-child(1) > .btn').click()
   //again back option for going prod based info
   cy.get('.mr-5 > .btn').click()
// modify risk then see calculation(add a risk)
cy.get(':nth-child(3) > .border > .flex > :nth-child(1) > .checkbox-list > .checkbox > span').click()
cy.get('.btn-primary').click()
cy.wait(2000)
//get new quotation
cy.get('.mt-5 > .btn-secondary').click()

//final preview
cy.get('.mt-5 > .btn-secondary').click()

//add screenshot

cy.screenshot('Riot strike added preview')
cy.wait(1000)
//go next to add clauses page
cy.get('.btn-primary').click()
cy.wait(3000)
cy.get('.form-footer > :nth-child(2) > .btn').click()
//preview page 
cy.get('.form-footer > :nth-child(2) > .btn').click()


//are you sure? as yes selection
cy.get('.confirm__modal__content > .btn-primary').click()
cy.screenshot('submitted')

  });
});
