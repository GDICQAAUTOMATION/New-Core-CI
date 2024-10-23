class LoginPage {
    visit() {
      cy.visit('https://cisqatest.green-delta.com/');
    }
  
    fillUsername(username) {
      cy.get('.mb-5 > .input-group > .form-control').type(username);
    }
  
    fillPassword(password) {
      cy.get(':nth-child(3) > .input-group > .form-control').type(password);
    }
  
    submit() {
      cy.get('#kt_login_signin_submit').click();
    }
  
    login(username, password) {
      this.visit();
      this.fillUsername(username);
      this.fillPassword(password);
      this.submit();
    }
  }
  
  export default LoginPage;
  