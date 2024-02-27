/*Assignment: 4 Edit Individuals
Test Steps:
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher 
4. Click on the Individuals tab 
5. Search the Individuals last name
6. Click on the Dropdown icon and Select Edit
7. Select Salutation as 'Mr'
8. Now enter the first name
9. Click on Save and Verify the first name 
*/

import {chromium, test} from "@playwright/test"

test("Salesforce edit Individuals ", async() => {

    const browserInstance = await chromium.launch();

    const browserContext = await browserInstance.newContext();
  
    const page = await browserContext.newPage();
  
    await page.goto("https://login.salesforce.com");
  
    await page.locator(`#username`).fill(`veeramanikandan2020@testleaf.com`);
  
    await page.fill(`#password`, "Testleaf2020");
  
    await page.click("#Login");
  
    await page.waitForTimeout(9000);
  
    console.log(await page.title());
  
    console.log(page.url());
  
    await page.click(
      "//button[contains(@class,'salesforceIdentityAppLauncherHeader')]"
    );
  
    await page.click("//button[@aria-label='View All Applications']");
  
    await page.fill(
        "input[placeholder='Search apps or items...']",
        "Individuals"
      );
    
      await page.locator("a[data-label='Individuals']").click();

      await page.fill("input[placeholder='Search this list...']","Manila");

      await page.keyboard.press('Enter');

      await page.click("a[title='Show 2 more actions']");

      await page.click("a[title='Edit']");

      await page.click("a[class='select']");

      await page.click("a[title='Mrs.']");

      await page.click("//button[text()='Save']");

      await page.fill("input[placeholder='First Name']","John");

})

