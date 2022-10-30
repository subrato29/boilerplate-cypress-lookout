// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
// ***********************************************

import 'cypress-file-upload';

Cypress.Commands.add ('login', (email) => {
    cy.get ('#email').type (email);
    cy.get ('#passwd').type ('Password123');
    cy.get ('#SubmitLogin').click ();
})

Cypress.Commands.add ('search', (product) => {
    cy.get ('input[name = \'search_query\']').type (product);
    cy.get ('button[name = \'submit_search\']').click ();
    cy.get ('.lighter').should ('contain.text', product);
})