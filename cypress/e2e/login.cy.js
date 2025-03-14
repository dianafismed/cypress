/// <references types="cypress" />

// Funcionalidades
describe('Login', () => {

  // Vai rodar antes de tudo
  beforeEach(() => {
    cy.viewport('iphone-6');
  });

  // CENARIOS

  // Login efetuado com sucesso
  it('Login com sucesso', () => {
    // Dado
    // abrir a aplicação
    cy.visit('https://www.automationpratice.com.br/login');
    // preenche email e senha
    cy.get('#user').type('edu@qazando.com');
    cy.get('#password').type('123456');

    // Quando
    // clicar em login
    cy.get('#btnLogin').click();

    // Então  
    // valida mensagem
    cy.get('#swal2-title').should('be.visible');
    cy.get('#swal2-title').should('contain', 'realizado');
  });

    // Email inválido
    it('E-mail inválido', () => {
      cy.visit('https://www.automationpratice.com.br/login');
      cy.get('#user').type('edu');
      cy.get('#password').type('123456');
      cy.get('#btnLogin').click();
      cy.get('.invalid_input').should('have.text', 'E-mail inválido.');
    });

    // Email vazio
    it('E-mail vazio', () => {
      cy.visit('https://www.automationpratice.com.br/login');
      cy.get('#password').type('123456');
      cy.get('#btnLogin').click('');
      cy.get('.invalid_input').should('have.text', 'E-mail inválido.');
    });

    // Senha inválida
    it('Senha inválida', () => {
      cy.visit('https://www.automationpratice.com.br/login');
      cy.get('#user').type('ededu@qazando.comu');
      cy.get('#password').type('123');
      cy.get('#btnLogin').click();
      cy.get('.invalid_input').should('have.text', 'Senha inválida.');
    });

    // Senha vazia
    it('Senha vazia', () => {
      cy.visit('https://www.automationpratice.com.br/login');
      cy.get('#user').type('ededu@qazando.comu');
      cy.get('#btnLogin').click();
      cy.get('.invalid_input').should('have.text', 'Senha inválida.');
    });


    // Email e senha vazios
    it('Email e senha vazios', () => {
      cy.visit('https://www.automationpratice.com.br/login');
      cy.get('#btnLogin').click();
      cy.get('.invalid_input').should('have.text', 'E-mail inválido.');
    });

});


