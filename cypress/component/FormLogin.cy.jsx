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
    customMount(<Login />);
    cy.get('input[type="email"]').focus().blur()
    cy.get('input[type="password"]').focus().blur()

    cy.get('input[type="email"]')
    .parent()
    .find('.invalid-feedback.d-block')
    .and('have.text', 'Campo obrigatorio')
    
    cy.get('input[type="password"]')
    .parent()
    .find('.invalid-feedback.d-block')
    .and('have.text', 'Campo obrigatorio')
  });

  it("Deve exibir mensagens de error para campo senha com menos de 6 caracteres", () => {
    customMount(<Login />)
    cy.get('input[type="password"]').type("123").blur({force: true})

    cy.get('input[type="password"]')
      .parent()
      .find('.invalid-feedback.d-block')
      .and('have.text', 'Campo precisa ter no minimo 6 caracteres')
  });

  it("Não deve exibir mensagens de erro", () => {
    customMount(<Login />)
    cy.get('[type="email"]').type("teste@mail.com").blur({force: true});
    cy.get('[type="password"]').type("123456").blur({force: true});

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