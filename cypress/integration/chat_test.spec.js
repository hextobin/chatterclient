describe('Creates a User', () => {

  const userName = "AliceBobEve"
  const typedValue = "BobWeHadABabyItsaBoy"

  before(() => {
    cy.visit('http://localhost:3000')
  })

  it('Creates a User', () => {
    cy.get('#userbox')
      .type(userName)
      .should('have.value', userName)
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

  it('Types', () => {
    cy.get('input')
      .type(typedValue)
      .should('have.value', typedValue)
      cy.focused().clear()
  })

  it('Displays typing', () => {
    cy.get('input')
      .type(typedValue)
      .should('have.value', typedValue)
    cy.get('.typing')
      .should('have.text', 'is typing')
    cy.focused().clear()
  })

})