Author: Subrato Sarkar
------------------------------
```
This is an e2e frontend testing framework

boilerplate-cypress-lookout

````

What Cypress is
---------------------------------
```
Cypress is a next generation front end testing tool built for the modern web.

One man army. Cypress provides mocha and chai inside their library. You don't need to import external libraries much to write a test case. But if you want something specific, you can.

```

Why Cypress
--------------------------------
```
Cypress is most often compared to Selenium; however Cypress is both fundamentally and architecturally different. Cypress is not constrained by the same restrictions as Selenium.

This enables you to write faster, easier and more reliable tests.

```

Who uses Cypress?
---------------------------------
```
Cypress users are typically developers or QA engineers building web applications using modern JavaScript frameworks.

Cypress enables you to write all types of tests:

End-to-end tests
Integration tests
Unit tests
Cypress can test anything that runs in a browser.

```

Framework built on
------------------------------
```

cypress (coupled with mocha and chai)

node.js

```

Getting started:
------------------------------
```
Make sure node is installed.

git clone 'repo-url'

cd boilerplate-cypress

npm install

```

Running the tests:
-------------------
```
'npx cypress open' OR 
'npm run test' (normal inside the physical browser) OR
'npm run chrome' (all tests will be executed headless mode in chrome with physical browser) OR
'npm run all' (running all tests and generated mochawesome html report)

```

Cypress architechture (folder structure):
-----------------------------------------
```
fixtures
    Is used to provide static constant data.
    url, email, username, env.
    how to call: cy.fixtures ()

integration
    Used to write test cases

plugins
    All plugins and listeners.
    e.g. chrome supported options, accept certificate

support
    For all custom modules/functions/wrappers/libs
    It will be accessible for all tests/specs files 

cypress.json
    cypress related environment configuations (global properties)
    e.g. timeout etc.

```