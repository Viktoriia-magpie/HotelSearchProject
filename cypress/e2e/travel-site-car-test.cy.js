///<reference types = "Cypress"/>

describe('The car tab test will verify the car functionality', () => {
    const car_tab = '[data-cy="Car"]';
    const location = '[name="location"]';
    const drop_off = '[name="dropoff"]';
    const car_group_list = '[name="car-group"]'
    const driver_age_list = '[name="driver-age"]'

    before(() => {
        cy.visit('http://localhost:3000')
    })

    beforeEach(() => {
        cy.get(car_tab).click()
    })


    it('Populates location', () => {
        cy.get(location).clear()
        // cy.get(location).type("Toronto").invoke('val').should('eq',"Toronto")        
        cy.get(location).type("Toronto").should('have.value', 'Toronto')
    })

    it('Populates drop off', () => {
        cy.get(drop_off).clear()
        cy.get(drop_off).type("02/25/2025").invoke('val').should('eq', "02/25/2025")
    })


    it('Chooses list of cars', () => {
        cy.get(car_group_list).should('be.visible')
        cy.get(car_group_list).select('Group 1', { force: true })
        cy.get('[title="Group 1"]').should('be.visible')

        cy.get(car_group_list).select('Group 2', { force: true })
        cy.get('[title="Group 2"]').should('be.visible')

        cy.get(car_group_list).select('Group 3', { force: true })
        cy.get('[title="Group 3"]').should('be.visible')
    })

    it('Chooses driver age', () => {
            cy.get(driver_age_list).should('be.visible')
            cy.get(driver_age_list).select('23', { force: true }).should('have.value', '23')
            cy.get(driver_age_list).select('24', { force: true }).should('have.value', '24')
            cy.get(driver_age_list).select('25', { force: true }).should('have.value', '25')
            cy.get(driver_age_list).select('26', { force: true }).should('have.value', '26')

        })
    })
