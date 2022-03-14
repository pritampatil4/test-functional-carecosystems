
const appsTitle = '#dashboard-my-apps-title';
const btnStrongUDSText = '[content="UDS/HB20 (dev)"]';


const clickOnStrongUDSBtn = () => {
    cy.get(appsTitle).should('be.visible');
    cy.get(btnStrongUDSText).click();
}

const isDashboardLoded = () => {
    cy.get(appsTitle).should('be.visible');
}

module.exports = {clickOnStrongUDSBtn, isDashboardLoded}