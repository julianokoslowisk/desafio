///<reference types="Cypress" />


  describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function(){
        cy.visit('https://account.blip.ai')
    })

    it('Usuário Loga na Aplicação com dados Válidos', () => {
      cy.get('#email').type('julianokoslowisk@gmail.com')
      cy.get('#password').type('Koslowisk123!@#')
      cy.get('#blip-login').click()
      cy.get('#logout-link').click()    
    })

    it.only('Usuário Tenta logar na aplicação com dados Inválidos', () => {
      cy.get('#email').type('julianokoslowisk@gmail.com')
      cy.get('#password').type('oslowisk123!@#')
      cy.get('#blip-login').click()
      cy.get('#logout-link').click()
      .should('have.value','Login e/ou senha inválidos')
     

    })
  })