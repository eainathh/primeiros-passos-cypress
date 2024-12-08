import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'

const loginPage = new LoginPage()

describe('Login Orange HRM Tests', () => {

  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.buttonLogin()
    loginPage.alertWrongCredentials()
  })

  it('Login - Succcess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    loginPage.buttonLogin()
  })  

})