import {test,chromium} from "@playwright/test"

test("SalesForce Login", async({page})=> {
    
    await page.goto("https://login.salesforce.com/");

      console.log(page.url());
    
      await page.locator(`#username`).fill('veeramanikandan2020@testleaf.com');
    
      await page.locator(`#password`).fill(`Testleaf2020`);
    
      await page.click(`input[name='Login']`);
    
      console.log(await page.title());
    
      await page.waitForTimeout(9000);

})