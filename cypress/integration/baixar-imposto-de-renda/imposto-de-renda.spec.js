/// <reference types="cypress" />

// Aqui importa as credenciais
var credenciais = require('../../fixtures/credenciais.json');

context('Visualizar Link da Aula', () => {
    beforeEach(() => {
        // Eu criei uma função para que realize o login, basta inseri sua matricula e senha no arquivo de credenciais.
        cy.login(credenciais.matricula, credenciais.senha);
    })
// Tratamento de Exceção Pois O Cypress considera exceções não detectadas como qualquer erro que não 
// seja detectado por seu aplicativo, sejam eles erros "padrão" ou rejeições de promessa não tratadas
// Se o erro disparar o errormanipulador global da janela ou seu unhandledrejectionmanipulador, 
//Cypress irá detectá-lo e falhar no teste.


//Tratamento de Exceção

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
    it('Visualizar Imposto de Renda ', () => {
     //Apos a Autenticação e chegar na Pagian Inicial do Portal do ALuno, Selecionamos o 
     //Campo Financeiro.
        cy.get(':nth-child(8) > [href="#"]').click();
        //Selecionando a Opção Declaração de Imposto de Renda.
        cy.get('.active > .nav > :nth-child(3) > a').click();
        //Baixando o Imposto de Renda 2021
        cy.get(':nth-child(1) > a > .btn').click();


     
        // Tira print da tela
        cy.screenshot();
    });
})
  