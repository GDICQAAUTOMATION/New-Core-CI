class MotorInsurancePage {
    selectDropdownOption(selector, optionText) {
      cy.get(selector).scrollIntoView().click();
      cy.get('.ng-dropdown-panel .ng-option').contains(optionText).click();
    }
  
    fillInputField(selector, value) {
      cy.get(selector).scrollIntoView().clear().type(value);
    }
  
    clickButton(buttonText) {
      cy.contains('button', buttonText).click();
    }
  
    clickCheckbox(selector) {
      cy.get(selector).click();
    }
  
    navigateToMotorInsurance() {
      cy.get(':nth-child(3) > .menu-toggle > .menu-arrow').click();
      cy.get('.menu-item-open > .menu-submenu > .menu-subnav > :nth-child(4) > .menu-link').click();
    }
  
    createNewInsuranceForm() {
      cy.get('.card-toolbar > .btn').click();
    }
  
    fillBusinessInformation() {
      this.selectDropdownOption('ng-select[formcontrolname="businessType"]', 'New');
      this.selectDropdownOption('ng-select[formcontrolname="businessStatus"]', 'Yes');
      this.selectDropdownOption('ng-select[formcontrolname="businessSource"]', 'D : Digital (For Digital Dept.)');
      this.selectDropdownOption('[formControlName="policyDuration"]', 'Full');
    }
  
    fillMotorInsuranceDetails() {
      this.selectDropdownOption('ng-select[formcontrolname="productCode"]', 'MTR');
      this.selectDropdownOption('ng-select[formcontrolname="documentType"]', 'Certificate');
      this.selectDropdownOption('ng-select[formcontrolname="currencyType"]', 'BDT');
      this.selectDropdownOption('ng-select[formcontrolname="mtrPlanName"]', 'Comprehensive');
      this.selectDropdownOption('ng-select[formcontrolname="mtrVehicleName"]', 'Motor Cycle');
    }
  
    fillVehicleDetails() {
      this.fillInputField(':nth-child(2) > :nth-child(2) > :nth-child(2) > .input-group > .form-control', 'Kha-3421');
      this.fillInputField('input[formcontrolname="motorEngineAndChassisNumber"]', '1HGCM82633A004352');
      this.fillInputField(':nth-child(2) > :nth-child(2) > :nth-child(4) > .input-group > .form-control', 'two wheeler is Bajaj Dominar 400');
      this.fillInputField(':nth-child(2) > :nth-child(2) > :nth-child(5) > .input-group > .form-control', '2022');
      this.selectDropdownOption('ng-select[formcontrolname="mtrCcTon"]', 'CC');
      this.fillInputField(':nth-child(12) > .input-group > .form-control', '270');
      this.selectDropdownOption('ng-select[formcontrolname="motorTermsOfUseId"]', 'USE ONLY FOR SOCIAL PURPOSE AND IN CONNECTION WITH THE INSUREDS BUSINESS -- 1233');
      this.selectDropdownOption('ng-select[formcontrolname="mtrVehicleType"]', 'Commercial');
      this.fillInputField(':nth-child(15) > .input-group > .form-control', '2');
      this.fillInputField(':nth-child(2) > .mt-10 > :nth-child(2) > :nth-child(2) > .input-group > .form-control', '1');
      this.fillInputField(':nth-child(3) > :nth-child(2) > .input-group > .form-control', '1');
    }
  
    fillSumAndSubmit() {
      this.fillInputField(':nth-child(16) > .input-group > .form-control', '200000');
      this.clickButton('Get Quotation');
      cy.screenshot();
      this.clickButton('Submit');
    }
  
    addClauseAndSubmit() {
      this.clickCheckbox(':nth-child(1) > .checkbox-list > .checkbox > span');
      this.fillInputField('.mr-10 > .ng-select > .ng-select-container > .ng-input > input', '2001{enter}');
      this.clickButton('Add Clause');
      this.clickButton('Save');
      cy.screenshot('submitted');
    }
  }
  
  export default MotorInsurancePage;
  