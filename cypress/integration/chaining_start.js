/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/board/40694707862')
})

it('Chaining commands', () => {

  cy
    .get('[data-cy="task"]')
    .should('be.visible')

});

it('Chaining commands with child item', () => {

  cy
    .contains('task')

  cy
    .get('[data-cy="list"]')
    .eq(1)
    .contains('task')

});