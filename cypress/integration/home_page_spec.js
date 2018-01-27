/** global describe, cy, it, expect **/
describe('The Home Page', function () {
  it('successfully loads', function () {
    cy.visit('/')
    cy.get('.text')
    .click()
    cy.get('.text-ans').contains('Hello World!')
  })
})
