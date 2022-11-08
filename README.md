Author: Subrato Sarkar
------------------------------
```
This is an e2e functional testing framework for Web and API

boilerplate-cypress-lookout

````

What Cypress is
---------------------------------
```
Cypress is a next generation front end testing tool built for the modern web.

One man army. Cypress provides mocha(unit testing framework) and chai(assertion library) inside their library. You don't need to import external libraries much to write a test case. But if you want something specific, you can.

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

Framework feature:
---------------------------------
```
Test automation for Web and API can be performed in a SINGLE code-base

PageObject model introduced for Web

Reusable & Robust to automate any Web and API platform

User friendly HTML report after test execution done

Mocha(unit testing) and chai (assertion library) provided by Cypress itself. No need to import externally.

Fast execution speed. Faster than Selenium WebDriver

Video recording and screenshot feature

Execution in physical browser and headless

Easy debugging

Easy to write test case

Well organized and easy maintenance

No need to declare implicit or explicit wait for synchronization at test case level for Web testing

User can run Web and API test scenarios on a single run instance, or separate instances, as per requirement

API intercept feature invoked

```

Getting started:
------------------------------
```
Make sure node is installed.

git clone 'repo-url'

cd boilerplate-cypress-lookout

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