import { test, expect } from '../Pages/fixture'
import { HomePage } from '../Pages/HomePage'
import { Popup } from '../Pages/Popup'

test('get instant quote', async ({ page,homePage,popUp }) => {
  await homePage.navigateTorentalcoverLoginPage()
  await homePage.validateTitle()
  await homePage.validateURL()
  await homePage.fillform()
  await popUp.rentalcoverpopUp()
  await page.screenshot({ path: 'screenshot.png' });  
});
