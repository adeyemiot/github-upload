///reference types="cypress"  />

describe('First Testsuite', function ()
 {
    it('Verify The Title of The page-positive', function () 
    {
    cy.visit('https://demo.nopcommerce.com/')
    cy.title().should('eq', 'nopCommerce demo store')
    })

    
        it('Verify The Title of The page-negative', function () 
        {
        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq', 'nopCommerce store')
        })

})