describe('main app', () => {
    it("should render", () => {
        cy.visit('/')
        cy.findByText(/Get started by editing/i)
        .should('exist')
    })
})