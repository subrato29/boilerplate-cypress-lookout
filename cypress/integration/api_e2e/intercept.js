'use strict'

const e2eUtils = require('../../support/utils/e2eUtils')

/// <reference types="Cypress" />
/// <reference types="chai" />

describe('Testing api intercept', () => {
  beforeEach(() => {
    cy.fixture('endpoints').then((endpoint) => {
      e2eUtils.globalThis.endpoint = endpoint
    })
  })

  it('Testing POSTs endpoint', () => {
    cy.visit(e2eUtils.globalThis.endpoint.interceptWebtUrl)
    cy.intercept({
      path: '/posts',
    }).as('post')
    cy.get("table:nth-of-type(1) a[href *= 'posts']").click()
    cy.wait('@post').then((endpoint) => {
      expect(endpoint.response.body).to.have.length(100)
    })
  })

  it('Mocking with intercept test with static response', () => {
    cy.visit(e2eUtils.globalThis.endpoint.interceptWebtUrl)
    cy.intercept('GET', e2eUtils.globalThis.endpoint.post, {
      totalPost: 5,
      name: 'Subrato',
    }).as('post')
    cy.get("table:nth-of-type(1) a[href *= 'posts']").click()
    cy.wait('@post')
  })

  it('Mocking with intercept test with dynamic response', () => {
    const email = e2eUtils.generateRandomString(6) + '@email.com'
    const name = 'Cypress_Test_' + e2eUtils.generateAlphaNumericNo(6)
    const gender = 'male'
    const status = 'active'
    const responseBodyMocked = {
      name: name,
      gender: gender,
      email: email,
      status: status,
    }
    cy.visit(e2eUtils.globalThis.endpoint.interceptWebtUrl)
    cy.intercept(
      'GET',
      e2eUtils.globalThis.endpoint.post,
      responseBodyMocked,
    ).as('post')
    cy.get("table:nth-of-type(1) a[href *= 'posts']").click()
    cy.wait('@post')
  })
})
