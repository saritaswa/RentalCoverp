import { test, expect } from '../Pages/fixture'
import { HomePage } from '../Pages/HomePage'
import { Popup } from '../Pages/Popup'
import { ProtectionCover } from '../Pages/ProtectionCover'


test('get instant quote', async ({ page,homePage,popUp,protectionPage }) => {
  await homePage.navigateTorentalcoverLoginPage()
  await homePage.validateTitle()
  await homePage.validateURL()
  await homePage.fillform()
  await popUp.rentalcoverpopUp()
  await protectionPage.protectioncover()
  await page.screenshot({ path: 'screenshot.png' });  
});
