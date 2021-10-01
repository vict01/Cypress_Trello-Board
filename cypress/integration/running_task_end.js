/// <reference types="cypress" />

it('Running task', () => {
  // Here 'setupDb.js' will run with the second parameter, definint a JSON array after the file name.
  cy
    .task('setupDb', {
      boards: [{
        name: 'board created with .task()',
        id: 1,
        starred: false,
        user: 0
      }],
      lists: [],
      tasks: [],
      users: []
    })

  cy
    .visit('/')

});