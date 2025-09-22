import { Page, Locator,expect} from "@playwright/test"


export class HomePage {
 
  page: Page
  homeLink:Locator
  title:Locator
  destinationcountry:Locator
  choosecountry:Locator
  calender:Locator
  fromDate: Locator
  toDate:Locator
  location:Locator
  selectLocation:Locator
  LocAustralia:Locator
  rentingType:Locator
  selectVehicle:Locator
  VehCar:Locator
  GetQuote:Locator
 

  constructor(page: Page, ) {
    this.page = page
    this.homeLink = page.locator('https://www.rentalcover.com/en')
    this.title=page.getByTitle("RentalCover");
    this.destinationcountry=page.locator('#destinationCountry svg')
    this.choosecountry=page.locator("#react-select-3-option-0-0")
    this.calender=page.getByRole('textbox', { name: 'Start Date' })
    this.fromDate =  page.getByRole('button', { name: 'Choose Thursday, September 25' })
    this.toDate= page.getByRole('button', { name: 'Choose Tuesday, October 21,' })
    this.location=page.locator('[data-test-id="cor-change-button"]')
    this.LocAustralia=page.locator('#main-content').getByText('Australia')
    this.selectLocation=page.getByText('Niue', { exact: true })
    this.rentingType= page.locator('[data-test-id="vehicle-change-button"]')
    this.selectVehicle=page.locator('#main-content').getByText('Car')
    this.VehCar=page.getByText('Car', { exact: true })
    this.GetQuote=page.locator('form').getByRole('button', { name: 'Get Your Instant Quote' })

  }
  async navigateTorentalcoverLoginPage() {
    await this.page.goto('https://www.rentalcover.com/en');
  }
  async validateURL()
  {
    await expect(this.page).toHaveURL('https://www.rentalcover.com/en');
  }
  async validateTitle()
  {
    await expect(this.title).toBeVisible
  }
  async fillform() {
    await this.destinationcountry.click()
    await this.choosecountry.click()
    await this.calender.click()
    await this.fromDate.click()
    await this.toDate.click()
    await this.location.click()
    await this.LocAustralia.click()
    await this.selectLocation.click()
    await this.rentingType.click()
    await this.VehCar.click()
    await this.GetQuote.click()
    

  }

//   async failurefillForm() {
//     await this.country.fill(failureLoginCredentials.username);
//     await this.fromDate.fill(failureLoginCredentials.password);
//     await this.toDate.click();
//   }

 

  // async verifyLoginPageisDisplayed() {
  //   await expect(this.userName).toBeVisible();
  }
