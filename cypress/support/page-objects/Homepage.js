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
    cy.contains('a', 'Nigeria').click({force:true})
}

angolaPage(){
    cy.contains('a', 'Angola').click({force:true})
}

egyptPage(){
    cy.contains('a', 'Egypt').click({force:true})
}

kenyaPage(){
    cy.contains('a', 'Kenya').click({force:true})
}

badilishaPage(){
    cy.contains('button', 'Badilisha Lugha').click({force:true})
}

nigeriaPage(){
    cy.contains('a', 'Nigeria').click({force:true})

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