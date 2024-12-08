import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/DashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance');



const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()
const chance = new Chance();


describe('Orange HRM Testes', () => {


  it('User info Update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username,  userData.userSuccess.password)
    loginPage.buttonLogin()
    menuPage.accessDashboard()
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myInfoPage.fillPersonalDetails(chance.first(), chance.last())
    myInfoPage.fillEmployeeDetails('599','2025-07-19','2025-07-21')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()

  })

})