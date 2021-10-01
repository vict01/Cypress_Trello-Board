/// <reference types="cypress" />

it('Using real event plugin',()=>{
  cy  
    .visit('/')

  cy
    .get('[data-cy=board-item]')
    .realHover()
    // Spaces in the rgb are taken into account as part of the assertion:
    .should('have.css', 'background-color', 'rgb(5, 90, 140)')
});

it.skip('Using Applitools plugins', () => {
  cy
    .visit('/');

    cy
    .eyesOpen({
      appName: 'Trello app',
      testName: 'Trying out Applitools plugin',
      browser: { width: 800, height: 600 },
    });

  cy
    .eyesCheckWindow('Board list');

  cy
    .eyesClose();
});