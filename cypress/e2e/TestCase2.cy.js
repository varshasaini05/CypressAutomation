import Login from "../PageObjects/LoginPage";

describe('Test Suite Login', () => {

  before(() => {
    // Code to run before all tests (e.g., set up, login)
  });

  beforeEach(() => {
    // Code to run before each test (e.g., resetting the state, visiting pages)
    cy.visit('https://practicetestautomation.com/practice-test-login/');
  });

  it('should login with data from fixture', function () {
    // Load data from fixture file
    cy.fixture('loginData').then((data) => {
      // Create an instance of the Login class (previously referred to as LoginPage)
      const loginPage = new Login();
      
      // Use the fixture data in the Page Object methods
      loginPage.setUsername(data.userName); 
      loginPage.setPassword(data.password);
      loginPage.submitButtonClick();
    });
  });

  afterEach(() => {
    // Code to run after each test (e.g., clean-up)
  });

  after(() => {
    // Code to run after all tests are done
  });

});
