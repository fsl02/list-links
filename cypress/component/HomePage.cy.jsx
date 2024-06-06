import HomePage from '../../src/pages/HomePage'
import { MemoryRouter } from 'react-router-dom'
import '../../public/bootstrap.min.css';

const customMount = (componet) => {
  cy.mount(<MemoryRouter>{componet}</MemoryRouter>)
}

describe('Testando botões da pagina inicial', () => {
  it('Botão login', () => {
    cy.viewport('macbook-16');
    customMount(<HomePage />)
    cy.get('[href="/login"]').should('have.text', 'Login');
  })

  it("Boteão register", () => {
    cy.viewport('macbook-16')
    customMount(<HomePage />)
    cy.get('[href="/register"]').should('have.text', 'Register');
  })
})