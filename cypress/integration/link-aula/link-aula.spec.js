/// <reference types="cypress" />

// Aqui importa as credenciais
var credenciais = require('../../fixtures/credenciais.json');

context('Visualizar Link da Aula', () => {
    beforeEach(() => {
        // Eu criei uma função para que realize o login, basta inseri sua matricula e senha no arquivo de credenciais.
        cy.login(credenciais.matricula, credenciais.senha);
    })

    it('Deve executar alguma coisa com sucesso', () => {
     
        // Tira print da tela
        cy.screenshot();
    });
})
  