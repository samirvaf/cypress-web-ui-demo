context('Login Tests', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    describe('Can login with valid username and password', () => {
        it('should arrive at products page', () => {
            cy.login('standard_user', 'secret_sauce')
        })
    })
})
