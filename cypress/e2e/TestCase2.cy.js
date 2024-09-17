import Login from "../PageObjects/LoginPage";

describe('Test Suite Login', () => {

  before(() => {
    // Code to run before all tests (e.g., set up, login)
  });

  beforeEach(() => {
    // Code to run before each test (e.g., resetting the state, visiting pages)
    cy.loginAndSetup();
  });

  //Testcase : use POM Structure
  it('Testcase to login using POM Structure with Fixtures', function () {

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

  //Testcase : use custom command
  it("Testcase to Login via login custom command with Fixtures", () =>{
     // Load data from fixture file
     cy.fixture('loginData').then((data) => {
     cy.loginApplication(data.userName,data.password);
  });
  });

  afterEach(() => {
    // Code to run after each test (e.g., clean-up)
  });

  after(() => {
    // Code to run after all tests are done
  });

});
