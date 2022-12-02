'use strict'

const e2eUtils = require("../../support/utils/e2eUtils");
import httpUtils from '../../support/apiUtils/httpUtils';

/// <reference types="Cypress" />
/// <reference types="chai" />

describe ('Request chaining', () => {

    const RANDOM_KEY = e2eUtils.generateAlphaNumericNo(6);
    const email = RANDOM_KEY + '@email.com';
    const name = 'Cypress_Test_' + RANDOM_KEY;
    const gender = 'male';
    const status = 'active';
    
    const UPDATED = '_UPDATED';

    const RESPONSE_CODE_200 = 200;
    const RESPONSE_CODE_204 = 204;
    const RESPONSE_CODE_201 = 201;

    beforeEach (() => {
        cy.fixture ('endpoints').then ((endpoint) => {
            e2eUtils.globalThis.endpoint = endpoint;
        })
    })

    it('Testing CRUD operation', () => {
        let requestBody = {
            "name" :  name,
            "gender" : gender,
            "email" : email,
            "status" : status
        }
        return httpUtils.post (e2eUtils.globalThis.endpoint.users, requestBody)
        .then(res => {
            expect(res.status).to.eq(RESPONSE_CODE_201);
            expect(res.body).has.property('name', name);
            expect(res.body).has.property('email', email);
            expect(res.body).has.property('gender', gender);
            expect(res.body).has.property('status', status);
        }).then (res => {
            const userId = res.body.id;
            requestBody = {
                "name" :  name + UPDATED,
                "gender" : gender,
                "email" : email,
                "status" : status
            }
            return httpUtils.put (e2eUtils.globalThis.endpoint.users + userId, requestBody)
            .then (res => {
                expect (res.status).to.eq (RESPONSE_CODE_200);
                expect (res.body).has.property ('name', name + UPDATED);
            }).then (() => {
                return httpUtils.get (e2eUtils.globalThis.endpoint.users + userId);
            }).then ((res) => {
                expect (res.status).to.eq (RESPONSE_CODE_200);
            }).then (() => {
                return httpUtils.delete (e2eUtils.globalThis.endpoint.users + userId)
            }).then (res => {
                expect(res.status).to.eq (RESPONSE_CODE_204);
            })
        })
    })
})