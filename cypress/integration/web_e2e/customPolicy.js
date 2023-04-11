'use strict'

/// <reference types="Cypress" />
/// <reference types="chai" />

import customPolicyPage from '../../support/pageobjects/customPolicyPage'
import loginPage from '../../support/pageobjects/loginPage'
import e2eUtils from '../../support/utils/e2eUtils'

describe('Validation of custom policy', () => {
  beforeEach(() => {
    customPolicyPage.navigate()
    cy.fixture('credentials').then((credential) => {
      e2eUtils.globalThis.credential = credential
    })
    cy.fixture('validationTexts').then((validation) => {
      e2eUtils.globalThis.validation = validation
    })
  })

  it('Verification of Custom Policy page', () => {
    loginPage.username.type(e2eUtils.globalThis.credential.username)
    loginPage.submit.click()
    loginPage.password.type(e2eUtils.globalThis.credential.password)
    loginPage.submit.click()
    customPolicyPage.tabCustomPolicies.should(
      'have.text',
      e2eUtils.globalThis.validation.tabCustomPolicies
    )
  })
})
