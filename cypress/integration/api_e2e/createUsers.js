'use strict'

const e2eUtils = require("../../support/utils/e2eUtils");

/// <reference types="Cypress" />
/// <reference types="chai" />

describe ('POST user test', () => {

    let BEARER_TOKEN = '';

    const email = e2eUtils.generateRandomString(6) + '@email.com';
    const name = 'Cypress_Test_' + e2eUtils.generateAlphaNumericNo(6);
    const gender = 'male';
    const status = 'active';

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

    it('Create user test', () => {
        //1. POST user
        cy.request({
            method : 'POST',
            url : e2eUtils.globalThis.endpoint.users,
            headers : {
                'Authorization' : BEARER_TOKEN
            },
            body : {
                "name" :  name,
                "gender" : gender,
                "email" : email,
                "status" : status
            }
        }).then((res) => {
            //cy.log(JSON.stringify(res));
            expect(res.status).to.eq(201);
            expect(res.body).has.property('name', name);
            expect(res.body).has.property('email', email);
            expect(res.body).has.property('gender', gender);
            expect(res.body).has.property('status', status);
        }).then ((res) => {
            const userId = res.body.id;
            cy.request({
                method: 'GET',
                url: e2eUtils.globalThis.endpoint.users + userId,
                headers: {
                    'authorization': BEARER_TOKEN
                }
            }).then ((res) => {
                //GET created user details
                expect (res.status).to.eq(200);
                expect (res.body).has.property('id', userId);
                expect (res.body).has.property('name', name);
                expect (res.body).has.property('status', status);
                expect (res.body).has.property('email', email);
            })
        })
    })
})