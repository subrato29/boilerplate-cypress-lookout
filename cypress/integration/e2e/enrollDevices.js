'use strict'

/// <reference types="Cypress" />
/// <reference types="chai" />

import loginPage from '../../../cypress/support/pageobjects/loginPage'
import enrollDevicesPage from '../../../cypress/support/pageobjects/enrollDevicesPage'
import e2eUtils from '../../support/utils/e2eUtils'

describe ('Test enroll devices', () => {

    beforeEach (() => {
        loginPage.navigate ();
        cy.fixture ('credentials').then ((credential) => {
            e2eUtils.globalThis.credential = credential;
        })
        cy.fixture ('validations').then ((validation) => {
            e2eUtils.globalThis.validation = validation;
        })
    })

    it ('Enroll devices test', () => {
        loginPage.username.type (e2eUtils.globalThis.credential.username);
        loginPage.submit.click();
        loginPage.password.type (e2eUtils.globalThis.credential.password);
        loginPage.submit.click();
        loginPage.validLogin.should('have.text', e2eUtils.globalThis.validation.validLoginMessage);
        enrollDevicesPage.btnEnrollDevices.click();
        enrollDevicesPage.tabEnrollDevices.should ('have.text', e2eUtils.globalThis.validation.tabEnrollDevices);
        enrollDevicesPage.btnEnrollWithEmail.click();
        enrollDevicesPage.btnAddEmail.should ('have.text', e2eUtils.globalThis.validation.btnAddEmails);
        const email = e2eUtils.generateRandomString (6) + '@email.com';
        enrollDevicesPage.enterEmail.type (email);
        enrollDevicesPage.btnAddEmail.click ();
        enrollDevicesPage.emailAdded.should ('have.text', email);
    })

})