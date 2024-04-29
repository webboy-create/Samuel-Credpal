
import {Affiliate} from '../support/page-objects/affiliatepage'


describe('affilliate page', () => {

    const register = new Affiliate()


    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })


    beforeEach('launch URL',() => {
        cy.visit('/')

    })

    it('access affiliate page and register as an affiliate that sells credit', () => {
        cy.get('[title="Affiliates"]').click()
        register.registerForm('Adamu','Kehinde','emekus-2024@yopmail.com','09169960884')
        cy.contains('label', 'Credit').click()
        cy.contains('button', 'Submit').click()
        cy.contains('h5', 'Products').should('be.visible')
        
    })




    it('access affiliate page and register as an affiliate that sells investment', () => {
        cy.get('[title="Affiliates"]').click()
        register.registerForm('Samuel','Emeka','adams-24@yopmail.com','09169960867')
        cy.contains('label', 'Investment').click()
        cy.contains('button', 'Submit').click()
        cy.contains('h5', 'Products').should('be.visible')
        
    })


    
  })