/// <reference types="cypress" />

describe('GDIC CI Motor Endorsement test', () => {


    
    it('Logs in and navigates through the motor insurance non financial-addition endorsement module', function () {
  
      // Set Viewport
      cy.viewport(1280, 720);
        //file to be uploaded path in project folder
     const p = 'Picture.png'
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
      cy.wait(2000)
      cy.get('.menu-item-active > .menu-link > .menu-text').click()
      cy.get(':nth-child(1) > :nth-child(9) > :nth-child(1) > .d-inline-block > #dropdownBasic1').click({ force: true })
      cy.get(':nth-child(4) > :nth-child(9) > :nth-child(1) > .d-inline-block > .dropdown-menu > :nth-child(3)').click({ force: true })

      // financial endorsement
      cy.get(':nth-child(1) > .select-group > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click()
      cy.get('.ng-option').contains('Financial').click();
      //Change head
      cy.get(':nth-child(2) > .select-group > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click()
      cy.get('.ng-option').contains('Change in Sum Insured').click();
      cy.get('.flex > .btn').click()
      //select premium mode
      cy.get('.pr-10 > .flex > :nth-child(3) > .select-group > .ng-select > .ng-select-container > .ng-value-container > .ng-input').click()
      cy.get('.ng-option').contains('Refund').click();
     // /select sum insured type
      cy.get(':nth-child(16) > .select-group > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click()
     cy.get('.ng-option').contains('Decrease').click();
       
     //upload file with attachFile
     cy.get('label > #fileUpload').attachFile(p)
    

      //get quote
      cy.get('.mt-5 > .btn-secondary').click()
      cy.wait(2000)
      cy.get('.justify-content-end > .btn-primary').click()
     // /select sum insured type
     cy.get(':nth-child(16) > .select-group > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click()
     cy.get('.ng-option').contains('Decrease').click();
      cy.get('.mt-5 > .btn-secondary').click()

  //select continue
  cy.get('.justify-content-end > .btn-primary').click()

  //clause continue
  cy.get('.form-footer > :nth-child(2) > .btn').click()

  //click on submit
  cy.get('.form-footer > :nth-child(3) > .btn').click()

  cy.get('.confirm__modal__content > .btn-primary').click()
   
     //click on upload
     //cy.get('#file-submit').click()
     //verify uploade

    });
    it('Logs in and navigates through the motor insurance financial-refund endorsement module', function () {
  
      // Set Viewport
      cy.viewport(1280, 720);
        //file to be uploaded path in project folder
     const p = 'Picture.png'
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
      cy.wait(2000)
      cy.get('.menu-item-active > .menu-link > .menu-text').click()
      cy.get(':nth-child(2) > :nth-child(9) > :nth-child(1) > .d-inline-block > #dropdownBasic1').click({ force: true })
      cy.get(':nth-child(2) > :nth-child(9) > :nth-child(1) > .d-inline-block > .dropdown-menu > :nth-child(3)').click({ force: true })

      // financial endorsement
      cy.get(':nth-child(1) > .select-group > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click()
      cy.get('.ng-option').contains('Financial').click();
      //Change head
      cy.get(':nth-child(2) > .select-group > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click()
      cy.get('.ng-option').contains('Change in Sum Insured').click();
      cy.get('.flex > .btn').click()
      //select premium mode
      cy.get('.pr-10 > .flex > :nth-child(3) > .select-group > .ng-select > .ng-select-container > .ng-value-container > .ng-input').click()
      cy.get('.ng-option').contains('Refund').click();
     // /select sum insured type
      cy.get(':nth-child(16) > .select-group > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click()
     cy.get('.ng-option').contains('Decrease').click();
     
    

      //get quote
      cy.get('.mt-5 > .btn-secondary').click()
      cy.wait(2000)
      cy.get('.justify-content-end > .btn-primary').click()
     // /select sum insured type
     cy.get(':nth-child(16) > .select-group > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click()
     cy.get('.ng-option').contains('Decrease').click();
      cy.get('.mt-5 > .btn-secondary').click()

  //select continue
  cy.get('.justify-content-end > .btn-primary').click()

  //clause continue
  cy.get('.form-footer > :nth-child(2) > .btn').click()

  //click on submit
  cy.get('.form-footer > :nth-child(3) > .btn').click()

  cy.get('.confirm__modal__content > .btn-primary').click()
    });
    it('Logs in and navigates through the motor insurance endorsement module-non financial', function () {
      // Set Viewport
      cy.viewport(1280, 720);
      
          // Set Viewport
          cy.viewport(1280, 720);
      
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
          cy.wait(2000)
          cy.get('.menu-item-active > .menu-link > .menu-text').click()
          cy.get(':nth-child(4) > :nth-child(9) > :nth-child(1) > .d-inline-block > #dropdownBasic1').click({ force: true })
          cy.get(':nth-child(4) > :nth-child(9) > :nth-child(1) > .d-inline-block > .dropdown-menu > :nth-child(3)').click({ force: true })
    
          //---Non financial endorsement
          cy.get(':nth-child(1) > .select-group > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click()
          cy.get('.ng-option').contains('Non Financial').click();
          //Change head
          cy.get(':nth-child(2) > .select-group > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click()
          cy.get('.ng-option').contains('Insured name change').click();
    
          //change name from popup
          cy.get('.mb-5 > .input-group > .form-control').type('Tamanna')
          //last name
          cy.get(':nth-child(2) > .input-group > .form-control').type('Amin')
    
          //changed name submission
          cy.get('#required-fields > .flex > .btn').click()
          // decline process
          cy.get('.btn-danger').click()
    
          //remove tesxt from field test
          cy.get('.mb-5 > .input-group > .form-control').clear()
          cy.get('.mb-5 > .input-group > .form-control').type('Taiba jannat')
    
          //updation
          cy.get('#required-fields > .flex > .btn').click()
          //accept
          cy.get('.confirm__modal__content > .btn-primary').click()
    
          //cy.screenshot('gender needed error')
          cy.get('#required-fields > .flex > .btn').click()
    
          //click on update
          cy.get('.confirm__modal__content > .btn-primary').click()
    
    
        });
})
  