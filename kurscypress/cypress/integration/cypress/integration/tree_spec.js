/// <reference types="cypress" />

it('Go inside iframe and click', function() {
  
    //Visit webpage
    cy.visit("https://www.glassboxdigital.shop/product-page/classic")
  
    //Wait till the Let's Chat header is visible
    cy.get('#comp-jor13ajz > .yuKeh').should('be.visible')
  
    //Click on the Add to Cart button
    cy.get('[data-hook="add-to-cart"]').click()
  
    //Go inside iframe and click View cart button
    cy.getIframe('iframe[name*="tpapopup"]').contains('View Cart').click({
        force: true
    })
})