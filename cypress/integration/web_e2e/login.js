'use strict'

/// <reference types="Cypress" />
/// <reference types="chai" />

import loginPage from '../../support/pageobjects/loginPage'
import e2eUtils from '../../support/utils/e2eUtils'

describe ('Login functionality of MES console', () => {

    beforeEach (() => {
        loginPage.navigate ();
        cy.fixture ('credentials').then ((credential) => {
            e2eUtils.globalThis.credential = credential;
        })
        cy.fixture ('validationTexts').then ((validation) => {
            e2eUtils.globalThis.validation = validation;
        })
    })

    it ('Invalid login test', () => {
        loginPage.username.type ('invalid@gmail.com');
        loginPage.submit.click();
        loginPage.password.type ('password');
        loginPage.submit.click();
        loginPage.invalidLoginMessage.should('have.text', e2eUtils.globalThis.validation.invalidLoginMessage);
    })

    it ('Successful login test', () => {
        loginPage.username.type (e2eUtils.globalThis.credential.username);
        loginPage.submit.click();
        loginPage.password.type (e2eUtils.globalThis.credential.password);
        loginPage.submit.click();
        loginPage.validLogin.should('have.text', e2eUtils.globalThis.validation.validLoginMessage);
    })
})