
    import { Page, Locator,expect} from "@playwright/test"
    
    
    export class Popup {
     
      page: Page
      popupPrompt:Locator
      StateSelect:Locator
      Albamaselect:Locator
      InstantQuoteBtn:Locator

      constructor(page: Page, ) {
        this.page = page
        this.popupPrompt=page.getByText("We need one more detail...")
        this.StateSelect=page.getByText("Select or search")
        this.Albamaselect=page.getByText("Alabama")
        this.InstantQuoteBtn=page.locator('[data-test-id="state-selection-modal-cta-button-quote"]')

       }
    
      async rentalcoverpopUp() {
      await this.page.locator('[data-test-id="Modal-header"]').isEnabled() 
      await this.StateSelect.click()
      await this.Albamaselect.click()
      await this.InstantQuoteBtn.click()
}
  
}
     
      
    