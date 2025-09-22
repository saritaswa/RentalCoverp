
    import { Page, Locator,expect} from "@playwright/test"
    
    
    export class ProtectionCover {
     
      page: Page
      protectionCover:Locator

      constructor(page: Page, ) {
        this.page = page
        this.protectionCover=page.getByText("Your protection")
       }
    
      async protectioncover() {
      await this.protectionCover.isVisible()
     
}
  
}