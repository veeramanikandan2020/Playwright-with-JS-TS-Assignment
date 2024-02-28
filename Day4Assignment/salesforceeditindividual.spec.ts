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

import {chromium, expect, test} from "@playwright/test"

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

    await page.click("button[kx-type='underline']");
  
   // await page.click("//button[@aria-label='View All Applications']");
  
    await page.fill(
        "input[placeholder='Search apps or items...']",
        "Individuals"
      );
      const lastName = "Manoharan";

      await page.locator("a[data-label='Individuals']").click();

      await page.fill("input[placeholder='Search this list...']",lastName);

      await page.keyboard.press('Enter');

      await page.click("tbody tr:first-child >td a[role='button']");

      await page.click("li[role='presentation'] >a[title='Edit'] ");

      await page.click("a[class='select']");

      await page.click("a[title='Mr.']"); //title='Mrs.'

      const firstName = "Veeramanikandan";

      await page.fill("input[placeholder='First Name']",firstName);

      await page.click("button[title='Save']");

      const recordName = await page.locator("(//a[@data-refid='recordId'])[1]").textContent();

      //const recordName = page.getByText(lastName, { exact: true }).first();

      console.log("Record name :"+recordName);

      //console.log(await page.locator("tbody tr th a").textContent());

      await expect(recordName).toContain(firstName);
})



