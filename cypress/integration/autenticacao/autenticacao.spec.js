/// <reference types="cypress" />

var credenciais = require('../../fixtures/credenciais.json');

context('Autenticação do Aluno', () => {
    it('Deve autenticar com sucesso', () => {
        cy.login(credenciais.matricula, credenciais.senha);
    });
})