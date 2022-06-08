///<reference types="Cypress" />


  describe('Blip Portal', function() {
    beforeEach(function(){
        cy.visit('https://account.blip.ai')
    })

    it('Cenário 1 : Usuário Loga na Aplicação com dados Válidos', () => {
      cy.get('#email').type('julianokoslowisk@gmail.com')
      cy.get('#password').type('Koslowisk123!@#')
      cy.get('#blip-login').click()
      cy.get('#logout-link').click()    
    })


    
      it('Cenário 4: Usuário esqueceu a senha ', () => {
        cy.get('#login-forgot-password').click()
        cy.get('.bp-fw-bold')
        cy.get('#Email').type('julianokoslowisk@gmail.com')  
        cy.get('#submitButton').click()
        cy.get('.bp-c-rooftop')
          
      
    })      

     /*it('Usuário Tenta logar na aplicação com dados Inválidos', () => {
      cy.get('#email').type('julianokoslowisk@gmail.com')
      cy.get('#password').type('oslowisk123!@#')
      cy.get('#blip-login').click()
      cy.get('#logout-link').click()
      cy.get('.bottom-left > .hydrated')
        .should('have.value','Login e/ou senha inválidos')*/
  })