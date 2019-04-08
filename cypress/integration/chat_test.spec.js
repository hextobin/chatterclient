describe('Creates a User', () => {

  before(() => {
    cy.visit('http://localhost:3000')
  })

  it('Enters Username', () => {
    cy.get('#userbox')
      .type("Bob")
      .should('have.value', "Bob")
      .type('{enter}')
  })
})