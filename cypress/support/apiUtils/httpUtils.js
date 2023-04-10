'use strict'

/// <reference types="Cypress" />
/// <reference types="chai" />

import authToken from '../../fixtures/token.json'

var httpUtils = {
  /**
   *
   * @param {*} endpoint
   * @returns
   */
  get: (endpoint) => {
    return cy.request({
      method: 'GET',
      url: endpoint,
      headers: authToken,
    })
  },

  /**
   *
   * @param {*} endpoint
   * @param {*} requestBody
   * @returns
   */
  post: (endpoint, requestBody) => {
    return cy.request({
      method: 'POST',
      url: endpoint,
      headers: authToken,
      body: requestBody,
    })
  },

  /**
   *
   * @param {*} endpoint
   * @param {*} requestBody
   * @returns
   */
  put: (endpoint, requestBody) => {
    return cy.request({
      method: 'PUT',
      url: endpoint,
      headers: authToken,
      body: requestBody,
    })
  },

  /**
   *
   * @param {*} endpoint
   * @returns
   */
  delete: (endpoint) => {
    return cy.request({
      method: 'DELETE',
      url: endpoint,
      headers: authToken,
    })
  },
}

module.exports = httpUtils
