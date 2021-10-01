/// <reference types="cypress" />

beforeEach(() => {
  cy.request('POST', '/api/reset')
})

it('Custom commands', () => {
  cy
    .visit('/');

  // This command below is defined in 'cypress\support\commands.js'
  // and its documentation is in 'cypress\support\command.d.ts'
  cy
    .addBoard('This is  new Board!')

});