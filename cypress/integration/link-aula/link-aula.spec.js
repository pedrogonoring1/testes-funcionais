/// <reference types="cypress" />

// Aqui importa as credenciais
var credenciais = require('../../fixtures/credenciais.json');

context('Visualizar Link da Aula', () => {
    beforeEach(() => {
        // Eu criei uma função para que realize o login, basta inseri sua matricula e senha no arquivo de credenciais.
        cy.login(credenciais.matricula, credenciais.senha);
    })

    it('Deve pegar o link de uma aula ao vivo', () => {
        cy.get('#side-menu > li:nth-child(6)').click()
        cy.get('#calendar > div.fc-view-container > div > div > table > tbody > tr:nth-child(2)').click()
        cy.get("#irPraAula").click()
        // Tira print da tela
        cy.screenshot();
    });
})
