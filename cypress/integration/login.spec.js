const login = require("../support/locators/LoginPage").LOCATORS
const products = require("../support/locators/ProductsPage").LOCATORS

context('Login Tests', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    describe('Can login with valid username and password', () => {
        it('should arrive at products page', () => {
            cy.login('standard_user', 'secret_sauce')
            cy.get(products.pageTitle)
              .should('have.text', 'Products')
            cy.get(products.pageRobot)
              .should('be.visible')
        })
    })

    describe('Can\'t login without valid username or password', () => {
        it('should not login without a password', () => {
            cy.login('bad_user', '')
            cy.get(login.errorMessage)
              .should('have.text', 'Epic sadface: Password is required')
        })

        it('should not login without username', () => {
            cy.login('', 'bad_password')
            cy.get(login.errorMessage)
              .should('have.text', 'Epic sadface: Username is required')
        })

        it('should not login with invalid username and password', () => {
            cy.login('bad_username', 'bad_password')
            cy.get(login.errorMessage)
              .should('have.text', 'Epic sadface: Username and password do not match any user in this service')
        })
    })
})
