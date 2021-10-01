/// <reference types="cypress" />

it('Custom commands', () => {
  // We must first create a board with this id
  cy
    .visit('/board/9133225394');

  // This command below is defined in 'cypress\support\commands.js'
  // and its documentation is in 'cypress\support\command.d.ts'
  cy
    .take('list')
    .eq(0)
    .take('task')
});