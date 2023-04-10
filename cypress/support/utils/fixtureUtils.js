'use strict'

import e2eUtils from './e2eUtils'

var fixtureUtils = {
  getFixture: (value) => {
    cy.fixture(value).then((input) => {
      return e2eUtils.globalThis.input
    })
  },
}

module.exports = fixtureUtils
