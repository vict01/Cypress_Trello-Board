/// <reference types="cypress" />

it('Using plugins to drag and drop', () => {
  cy
    .visit('/board/9133225394');

    cy
      .get('[data-cy=task]')
      .eq(0)
      .as('task1')

    cy
      .get('[data-cy=task]')
      .eq(1)
      .as('task2')   

    cy
      .get('@task2')
      .drag('@task1')
});

it('Using plugins to Upload a file', ()=>{
  cy
    .visit('/board/9133225394');

  cy
    .get('[data-cy=task]')
    .eq(0)
    .click()

  cy
    .get('.dropzone')
    // logo.png is saved in 'cypress\fixtures\logo.png'
    .attachFile('logo.png',  { subjectType: 'drag-n-drop' }  )
});

