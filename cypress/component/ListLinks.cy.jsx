import ListLinks from '../../src/components/ListLinks';
import { MemoryRouter } from 'react-router-dom'
import storage from '../../src/storage';
import '../../public/bootstrap.min.css';

const customMount = (componet) => {
  cy.mount(<MemoryRouter>{componet}</MemoryRouter>)
}

describe('Testando botões da listagem de links', () => {
  beforeEach(() => {
    storage.setUiStyle({backgroundColor: "red"});
  });

  it('', () => {
    cy.viewport('macbook-16');
    customMount(<ListLinks links={[{linkText: "Facebook"}]} />)

    cy.get('.link-item').should('have.css', 'background-color', 'rgb(255, 0, 0)')
  })
})