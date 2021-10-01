// 'cypress-drag-drop' is a plugin that was installed first. With the line below is enough to use it.
require('@4tw/cypress-drag-drop')
// 'cypress-file-upload' is a plugin that was installed first. With the line below is enough to use it.
import 'cypress-file-upload';
// 'cypress-real-events' is a plugin that was installed first. With the line below is enough to use it.
import "cypress-real-events/support";

// Documentation for these commands are in 'cypress\support\command.d.ts'
Cypress.Commands.add('addBoard', (input) => {
  cy
    .get('[data-cy="create-board"]')
    .click();

  cy
    .get('[data-cy=new-board-input]')
    .type(input + '{enter}');
})

// prevSubject allows to select only elements belonging to the structural tree.
// Subject allows to select children belonging to the same father.
Cypress.Commands.add('take', {prevSubject: 'optional'}, (subject, input) => {
  if (subject) {
    cy
      .wrap(subject)
      .find(`[data-cy=${input}]`)
  } else {
    cy
      .get(`[data-cy=${input}]`)
  }
})