'use strict'

import BasePage from './basePage'

class LoginPage extends BasePage {

    navigate () {
        cy.fixture ('urls').then ((url) => {
            super.navigate (url.login);
        })
    }

    get username () {
        return cy.get ('#username');
    }

    get password () {
        return cy.get ('#password');
    }

    get submit () {
        return cy.get ('#submit');
    }

    get invalidLoginMessage () {
        return cy.get ('[class = \'danger\']');
    }

    get validLogin () {
        return cy.get ('[class *= dashboard-header] > div > h1');
    }
}

export default new LoginPage ();