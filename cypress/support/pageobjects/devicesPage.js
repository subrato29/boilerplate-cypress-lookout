'use strict'

import BasePage from './basePage'

class DevicesPage extends BasePage {
  navigate() {
    cy.fixture('urls').then((url) => {
      super.navigate(url.devices)
    })
  }

  get createGroupBtn() {
    return cy.get("button[class *= 'create-group-button']")
  }

  get name() {
    return cy.get("input[id = 'name']")
  }

  get description() {
    return cy.get("input[id = 'description']")
  }

  get confirmBtn() {
    return cy.get("button[class *= 'confirm-button']")
  }

  get confirmationMessageOfGroupCreated() {
    return cy.get("span[class = 'notification-message']")
  }
}

export default new DevicesPage()
