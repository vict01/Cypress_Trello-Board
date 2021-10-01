/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/');

});

it('Changing the DOM: Enabling show property', () => {

  cy
    .get('[data-cy="star"]')
    //This "eq" is usefull when exist more than one element that match the condition, easier than nth-child
    .eq(0) 
    //This enables the display property, when an elment is not clickable:
    .invoke('show')
    .click()
})

it('Changing the DOM: Triggering event listeners', () => {
  // Other ways to do the same as above
  cy
    .get('[data-cy="board-item"]')
    .trigger('mouseover')

  cy
    .get('[data-cy="star"]')
    .should('be.visible')

  cy
    .get('[data-cy="board-item"]')
    .trigger('mouseout')

  cy
    .get('[data-cy="star"]')
    .should('not.be.visible')
})