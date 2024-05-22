import Login from '../../src/pages/Login'
import { MemoryRouter } from 'react-router-dom'
import '../../public/bootstrap.min.css';

const customMount = (componet) => {
  cy.mount(<MemoryRouter>{componet}</MemoryRouter>)
}

describe('Testando formulário de login', () => {
  it('Deve verificar todos os elementos da pagina de login', () => {
    customMount(<Login />)
    cy.get('.form-section-title')
      .should('have.length', 1)
      .and('have.text', 'Login')
    
    cy.get('input[type="email"]').should('have.length', 1);
    cy.get('input[type="password"]').should('have.length', 1);
    cy.get('form button')
      .should('have.length', 1)
      .and('have.text', 'Entrar');
    cy.get('a')
      .should('have.length', 1)
      .and('have.text', 'Esqueci minha senha');
  })

  it("Deve exibir mensagens de erro para campos obrigatorios", () => {
    cy.viewport('macbook-16');
    customMount(<Login />)
    cy.get('form button').click();

    cy.get('[type="email"]')
      .parent()
      .find('.invalid-feedback.d-block')
      .and('have.text', 'Este campo precisa ser preenchido')

    cy.get('[type="password"]')
      .parent()
      .find('.invalid-feedback.d-block')
      .and('have.text', 'Este campo precisa ser preenchido')
  });

  it("Deve exibir mensagens de error para campo senha com menos de 4 caracteres", () => {
    cy.viewport('macbook-16');
    customMount(<Login />)
    cy.get('[type="password"]').type("123")
    cy.get('form button').click();

    cy.get('[type="password"]')
      .parent()
      .find('.invalid-feedback.d-block')
      .and('have.text', 'Este campo deve ter no minimo 4 caracteres')
  });

  it("Deve exibir todas as mensagens de erro", () => {
    cy.viewport('macbook-16');
    customMount(<Login />)
    cy.get('[type="password"]').type("123")
    cy.get('form button').click();

    cy.get('[type="password"]')
      .parent()
      .find('.invalid-feedback.d-block')
      .and('have.text', 'Este campo deve ter no minimo 4 caracteres')

      cy.get('[type="password"]').clear()
      cy.get('form button').click();

      cy.get('[type="password"]')
      .parent()
      .find('.invalid-feedback.d-block')
      .and('have.text', 'Este campo precisa ser preenchido')
  
  });

  it("Não deve exibir mensagens de erro", () => {
    cy.viewport('macbook-16');
    customMount(<Login />)
    cy.get('[type="email"]').type("teste@mail.com");
    cy.get('[type="password"]').type("1234");
    cy.get('form button').click();

    cy.get('[type="email"]')
      .parent()
      .find('.invalid-feedback')
      .should('not.have.class', 'd-block')
      .and('not.be.visible')

    cy.get('[type="password"]')
      .parent()
      .find('.invalid-feedback')
      .should('not.have.class', 'd-block')
      .and('not.be.visible')
  });
})