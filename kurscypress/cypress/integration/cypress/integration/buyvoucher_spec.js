///  <reference types="cypress" />
import ApplicationVoucherPage from "../support/locators/application_voucher_page_locators"

describe('Test example', () => {
    
    it('Test example', () => {

        const applicationVoucherPage = new ApplicationVoucherPage
        cy.visit('https://gift-cards.phorest.com/salons/demo-us#')
        applicationVoucherPage.amountClickButton()

        cy.get('[data-target="email.purchaserEmailInput"]').type('admin@wp.pl')
        cy.get('input[placeholder="first name ..."]').type('jerry')
        cy.get('input[placeholder="last name ..."]').type('springer')
        cy.contains('Checkout').click({force: true})
    //     cy.get('button')
    // .invoke('attr', 'disabled')
    // .then(disabled =>{
    //     disabled ? cy.log('buttonIsDiabled') : cy.get('button').click()
        cy.contains('Confirm Details').click()
        cy.wait(6000)
        // cy.get('input[placeholder="Cardholder name"]').type('jerry')
        cy.get('input#card-expiry').type('jerry')

        // cy.get('[data-controller="bancard-purchase"]').click({force:true})
        //     const featureSelector = '[id^="hostedform"]';
        // cy.get(featureSelector).first().click().then($iframe => {
        //     const body = $iframe.contents().find('body')
        //     cy.wrap(body).as('iframe')
        // })

        // cy.get('@iframe').find('#card-name').type('jhdjsad')

        // cy.get('[id^="hostedform"]')
        // .its('0.contentDocment.body')
        // .find('#card-name').type('dasd')
        // cy.get('#hostedform-hjy59974v').switchToIframe().get('#card-name').type('jhdjsad')
        // cy.get('[id^="hostedform"]').contains("Name").type("da")
        // cy.getIframe('[id^="hostedform"]')
         // cy.get('iframe').eq(3).check('#bancard-payment-form')
        // cy.get("__privateStripeMetricsController2070").then($iframe => {
        //     const $body = $iframe.contents().find("body");
        //     cy.wrap($body)
        // .find("input[placeholder='Cardholder name']")
        // .type("4242424242424242");
        // });
        // cy.get('#bancard-form')
        // cy.get('#bancard-payment-form').click
        // cy.get('#payment-form')
        cy.get('iframe[id^="hostedform"]').click({force:true})
        .eq(1).click({force: true}).type('33432423423')
        // cy.getWithinIframe('#card-name').type('4242424242424242')

        // cy.get('[data-controller="bancard-purchase"]').click({force:true})
        // cy.get('[id^="hostedform"]').find('iframe')
        //     .its('.contentDocument.body')
        //     .find('input[id="card-name"]')
            //     .should('be.visible')
            // .then(cy.wrap)
            // .should('contain.text', "Cardholder name")
            // .clear()
            // .click()
            // .type("przykladowy te")

        // cy.get('[id^="hostedform"]').then($iframe =>{
        //     var $body = $iframe.contents().find('body');
        //     cy.wrap($body).find('input[id="card-name"]').type("hjjg");             



        //  iframe.find('input[id="card-name"]').type('dsadsad')
        // cy.get('[id|="hostedform"]')

        // cy.visit('https://gift-cards.phorest.com/salons/demo-us#payment')
        // cy.get('[id|="hostedform"]')
        // .then($iframe =>{
        //     var $body =  $iframe.contents().find('body');
        //     cy.wrap($body)
        //     // .click({force:true})
        //     .find('input[placeholder="CardHolder name')
        //     .type("test username")
        // });
     });
});