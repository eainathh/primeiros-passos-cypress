class MyInfoPage {

    selectorsList() {
        const selectors = {
            firstNameField: '[name="firstName"]',
            lastNameField: '[name="lastName"]',
            genericField: '.oxd-input--active',
            dateField: "[placeholder='yyyy-dd-mm']",
            closeButton: '.--close',
            select: '.oxd-select-text--active',
            selectgeneric: '.oxd-select-text'
        }
        return selectors
    }

    fillPersonalDetails(firstName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(otherId, driversLicenseDate, licenseExpiryDate) {
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseDate)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(licenseExpiryDate)
        cy.get(this.selectorsList().closeButton).click()


    }

    saveForm() {
        cy.get(this.selectorsList().select).eq(0).click()
        cy.get('.oxd-select-dropdown').should('be.visible')
    }

    fillStatus() {
        cy.get(this.selectorsList().select).eq(0).click();

        cy.get('.oxd-select-dropdown').should('be.visible')
        cy.get('.oxd-select-dropdown > :nth-child(6)').click()
        cy.get(this.selectorsList().select).eq(1).click()
        cy.get('.oxd-select-dropdown').should('be.visible')
        cy.get('.oxd-select-dropdown > :nth-child(4)').click()
    }


}

export default MyInfoPage