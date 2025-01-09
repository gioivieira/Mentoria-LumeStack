import userData from '../fixtures/users/user-data.json'
import { DashboardPage } from '../pages/dashboardPage'
import { LoginPage } from '../pages/loginPage'
import { MenuPage } from '../pages/menuPage'
import { MyInfoPage } from '../pages/myInfoPage copy'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const myInfoPage = new MyInfoPage()
const menuPage = new MenuPage()

describe('Orange HRM tests', () => {
  it('Login - Success', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()
  })
  it('User Info Update - Sucess', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    cy.get(myInfoPage.selectorsList().firstNameField).clear().type('FirstNameTest')
    cy.get(myInfoPage.selectorsList().lastNameField).clear().type('LastNameTest')
    cy.get(myInfoPage.selectorsList().genericField).eq(3).clear().type('Employee')
    cy.get(myInfoPage.selectorsList().genericField).eq(4).clear().type('OtherIdTest')
    cy.get(myInfoPage.selectorsList().genericField).eq(5).clear().type('DriversLicenseNumberTest')
    cy.get(myInfoPage.selectorsList().genericField).eq(6).clear().type('2024-10-10')
    cy.get(myInfoPage.selectorsList().dateCloseButton).click()
    cy.get(myInfoPage.selectorsList().genericSelectField).eq(1).click()
    cy.get(myInfoPage.selectorsList().marriedOption).click()
    cy.get(myInfoPage.selectorsList().genericSubmitButton).eq(1).click()
    cy.get(myInfoPage.selectorsList().sucessAlert)
    cy.get('body').should('contain', 'Successfully Saved')
  })
  it('Login - Fail', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    cy.get(loginPage.selectorsList().wrongCredentialAlert)
  })
})