import Register from '../../src/pages/Register'
import { MemoryRouter } from 'react-router-dom'
import '../../public/bootstrap.min.css';
import { FormValidation } from '../../src/context/FormValidationContext';

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
            .should('have.text', 'Ja tenho conta')
            .and('have.attr', 'href')
            .and('include', '/login')
    })

    it("Deve exibir mensagens de erro para campos obrigatorios", () => {
        customMount(
            <FormValidation>
                <Register />
            </FormValidation>
        )

        cy.get('input')
            .should('have.length', 5)
            .each(input => {
                cy.wrap(input).blur({force: true});
            });

        cy.get('.invalid-feedback.d-block')
            .should('have.length', 5)
            .each((element, index) => {
                cy.wrap(element)
                    .should('have.text', 'Campo obrigatorio')
            })
    })

    it("Campo nome e sobrenome devem ter no minimo 3 caracteres", () => {
        customMount(
            <FormValidation>
                <Register />
            </FormValidation>
        );

        cy.get('#user-name').type('Jó').blur({force: true});
        cy.get('#user-lastname').type('Jó').blur({force: true});
        cy.get('#user-email').type('teste@mail.com').blur({force: true});
        cy.get('#user-password').type('123456').blur({force: true});
        cy.get('#user-confirm-password').type('123456').blur({force: true});

        cy.get('.invalid-feedback.d-block')
            .should('have.length', 2)
            .each((element, index) => {
                cy.wrap(element)
                    .should('have.text', 'Campo precisa ter no minimo 3 caracteres')
            })
    })

    it("Exbir mensagem de erro quando as senhas não estiverem identicas", () => {
        customMount(
            <FormValidation>
                <Register />
            </FormValidation>
        );

        cy.get('#user-name').type('Ana').blur({force: true});
        cy.get('#user-lastname').type('Ana').blur({force: true});
        cy.get('#user-email').type('teste@mail.com').blur({force: true});
        cy.get('input#user-password').type('123456').blur({force: true});
        cy.get('input#user-confirm-password').type('654321').blur({force: true});

        cy.get('.invalid-feedback.d-block')
            .should('have.length', 1)
            .and('have.text', 'Este campo precisa ser igual ao campo Senha');

            cy.get('input#user-password').type('123456').clear().blur({force: true});

        cy.get('input#user-password')
            .next()
            .should('have.text', 'Campo obrigatorio')
            .and('have.attr', 'class')
            .and('include', 'invalid-feedback d-block')

        cy.get('input#user-confirm-password')
            .next()
            .should('have.text', 'Este campo precisa ser igual ao campo Senha')
            .and('have.attr', 'class')
            .and('include', 'invalid-feedback d-block')
    })

})