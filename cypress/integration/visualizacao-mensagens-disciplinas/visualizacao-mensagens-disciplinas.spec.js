/// <reference types="cypress" />

// Aqui importa as credenciais
var credenciais = require('../../fixtures/credenciais.json');

context('Visualizar Mensagens das Disciplina', () => {
    beforeEach(() => {
        // Eu criei uma função para que realize o login, basta inseri sua matricula e senha no arquivo de credenciais.
        cy.login(credenciais.matricula, credenciais.senha);
    })

    it('Deve listar as disciplinas relacionado ao curso do aluno com sucesso', () => {
        // Após a realização do login, o cypress está verificando se todos os cards das disciplinas exite na página renderizada, por isso que utilizei no final o should('exist')
        cy.get(':nth-child(1) > :nth-child(1) > .card-turma-head > :nth-child(1) > .col-sm-8').should('exist');
        cy.get('[href="/Aluno/Blog/?parametros=WmZYS48zmidqagsgaMAISsga2XG5a59QYKlBsmyDrZd1W8w6PN4pEyRtrSB1saMI6iu2x%2fR7snL5LTGfxAnM%3d"] > .card-turma-head > .row > .col-sm-8').should('exist');
        cy.get('[href="/Aluno/Blog/?parametros=WmZYS48zmifqOYd8fqGgu8xl7DbPjmbiHeGp8VEPbB%2fM1QF%2fgt06bk9Ddb7vFgnYsuTAJODLQXA%3d"] > .card-turma-head > .row > .col-sm-8').should('exist');
        cy.get(':nth-child(4) > .card-turma-head > :nth-child(1) > .col-sm-8').should('exist');
        cy.get('[href="/Aluno/Blog/?parametros=WmZYS48zmie8JYdwhc3hKrzqRsgaMAISsgapLqYoqsUgszhGmpyEyM04as8hwsht1SBgpIdTpWEBJ1F4MBn8%3d"] > .card-turma-head > .row > .col-sm-8').should('exist')
        cy.get('[href="/Aluno/Blog/?parametros=WmZYS48zmidDfxQSEbyGf0gLTnf7aqWevbdaj8sgaMAISsga3AW9du78q6u0SqJ2zpOOwvA9tI4al%2fZrG3Ow%3d"] > .card-turma-head > .row > .col-sm-8').should('exist');
        cy.get('[href="/Aluno/Blog/?parametros=WmZYS48zmied1XZSt4e5UjXljelULrsgaMAISsgaFa3lNZGbo59OOcvyjpr4Nmy59Ko0o1YtE3hPVeTEuBWA%3d"] > .card-turma-head > .row > .col-sm-8').should('exist');
        // Tira print da tela
        cy.screenshot();
    });

    it('Deve acessar a Disciplina de Teste de Software com sucesso', () => {
        // Após realização do login, o cypress procurará o card da disciplina de Teste de Software, vai verificar se está visivel na pagina e em seguida dará um clique.
        cy.get('[href="/Aluno/Blog/?parametros=WmZYS48zmidDfxQSEbyGf0gLTnf7aqWevbdaj8sgaMAISsga3AW9du78q6u0SqJ2zpOOwvA9tI4al%2fZrG3Ow%3d"] > .card-turma-head > .row > .col-sm-8').should('be.visible').click();
        // Aqui o contains vai verificar se na pagina renderizada existe o texto 'Teste de software'
        cy.contains('Teste de Software').should('exist');
        // Tira print da tela
        cy.screenshot();
    });

    it('Deve listar a mensagem da Prova presencial com sucesso', () => {
        // Após realização do login, o cypress procurará o card da disciplina de Teste de Software, vai verificar se está visivel na pagina e em seguida dará um clique.
        cy.get('[href="/Aluno/Blog/?parametros=WmZYS48zmidDfxQSEbyGf0gLTnf7aqWevbdaj8sgaMAISsga3AW9du78q6u0SqJ2zpOOwvA9tI4al%2fZrG3Ow%3d"] > .card-turma-head > .row > .col-sm-8').should('be.visible').click();
        // Aqui o contains vai verificar se na pagina renderizada existe os textos passados no parametro dos contains.
        cy.contains('Prova presencial do primeiro bimestre');
        cy.contains('A prova da disciplina acontecerá na quinta-feira dia 07/10/2021, das 19h10 até 20h50, na sala 10 do Prédio Azul.');
        cy.contains('Todos os alunos devem comparecer no dia da prova independentemente do rodízio de grupos.');
        // Aqui é um teste opcional, onde eu verifico se existe um botão visivel para verificar mais informações'
        cy.get(':nth-child(3) > .panel > .panel-body > .btn').should('be.visible');
        // Tira print da tela
        cy.screenshot();
    });

    it('Deve listar com sucesso mais mensagens ao clicar no botão Carregar mais', () => {3
        // Após realização do login, o cypress procurará o card da disciplina de Teste de Software, vai verificar se está visivel na pagina e em seguida dará um clique.
        cy.get('[href="/Aluno/Blog/?parametros=WmZYS48zmidDfxQSEbyGf0gLTnf7aqWevbdaj8sgaMAISsga3AW9du78q6u0SqJ2zpOOwvA9tI4al%2fZrG3Ow%3d"] > .card-turma-head > .row > .col-sm-8').should('be.visible').click();
        // O wait dará um tempo de 1000ms para esperar a página terminar de carregar.
        cy.wait(1000); 
        // Tira print da tela
        cy.screenshot();
        // Verifica-se a existencia do botão carregar mais e em seguida dará um clique.
        cy.get('#btnCarregarMais > .btn').should('exist').click();
        // O wait dará um tempo de 1000ms para esperar a página terminar de carregar.
        cy.wait(1000);
        // Verifica-se a existência do texto 'Grupos por semana' se existe renderizado na página.
        cy.contains('Grupos por semana').should('exist');
        // Tira print da tela
        cy.screenshot();
    });
})
  