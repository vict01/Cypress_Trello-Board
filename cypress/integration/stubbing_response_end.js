/// <reference types="cypress" />

it('Stubbing response - Editing body response', () => {
  cy
    .intercept({
      method: 'GET',
      url: '/api/boards'
    }, (req) => {
      console.log(req)
      // This modify the response in the frontEnd, but no int DB:
      req.reply( (res) => {
        console.log(res)
        res.body[0].starred = true
        return res
      })
    }).as('boardList')

  cy
    .visit('/')
});

it('Stubbing response - Error handling', () => {
  cy
    .intercept({
      method: 'POST',
      url: '/api/boards'
    }, {
    // This emulates an error when the POST method above is invoked.
      forceNetworkError: true
      }).as('boardList')

  cy
    .visit('/')

  cy
      .get('[data-cy=create-board]')
      .click()

  cy
      .get('[data-cy=new-board-input]')
      .type('New Board {enter}')

  cy
      .get('#errorMessage') // this is a css id locator
      .should('be.visible')

});