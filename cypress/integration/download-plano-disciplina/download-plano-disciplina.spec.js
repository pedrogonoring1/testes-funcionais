/// <reference types="cypress" />

// Aqui importa as credenciais
var credenciais = require('../../fixtures/credenciais.json');

context('Dowload Plano da Disciplina', () => {
    beforeEach(() => {
        // Eu criei uma função para que realize o login, basta inseri sua matricula e senha no arquivo de credenciais.
        cy.login(credenciais.matricula, credenciais.senha);
    })

    it('Deve executar alguma coisa com sucesso', () => {
     
        // Tira print da tela
        cy.screenshot();
    });
})
  