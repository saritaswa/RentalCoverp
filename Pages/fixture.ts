import { test as base } from '@playwright/test';
import { HomePage } from './HomePage';
import { Popup } from './Popup';

// Declare the types of your fixtures.
type MyFixtures = {
  homePage: HomePage;
  popUp: Popup;
};

export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    // Set up the fixture.
    const home = new HomePage(page);
    await use(home);    
  },

  popUp: async ({ page }, use) => {
    await use(new Popup(page));
  },
});
export { expect } from '@playwright/test';