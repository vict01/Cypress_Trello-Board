/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/board/40694707862')
})

it('Multiple assertions', () => {

  cy
    .get('[data-cy=task]')
    .eq(0)
    .should('contain.text', 'bread')

  cy
    .get('[data-cy=task]')
    .eq(1)
    .should('contain.text', 'milk')

})

it('Multiple assertions - shorter and smarter way', () => {

  cy
    .get('[data-cy=task]')
    .should(item =>{
      console.log(item)
      if(item.length !== 3){
        throw new Error('There is no enough items!')
      }
      expect(item[0]).to.contain.text('bread')
      expect(item[1]).to.contain.text('milk')
    })

})