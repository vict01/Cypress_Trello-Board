/// <reference types="cypress" />

// When we work with 'intercept' we must use the 'visit' method 'afterEach' not 'beforeEach':
afterEach(() => {
  cy
    .visit('/')
})

it('Stubbing response - Hardcode replacement', () => {
  cy
    .intercept({
      method: 'GET',
      url: '/api/boards'
    },{
    // This 2nd parameter, modify the response in the frontEnd, but no int DB:
      body: []
    }).as('boardList')
});

it('Stubbing response - Using data from a file', () => {
  cy
    .intercept({
      method: 'GET',
      url: '/api/boards'
    },{
    // Here, we replace the response using data from 'threeBoards' file in the fixtures folder:
      fixture: 'threeBoards'
    }).as('boardList')

});