/// <reference types="cypress" />

// Aqui importa as credenciais
var credenciais = require('../../fixtures/credenciais.json');

context('Visualizar Dados Pessoais', () => {
    beforeEach(() => {
        // Eu criei uma função para que realize o login, basta inseri sua matricula e senha no arquivo de credenciais.
        cy.login(credenciais.matricula, credenciais.senha);
    })

    it('Visualizar os Dados Pessoais', () => {
        //Apos a Autenticação e chegar na Pagian Inicial do Portal do ALuno, Selecionamos o 
        //Campo Dados Pessoais.
        cy.get('#side-menu > :nth-child(3) > a').click()
     
        // Tira print da tela
        cy.screenshot();
    });
})
  