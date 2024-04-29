

import {HomepageObjects} from '../support/page-objects/Homepage.js'




describe('homepage', () => {
  
  const homePageElements = new HomepageObjects()


  beforeEach('launch URL',() => {
    cy.visit('/')

})



  it('click to access all navigation bar links', () => {
    homePageElements.productpage()
    cy.get('[data-ui-type="dropdown:item"]').should('include.text','Savings & Investment')

    homePageElements.saveInvestpage()
    cy.contains('h3','Flex Savings').should('contain', 'Flex Savings')

    homePageElements.creditBuilderPage()
    cy.contains('h3', 'Improve your record where it counts').should('include.text', 'Improve your record where it counts')

    homePageElements.businessPage()
    cy.contains('button', 'All Categories').should('have.text', 'All Categories')

    homePageElements.whatWeDoPage()
    cy.contains('button', 'General').should('have.text', 'General')

    homePageElements.affiliatePage()
    cy.contains('h1', 'Affiliate Onboarding Form').should('include.text', 'Affiliate')

    homePageElements.changeLanguagePage()
    cy.contains('h5', 'Select your locale:').should('include.text', 'Select')

    homePageElements.nigeriaPage()
    cy.contains('h1','One App, all your Financial Needs').should('include.text', 'One')

    homePageElements.angolaPage()
    cy.contains('h1','Um aplicativo, todas as suas necessidades financeiras').should('include.text', 'Um')

    homePageElements.egyptPage()
    cy.contains('h1','تطبيق واحد ، كل احتياجاتك المالية').should('include.text', 'تطبيق واحد ، كل احتياجاتك المالي')

    homePageElements.kenyaPage()
    cy.contains('h1', 'Programu moja, Mahitaji yako yote ya Kifedha').should('include.text', 'Programu')

    homePageElements.badilishaPage()
    cy.contains('h5','Chagua eneo lako:').should('include.text', 'Chagua')

    homePageElements.nigeriaPage()
    cy.contains('h3','Payments').should('have.text', 'Payments')

    homePageElements.credpalAppPage()
    cy.contains('h3', 'Join CredPal today').should('include.text','today')

  })

  it('click to access learn more and download App links', ()=>{
    homePageElements.downloadAppBtn()
    cy.contains('h3', 'Join CredPal today').should('have.text','Join CredPal today')

    homePageElements.learnMoreBtn()
    cy.contains('h3', 'Join CredPal today').should('include.text','CredPal')
  })


})