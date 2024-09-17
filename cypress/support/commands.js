// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

//Custom command for Hit the application URL.
Cypress.Commands.add("loginAndSetup", () => { 
    cy.visit('https://practicetestautomation.com/practice-test-login/');  
})


//Custom command for Log-In to the application.
Cypress.Commands.add("loginApplication", (UserName, Password) => { 
    cy.get('input#username').type(UserName);
    cy.get('input#password').type(Password);
    cy.get('#submit.btn').click();
})



//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

