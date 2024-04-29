export class Affiliate{

registerForm(firstname,lastname,email,phonenumber){
    cy.get('#first_name').type(firstname)
    cy.get('#last_name').type(lastname)
    cy.get('#email').type(email)  
    cy.get('#phone').type(phonenumber)
    cy.contains('label', 'Credit').click()
    cy.contains('label', 'Investment').click()
    cy.contains('button', 'Submit').click()
}


}