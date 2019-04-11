describe('Creates a User', () => {

  const userName = "AliceBobEve"

  before(() => {
    cy.visit('http://localhost:3000')
  })

  it('Enters Username', () => {
    cy.get('#userbox')
      .type(userName)
      .should('have.value', userName)
  })

  it('Creates a User', () => {
    cy.server()
    cy.route('POST', '/socket.io/**').as('enterUser')
    cy.get('#userbox')
      .type('{enter}')
    cy.wait('@enterUser').then((xhr) => {
      cy.get('.ui.card').last().within(() => {
        cy.get('.user-list-name-align')
        cy.get('#user-list-name')
        .should('have.text', userName)
      })
    })
  })

})