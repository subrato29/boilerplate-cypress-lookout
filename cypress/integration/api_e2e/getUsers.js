'use strict'

const e2eUtils = require("../../support/utils/e2eUtils");

/// <reference types="Cypress" />
/// <reference types="chai" />

describe ('GET users test', () => {

    let BEARER_TOKEN = '';

    before (() => {
        cy.fixture ('cypress.env').then ((token) => {
            e2eUtils.globalThis.token = token;
            BEARER_TOKEN = e2eUtils.globalThis.token.BEARER_TOKEN;
        })
    })

    beforeEach (() => {
        cy.fixture ('endpoints').then ((endpoint) => {
            e2eUtils.globalThis.endpoint = endpoint;
        })
    })

    it ('GET all users', () => {
        cy.request({
            method: 'GET',
            url: e2eUtils.globalThis.endpoint.users,
            headers: {
                'authorization': BEARER_TOKEN
            }
        }).then ((res) => {
            expect (res.status).to.eq(200);
        })
    })

})