/// <reference types="cypress" />

it('Intercept requests', () => {

  cy
    .intercept({
      method: 'Get',
      url: '/api/boards'
    }).as('boardList')

  cy
    .visit('/')

  cy
    .wait('@boardList')  
    .its('response.statusCode')
    .should('eq', 200)

  cy
    .get('[data-cy=board-item]')
    .should('have.length', 1 )

});