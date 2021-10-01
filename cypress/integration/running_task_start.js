/// <reference types="cypress" />

// This is not completed, is completed in 'running_task_end.js'
it('Running task', () => {
  // Here 'setupDb.js' will run as data=empty, without the 2nd parameter.
  cy
    .task('setupDb')

  cy
  .visit('/')

});


