/// <reference types="cypress" />

describe('GDIC CI Motor test', () => {
    
    before(() => {
        // Visit the login page and perform login
        cy.visit('https://cisqatest.green-delta.com/');
        cy.login('22222', 'UmmaHabiba1412');
    });

    it('Logs in and navigates through the motor insurance module', function() {
        // Select "AHO" from the dropdown
        cy.selectDropdown('.ng-select-container', 'AHO');

        // Navigate to the motor insurance module
        cy.get(':nth-child(3) > .menu-toggle > .menu-arrow').click();
        cy.get('.menu-item-open > .menu-submenu > .menu-subnav > :nth-child(4) > .menu-link > .menu-text').click();
        cy.get('.card-toolbar > .btn').click();
        cy.get(':nth-child(1) > .sorting_1 > .checkbox > span').click();
        cy.get('.flex-between > [style="align-items: center;"] > :nth-child(2) > .btn').click();
        cy.get('.form-footer > :nth-child(2) > .btn').click();

        // Select business type and fill out motor insurance form
        cy.selectDropdown('ng-select[formcontrolname="businessType"]', 'New');

        cy.fillMotorInsuranceForm({
            businessType: 'New',
            businessStatus: 'Yes',
            businessSource: 'D : Digital (For Digital Dept.)',
            policyDuration: 'Full',
            validFrom: '2023-08-05',
            businessSector: 'Engineering',
            businessSubSector: 'Light Engineering',
            contactNumber: '01923423233',
            documentType: 'Certificate',
            currencyType: 'BDT',
            planType: 'Comprehensive',
            vehicleName: 'Motor Cycle',
            vehicleRegistrationNumber: 'Kha-3421',
            engineAndChassisNumber: '1HGCM82633A004352',
            vehicleMakeTypeAndBody: 'two wheeler is Bajaj Dominar 400',
            manufacturerYear: '2022',
            motorCcTon: 'CC',
            motorCcValue: '270',
            motorTermsOfUse: 'USE ONLY FOR SOCIAL PURPOSE AND IN CONNECTION WITH THE INSUREDS BUSINESS -- 1233',
            motorVehicleType: 'Commercial',
            seatCapacity: '2',
            passengerInfo: '1',
            driverInfo: '1',
            productCode: 'MTR',
            sumInsured: '200000'
        });

        // Quotation and submission process
        cy.getQuotation();
        cy.addClause('2001');
        cy.submitForm();
        cy.modifyRiskAndRecalculate();
        cy.submitForm(); // Use submitForm consistently
    });
});

// Custom commands
Cypress.Commands.add('login', (username, password) => {
    cy.get('.mb-5 > .input-group > .form-control').type(username);
    cy.get(':nth-child(3) > .input-group > .form-control').type(password);
    cy.get('#kt_login_signin_submit').click();
    cy.wait(2000); // Wait for page load
});

Cypress.Commands.add('selectDropdown', (selector, option) => {
    cy.get(selector).click();
    cy.get('.ng-option').contains(option).click();
    cy.get(selector).should('contain', option);
});

Cypress.Commands.add('fillMotorInsuranceForm', (data) => {
    cy.selectDropdown('ng-select[formcontrolname="businessStatus"]', data.businessStatus);
    cy.selectDropdown('ng-select[formcontrolname="businessSource"]', data.businessSource);

    cy.get('[formControlName="policyDuration"]').scrollIntoView().click({ force: true });
    cy.contains(data.policyDuration).click();

    cy.get(':nth-child(4) > .select-group > .form-control').scrollIntoView().click();
    cy.get(`:nth-child(5) > :nth-child(7) > .ng-star-inserted`).click(); // Adjust based on date

    cy.selectDropdown('ng-select[formcontrolname="businessSector"]', data.businessSector);
    cy.selectDropdown('ng-select[formcontrolname="businessSubSector"]', data.businessSubSector);
    cy.selectDropdown('.ng-select[formcontrolname="contactNumberId"]', data.contactNumber);

    cy.selectDropdown('ng-select[formcontrolname="productCode"]', data.productCode);
    cy.selectDropdown('ng-select[formcontrolname="documentType"]', data.documentType);
    cy.selectDropdown('ng-select[formcontrolname="currencyType"]', data.currencyType);
    cy.selectDropdown('ng-select[formcontrolname="mtrPlanName"]', data.planType);
    cy.selectDropdown('ng-select[formcontrolname="mtrVehicleName"]', data.vehicleName);

    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > .input-group > .form-control').type(data.vehicleRegistrationNumber);
    cy.get('input[formcontrolname="motorEngineAndChassisNumber"]').type(data.engineAndChassisNumber);
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(4) > .input-group > .form-control').type(data.vehicleMakeTypeAndBody);
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(5) > .input-group > .form-control').type(data.manufacturerYear);

    cy.selectDropdown('ng-select[formcontrolname="mtrCcTon"]', data.motorCcTon);
    cy.get(':nth-child(12) > .input-group > .form-control').type(data.motorCcValue);

    cy.selectDropdown('ng-select[formcontrolname="motorTermsOfUseId"]', data.motorTermsOfUse);
    cy.selectDropdown('ng-select[formcontrolname="mtrVehicleType"]', data.motorVehicleType);

    cy.get(':nth-child(15) > .input-group > .form-control').type(data.seatCapacity);
    cy.get(':nth-child(2) > .mt-10 > :nth-child(2) > :nth-child(2) > .input-group > .form-control').type(data.passengerInfo);
    cy.get(':nth-child(3) > :nth-child(2) > .input-group > .form-control').type(data.driverInfo);

    cy.get(':nth-child(2) > .border > .flex > :nth-child(1) > .checkbox-list > .checkbox > span').click();
    cy.get(':nth-child(2) > .border > .flex > :nth-child(2) > .checkbox-list > .checkbox > span').click();
    cy.get(':nth-child(2) > .border > .flex > :nth-child(3) > .checkbox-list > .checkbox > span').click();
    cy.get(':nth-child(3) > .border > .flex > :nth-child(1) > .checkbox-list > .checkbox > span').click();
    cy.get(':nth-child(3) > .border > .flex > :nth-child(2) > .checkbox-list > .checkbox > span').click();

    cy.get(':nth-child(16) > .input-group > .form-control').type(data.sumInsured);
});

Cypress.Commands.add('getQuotation', () => {
    cy.get('.mt-5 > .btn-secondary').click();
    cy.screenshot();
});

Cypress.Commands.add('addClause', (clauseCode) => {
    cy.get('.mr-10 > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input').type(`${clauseCode}{enter}`);
    cy.get('.ng-star-inserted > .btn').click();
    cy.get('.form-footer > :nth-child(2) > .btn').click();
    cy.screenshot('Preview');
});

Cypress.Commands.add('modifyRiskAndRecalculate', () => {
    cy.get('.form-footer > :nth-child(1) > .btn').click();
    cy.get('.mr-5 > .btn').click();
    cy.get(':nth-child(3) > .border > .flex > :nth-child(1) > .checkbox-list > .checkbox > span').click();
    cy.get('.btn-primary').click();
    cy.wait(2000);
    cy.get('.mt-5 > .btn-secondary').click();
    cy.get('.mt-5 > .btn-secondary').click();
    cy.screenshot('Riot strike added preview');
    cy.wait(1000);
    cy.get('.btn-primary').click();
    cy.wait(3000);
});

Cypress.Commands.add('submitForm', () => {
    cy.get('.form-footer > :nth-child(2) > .btn').click();
    cy.get('.form-footer > :nth-child(2) > .btn').click();
    cy.get('.confirm__modal__content > .btn-primary').click();
    cy.screenshot('submitted');
});
