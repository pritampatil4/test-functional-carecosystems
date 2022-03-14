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
    cy.get(inputUsername).type('UDSAUTOQAUSER');
    cy.get(inputPassword).type('91KYd#8oi!6#8DhMc$8DkP5OpUsl');
    cy.get(btnSubmit).click();
}

module.exports = {visitHomePage, loginSuccessful}
