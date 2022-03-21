/// <reference types="cypress" />

class ApplicationVoucherPage
{
    amountClickButton()
    {
        // return cy.get('[type="radio"].my-auto')
        //     .first()
        return cy.get('#option100').check()
        // return cy.contains('input', 'Gift Card Value').find('#option100').check
    // return cy.get('//input[@id="option100"]')
        // return cy.get('#option50')
    }
}

export default ApplicationVoucherPage