'use strict'

export default class BasePage {
  navigate(url) {
    cy.visit(url)
  }
}
