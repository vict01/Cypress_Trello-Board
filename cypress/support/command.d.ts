// in cypress/support/index.d.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />
// This is the documentation of custom commands created in 'cypress\support\commands.js'

declare namespace Cypress {
  interface Chainable {

    /**
     * Creates a new board via UI
     *
     * @example
     * cy
     *   .addBoard('board name')
     */
    addBoard()

    /**
     * Get any element in the board 
     *
     * @example
     * cy
     *   .take('list')
     */
     take()
  }

}