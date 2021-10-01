/// <reference types="cypress" />
const boardName = 'Special Board!'

it('Intercept requests', () => {

  cy
    .intercept({
      method: 'POST',
      url: '/api/boards'
    }).as('createBoard')

  cy
    .visit('/')

  cy
    .get('[data-cy=create-board]')
    .click()

  cy
    .get('[data-cy=new-board-input]')
    .type(boardName + '{enter}')

  cy
    .wait('@createBoard')
    .then( (board) => {
      expect(board.request.body.name).to.eq(boardName)
      expect(board.response.statusCode).to.eq(201)      
    })

});