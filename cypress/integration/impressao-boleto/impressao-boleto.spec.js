/// <reference types="cypress" />

// Aqui importa as credenciais
var credenciais = require('../../fixtures/credenciais.json');

context('Impressão de todos boletos', () => {
    beforeEach(() => {
        // Eu criei uma função para que realize o login, basta inseri sua matricula e senha no arquivo de credenciais.
        cy.login(credenciais.matricula, credenciais.senha);
    })

    it('Deve baixar os boletos', () => {
        cy.get('#side-menu > li:nth-child(8) > a').click()
        cy.get('a[href*="/Aluno/Extrato/"]').click()
        cy.get('a[title*="Imprimir Boleto"]').click({ multiple: true })
        // Tira print da tela
        cy.screenshot();
    });
})
