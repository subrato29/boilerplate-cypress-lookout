'use strict'

/// <reference types="Cypress" />
/// <reference types="chai" />

import devicesPage from '../../../cypress/support/pageobjects/devicesPage'
import loginPage from '../../../cypress/support/pageobjects/loginPage'
import e2eUtils from '../../support/utils/e2eUtils'

describe ('Validation of Devices page', () => {

    beforeEach (() => {
        devicesPage.navigate ();
        cy.fixture ('credentials').then ((credential) => {
            e2eUtils.globalThis.credential = credential;
        })
        cy.fixture ('validations').then ((validation) => {
            e2eUtils.globalThis.validation = validation;
        })
    })

    it ('Validation of creating group', () => {
        loginPage.username.type (e2eUtils.globalThis.credential.username);
        loginPage.submit.click();
        loginPage.password.type (e2eUtils.globalThis.credential.password);
        loginPage.submit.click();
        devicesPage.createGroupBtn.click ();
        const randomInt = e2eUtils.generateRandomInt(6);
        devicesPage.name.type ('Automation_' + randomInt);
        devicesPage.description.type ('AutomationGroup_' + randomInt);
        devicesPage.confirmBtn.click ();
        devicesPage.confirmationMessageOfGroupCreated.should ('have.text', e2eUtils.globalThis.validation.confirmationOfDeviceGroupCreated);
    })
})