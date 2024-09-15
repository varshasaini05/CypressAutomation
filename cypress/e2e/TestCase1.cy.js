describe('Test Suite Name', () => {

    before(() => {
      // Code to run before all tests (e.g., set up, login)
    });
  
    beforeEach(() => {
      // Code to run before each test (e.g., resetting the state, visiting pages)
      cy.visit('https://example.com');
    });
  
    it('Test Case 1: Check title of the page', () => {
      // Assertions for title
      cy.title().should('eq', 'Expected Page Title');
    });
  
    it('Test Case 2: Fill a form and submit', () => {
      // Finding and interacting with DOM elements
      cy.get('#username').type('testuser');
      cy.get('#password').type('password123');
      cy.get('form').submit();
  
      // Assertion to check if the user is redirected
      cy.url().should('include', '/dashboard');
    });
  
    afterEach(() => {
      // Code to run after each test (e.g., clean-up)
    });
  
    after(() => {
      // Code to run after all tests are done
    });
  
  });
  