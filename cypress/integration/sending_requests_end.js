/// <reference types="cypress" />

// beforeEach(() => {
//   cy.request({
//     method: 'POST',
//     url: '/api/reset'
//   })
// });

it('Creates a new board', () => {
  cy
  .visit('/')

  cy
    .request({
      method: 'POST', 
      url: '/api/boards', 
      body: {name: 'This is a New board'}
    })
});


// This test must be run alone and without the beforeEach:
// And there must be an existing board with this id
it.skip('Rename a board', () => {
  cy
  .visit('/')

  cy
    .request({
      method: 'PATCH', 
      url: '/api/boards/45114680550', 
      body: {name: 'The board was renamed'}
    })
});

// This test must be run alone and without the beforeEach:
// And there must be an existing board with this id
it.skip('Delete a board', () => {
  cy
  .visit('/')

  cy
    .request({
      method: 'DELETE', 
      url: '/api/boards/45114680550'
    })
});