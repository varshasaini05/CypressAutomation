describe('Test Suite Name', () => {

  before(() => {
    // Code to run before all tests (e.g., set up, login)
  });

  beforeEach(() => {
    // Code to run before each test (e.g., resetting the state, visiting pages)
    cy.visit('https://www.amazon.com/');
  });

  it('Test Case 1: Check title of the page', () => {
    // Assertions for title
    cy.title().should('eq', 'Amazon.com. Spend less. Smile more.');
  });

  afterEach(() => {
    // Code to run after each test (e.g., clean-up)
  });

  after(() => {
    // Code to run after all tests are done
  });

});
