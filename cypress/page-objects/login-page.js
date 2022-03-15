//Page Elements
const baseUrl = 'https://ssodev.carecoordinationsystems.com/';
const inputUsername = '#okta-signin-username';
const inputPassword = '#okta-signin-password';
const btnSubmit = '#okta-signin-submit';
const loginPage = '#okta-sign-in';

//Action Functions
const visitHomePage = () => {
    cy.visit(baseUrl);
}

const loginSuccessful = () => {
    cy.get(loginPage).should('be.visible');
    cy.get(inputUsername).type(Cypress.env('username')); //can be passed as .env vars
    cy.get(inputPassword).type(Cypress.env('password'));//can be passed as .env vars
    cy.get(btnSubmit).click();
}

module.exports = {visitHomePage, loginSuccessful}
