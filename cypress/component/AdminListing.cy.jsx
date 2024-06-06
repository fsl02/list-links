import AdminListing from '../../src/pages/AdminListing';
import { MemoryRouter } from 'react-router-dom';
import storage from '../../src/storage';
import '../../public/bootstrap.min.css';

const customMount = (componet) => {
    cy.mount(<MemoryRouter>{componet}</MemoryRouter>)
  }

describe("Tabelas de links", () => {
    let links = [
        {linkText: "Teste", linkUrl: "#"},
        {linkText: "Teste 2", linkUrl: "#"},
        {linkText: "Teste 3", linkUrl: "#"},
    ];

    beforeEach(() => {
        storage.setLinks(links);
        storage.setAccessCount(links.map(item => 10))
    })

    it("Deve exibir apenas o cabeçalho da tabela", () => {
        storage.setLinks([]);
        cy.viewport('macbook-16');
        customMount(<AdminListing />);
        cy.get('table thead').should('have.length', 1);
        cy.get('table tbody tr').should('have.length', 0);

        let tableHead = ["ID", "Texto do link", "Url do link", "Total de clicks", "Ações"];
        cy.get('thead tr th').each((item, index) => {
            cy.wrap(item).should('have.text', tableHead[index]);
        })
    });

    it("Deve exibir conteudo no body da tabela", () => {
        cy.viewport('macbook-16');
        customMount(<AdminListing />);
        cy.get('table tbody tr').should('have.length', links.length);
        cy.get('tr td a').each((item, index) => {
            cy.wrap(item)
                .should('have.text', 'Editar')
                .and('have.attr', 'href')
                .and('include', `/admin/edit-link/${index}`)
        })
    })

})