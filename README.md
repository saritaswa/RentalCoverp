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

Project Structure
The project is structured to ensure modularity and ease of maintenance. Key components include:

Playwright Configuration: 
Located in playwright.config.js, this file contains configurations for running tests in parallel, retry mechanisms, and reporter settings among others.

**Page Objects, actions, assertions: Found under the pages directory, page objects like HomePage.ts, Popup.ts and ProtectionCover.ts encapsulate the elements on the web pages and the actions that can be performed on them, promoting reusability and reducing code duplication. Similarly actions, assertions encapsulate the respective tasks in a modular way for respective pages.

About Modularity
Modularity is a core principle in this project, allowing for separation of concerns and making the codebase easier to navigate and maintain. By dividing the project into logical units such as configurations, page objects, and tests, we enhance code reusability and simplify the testing process.

Fixtures
Fixtures in Playwright are used to provide a consistent test environment and reusable pieces of code.

By adhering to these principles and structures, the project aims to provide a robust and maintainable test suite for the web application.

Hooks :
Hooks part of cucumber are used to provide a better way for beforeAll, AfterALL, BeforeEach and AfterEach.
