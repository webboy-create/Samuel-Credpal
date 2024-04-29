export class HomepageObjects{

productpage(){
    cy.contains('button', 'Products').click()
}

saveInvestpage(){
    cy.contains('a', 'Savings & Investment').click({force:true})
}

creditBuilderPage(){
    cy.contains('a','Credit Builder').click({force:true})
}

businessPage(){
    cy.contains('a', 'Business').click()
}

whatWeDoPage(){
    cy.contains('a', 'What We Do').click()
}

affiliatePage(){
    cy.contains('a', 'Affiliates').click()
}

changeLanguagePage(){
    cy.contains('button', 'Change Language').click()
}
nigeriaPage(){
    cy.contains('a', 'Nigeria').click()
}

angolaPage(){
    cy.contains('a', 'Angola').click()
}

egyptPage(){
    cy.contains('a', 'Egypt').click()
}

kenyaPage(){
    cy.contains('a', 'Kenya').click({force:true})
}

badilishaPage(){
    cy.contains('button', 'Badilisha Lugha').click()
}

nigeriaPage(){
    cy.contains('a', 'Nigeria').click()

}

credpalAppPage(){
    cy.contains('button', 'Download the CredPal app').click()
}

downloadAppBtn(){
    cy.contains('button','Download App').click()
}

learnMoreBtn(){
    cy.contains('button','Learn More').click()
    
}


}