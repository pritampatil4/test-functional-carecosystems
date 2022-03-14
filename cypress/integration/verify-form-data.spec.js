const {
  visitHomePage,
  loginSuccessful,
} = require("../page-objects/login-page");
const { isDashboardLoded } = require("../page-objects/dashboard-page");

describe("Verify Form Data Functionality", () => {
  //With Page Object Model Design Pattern
  it("Logs in and wait for dashboard page", () => {
    visitHomePage();
    loginSuccessful();
    isDashboardLoded();
  });

  //Without Page Object Model
  it("Opens UDS card and verify My caseload", () => {
    cy.get('[aria-label="launch app UDS/HB20 (dev)"]').then(function ($a) {
      const href = $a.prop("href");
      cy.visit(href); //work-around to respect cross-origin policy
      //Can also be done with session. Ref:https://docs.cypress.io/api/commands/session#Syntax
      //We just logged with UI again.
      loginSuccessful();
      cy.url().should("include", "landing");
      cy.xpath('//span[text()="My caseload"]').click();
      cy.get(".card-item-action-button").first().click();
      cy.xpath('//span[text()="View Form"]').click();
    });
  });
});
