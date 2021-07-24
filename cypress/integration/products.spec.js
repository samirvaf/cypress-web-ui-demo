const products = require("../support/locators/ProductsPage").LOCATORS

context('Products Tests', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.login('standard_user', 'secret_sauce')
    })

    describe('Can add a product to the cart', () => {
        it('should increment cart quantity', () => {
            cy.get(products.addJacketToCartBtn)
              .click()
            cy.get(products.cartBadge)
              .should('be.visible')
              .should('have.text', '1')
        })

        it('should show remove button', () => {
            cy.get(products.addJacketToCartBtn)
              .click()
            cy.get(products.removeJacketFromCartBtn)
              .should('be.visible')
        })
    })

    describe('Can remove a product from the cart', () => {
        it('should decrement cart quantity', () => {
            cy.get(products.addBikeToCartBtn)
              .click()
            cy.get(products.addJacketToCartBtn)
              .click()
            cy.get(products.cartBadge)
              .should('have.text', '2')
            cy.get(products.removeJacketFromCartBtn)
              .click()
              cy.get(products.cartBadge)
              .should('have.text', '1')
        })
    })
})
