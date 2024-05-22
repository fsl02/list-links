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

  it("Deve exibir mensagens de error para campos obrigatorios", () => {
    cy.viewport('macbook-16');
    customMount(<Login />)
    cy.get('form button').click();

    cy.get('[type="email"]')
      .parent()
      .find('.input-error');
  });
})