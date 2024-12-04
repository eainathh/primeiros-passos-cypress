import userData from '../fixtures/userData.json'

describe('Orange HRM Testes', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    dashboardGrid: ".orangehrm-dashboard-grid",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialsAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: '[name="firstName"]',
    lastNameField: '[name="lastName"]',
    genericField: '.oxd-input--active',
    dateField: "[placeholder='yyyy-dd-mm']",
    closeButton: '.--close',
    select: '.oxd-select-text--active',
    selectgeneric: '.oxd-select-text'



  }

  
  it.only('User info Update - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click();
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index');
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastName')
    // cy.get(selectorsList.genericField).eq(4).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('DriversLicenseTeste')
    cy.get(selectorsList.genericField).eq(6).clear().type('2025-03-10')
    cy.get(selectorsList.closeButton).click()
    cy.get(selectorsList.select).eq(0).click()
    cy.get('.oxd-select-dropdown').should('be.visible')
    cy.get('.oxd-select-dropdown > :nth-child(6)').click()
    cy.get(selectorsList.select).eq(1).click()
    cy.get('.oxd-select-dropdown').should('be.visible')
    cy.get('.oxd-select-dropdown > :nth-child(4)').click()



  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialsAlert)
  })
})

