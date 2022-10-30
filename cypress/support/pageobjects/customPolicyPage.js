'use strict'

import BasePage from './basePage'

class CustomPolicyPage extends BasePage {

    navigate () {
        cy.fixture ('urls').then ((url) => {
            super.navigate (url.customPolicies);
        })
    }

    get tabCustomPolicies () {
        return cy.get ('span[role = \'tab\']');
    }
}

export default new CustomPolicyPage ();