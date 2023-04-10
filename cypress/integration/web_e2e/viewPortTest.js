'use strict'

/// <reference types="Cypress" />
/// <reference types="chai" />

import loginPage from '../../support/pageobjects/loginPage'

describe('Testing MES console login page in different view ports', () => {
  beforeEach(() => {
    loginPage.navigate()
  })

  it('open in macbook-13', () => {
    cy.viewport('macbook-13')
    cy.wait(1000)
    cy.screenshot()
  })

  it('open in macbook-15', () => {
    cy.viewport('macbook-15')
    cy.wait(1000)
    cy.screenshot()
  })

  it('open in iphone-x', () => {
    cy.viewport('iphone-x')
    cy.wait(1000)
    cy.screenshot()
  })

  it('open in 500 and 750', () => {
    cy.viewport(550, 750)
    cy.wait(1000)
    cy.screenshot()
  })
})
