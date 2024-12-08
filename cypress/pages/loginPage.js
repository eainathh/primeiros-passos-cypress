class LoginPage {
    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            wrongCredentialsAlert: ".oxd-alert",
        }

        return selectors;
    }

    accessLoginPage() {
        cy.visit('/auth/login')
    }

    loginWithUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)

    }

    buttonLogin(){
        cy.get(this.selectorsList().loginButton).click()

    }

    alertWrongCredentials(){
        cy.get(this.selectorsList().wrongCredentialsAlert, { timeout: 10000 }).should('be.visible');
    }
}

export default LoginPage