'use strict'

import BasePage from './basePage'

class EnrollDevicePage extends BasePage {
  get btnEnrollDevices() {
    return cy.get("a[class *= 'enroll-device']")
  }

  get tabEnrollDevices() {
    return cy.get("h1[class *= 'enroll-devices'] span")
  }

  get btnEnrollWithEmail() {
    return cy.get("button[class *= 'enroll-via-email-button']")
  }

  get btnAddEmail() {
    return cy.get("button[class *= 'add-email-button']")
  }

  get enterEmail() {
    return cy.get("textarea[class *= 'text-emails']")
  }

  get emailAdded() {
    return cy.get("div[class *= 'enrollment-email-editable'] div:nth-child(1)")
  }
}

export default new EnrollDevicePage()
