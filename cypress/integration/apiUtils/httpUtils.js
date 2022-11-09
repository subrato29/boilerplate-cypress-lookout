'use strict'

/// <reference types="Cypress" />
/// <reference types="chai" />

import authToken from '../../fixtures/token.json';

var httpUtils = {
    get: (endpoint) => {
        return cy.request ({
            method: 'GET',
            url: endpoint,
            headers: authToken
        })
    },
    post: (endpoint, requestBody) => {
        return cy.request({
            method : 'POST',
            url : endpoint,
            headers : authToken,
            body : requestBody
        })
    },
    put: (endpoint, requestBody) => {
        return cy.request({
            method : 'PUT',
            url : endpoint,
            headers : authToken,
            body : requestBody
        })
    },
    delete: (endpoint) => {
        return cy.request ({
            method: 'DELETE',
            url: endpoint,
            headers: authToken
        })
    }
}

module.exports = httpUtils;