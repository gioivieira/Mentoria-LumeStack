import userData from '../fixtures/users/user-data.json'
import { DashboardPage } from '../pages/dashboardPage'
import { LoginPage } from '../pages/loginPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Login Orange HRM tests', () => {

  it.skip('Login - Success', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()
  })

  it.skip('Login - Fail', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    cy.get(loginPage.selectorsList().wrongCredentialAlert)
  })
})