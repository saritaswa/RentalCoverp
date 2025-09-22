# RentalCoverp
UI Test automation using Playwright in Typescript


Playwright Test Automation
Getting Started
Make sure your system has NodeJS installed.
Install all the dependencies. Run npm install. You should find a node_modules folder in your project directory aftwerwards.
Running the tests
There are several ways to run the test.

To run only on chromium browser (headed) - npx playwright test forecast.spec.ts --project=chromium --headed
To run only on firefox browser (headed) - npx playwright test forecast.spec.ts --project=firefox --headed
To run only on webkit browser (headed) - npx playwright test forecast.spec.ts --project=webkit --headed
To run the test on all the browsers, use npx playwright test --headed

NOTE: Omit --headed to run on headless mode.

Goodies
Uses page object model
