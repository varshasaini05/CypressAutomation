class Login {

    user = "input#username";
    pass = "input#password";
    submit = "#submit.btn";
  
    setUsername(userName) {
      cy.get(this.user).type(userName);
    }
  
    setPassword(password) {
      cy.get(this.pass).type(password);
    }
  
    submitButtonClick() {
      cy.get(this.submit).click();
    }
  }
  
  export default Login;
  