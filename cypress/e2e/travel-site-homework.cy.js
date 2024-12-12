///<reference types = "Cypress"/>
describe('The sanity test suit for Hotels tab', () => {
    it('navigate to the main page', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('eq', 'http://localhost:3000/')
    })

    it('Verify Going to box on the Hotels tab', () => {
        cy.get('[name="address"]').should("be.visible")
        cy.contains('Going to').should("be.visible")
        cy.contains('Going to').should('have.text', 'Going to')
    })

    it('Verify Check-in box on the Hotels tab', () => {
        cy.get('#input-start').should("be.visible")
        cy.contains('check-in').should("be.visible")
        cy.contains('check-in').should('have.text', 'check-in')
    })

    it('Verify Check-out box on the Hotels tab', () => {
        cy.get('#input-start').should("be.visible")
        cy.contains('check-out').should("be.visible")
        cy.contains('check-out').should('have.text', 'check-out')
    })

    it('Verify Travellers box on the Hotels tab', () => {
        cy.get('[name="traveller"]').should("be.visible")
        cy.contains('travellers').should("be.visible")
        cy.contains('travellers').should('have.text', 'travellers')
    })

    it('Verify Add_a_flight checkbox on the Hotels tab', () => {
        cy.get('[data-cy="flight_chk"]').should("be.visible")
        cy.contains('Add a flight').should("be.visible")
        cy.contains('Add a flight').should('include.text', 'Add a flight')
    })

    it('Verify Add_a_car checkbox on the Hotels tab', () => {
        cy.get('[data-cy="cars_chk"]').should("be.visible")
        cy.contains('Add a car').should("be.visible")
        cy.contains('Add a car').should('include.text', 'Add a car')
    })

    it('Verify Search button on the Hotels tab', () => {
        cy.get('[type="submit"]').should("be.visible")
        cy.get('[type="submit"]').should("include.text", "search")
        })

})

