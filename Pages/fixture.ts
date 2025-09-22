import { test as base } from '@playwright/test';
import { HomePage } from './HomePage';
import { Popup } from './Popup';
import { ProtectionCover } from './ProtectionCover';

// Declare the types of your fixtures.
type MyFixtures = {
  homePage: HomePage;
  popUp: Popup;
  protectionPage:ProtectionCover
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
  protectionPage: async ({ page }, use) => {
    const protection=
    new ProtectionCover(page)
    await use(protection)
  },
});
export { expect } from '@playwright/test';