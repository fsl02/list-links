import Register from '../../src/pages/Register'
import { MemoryRouter } from 'react-router-dom'
import '../../public/bootstrap.min.css';

const customMount = (componet) => {
  cy.mount(<MemoryRouter>{componet}</MemoryRouter>)
}

describe('Formulário de cadastro', () => {

    it("Deve verificar todos os elemntos da página de cadastro", () => {
        customMount(<Register />)

        const placeholder = [
            "Digite seu nome",
            "Digite seu sobrenome",
            "Digite sua senha",
            "Digite a senha novamente"
        ];

        const label = [
            "Nome",
            "Sobrenome",
            "Email",
            "Senha",
            "Confirmar senha"
        ];

        cy.get('h4').should('have.text', "Register")

        cy.get('label')
            .should('have.length', 5)
            .each((element, index) => {
                cy.wrap(element)
                    .should('have.text', label[index])
            })

        
        cy.get('[type="text"]')
            .should('have.length', 2)
            .each((element, index) => {
                cy.wrap(element)
                    .should('have.attr', 'placeholder')
                    .and('include', placeholder[index])
            })

        cy.get('[type="email"]')
            .should('have.length', 1)
            .and('have.attr', 'placeholder')
            .and('include', 'Digite seu email')

        cy.get('[type="password"]')
            .should('have.length', 2)
            .each((element, index) => {
                cy.wrap(element)
                    .should('have.attr', 'placeholder')
                    .and('include', placeholder[index+2])
            })
        
        cy.get('button[type="submit"]')
            .should('have.text', 'Criar Conta')
        
        cy.get('a')
            .should('have.attr', 'href')
            .and('have.text', 'Ja tenho conta')
            .and('include', '/login')
    })

    it("Deve exibir mensagens de erro para campos obrigatorios", () => {
        customMount(<Register />)

        cy.get('button[type="submit"]').click();

        cy.get('.invalid-feedback.d-block')
            .should('have.length', 5)
            .each((element, index) => {
                cy.wrap(element)
                    .should('have.text', 'Este campo é obrigatorio')
            })
    })

    it("Campo nome e sobrenome devem ter no minimo 3 caracteres", () => {
        customMount(<Register />)

        cy.get('input#user-name').type('Jó');
        cy.get('input#user-lastname').type('Jó');
        cy.get('button[type="submit"]').click();

        cy.get('.invalid-feedback.d-block')
            .should('have.length', 2)
            .each((element, index) => {
                cy.wrap(element)
                    .should('have.text', 'Este campo é precisa ter no minimo 3 caracteres')
            })
    })

    it("Exbir mensagem de erro quand as senhas não estiverem identicas", () => {
        customMount(<Register />)

        cy.get('input#user-password').type('123456');
        cy.get('input#user-confirm-password').type('654321');
        cy.get('button[type="submit"]').click();

        cy.get('.invalid-feedback.d-block')
            .should('have.length', 1)
            .and('have.text', 'As senhas estão diferentes')
            .prev()
            .should('have.attr', 'placeholder')
            .and('include', 'Digite sua senha')
    })

})