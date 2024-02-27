/*

/*Test Steps:
Assignment: 1 Create Lead
1. Login to https://login.salesforce.com
2. Click on toggle menu button from the left corner
3. Click view All and click Sales from App Launcher
4. Click on Leads tab 
5. Click on New button
6. Select Salutation dropdown
7. Enter the Last Name
8. Enter the CompanyName 
9. Click Save and Verify Leads name created*/

import {chromium, expect, test} from "@playwright/test"

test("Salesforce Create Individuals ", async() => {

    const browserInstance = await chromium.launch();

    const browserContext = await browserInstance.newContext();
  
    const page = await browserContext.newPage();
  
    await page.goto("https://login.salesforce.com");
  
    await page.locator(`#username`).fill(`veeramanikandan2020@testleaf.com`);
  
    await page.fill(`#password`, "Testleaf2020");
  
    await page.click("#Login");
  
    await page.waitForTimeout(9000);
  
    console.log(await page.title());
  
    await page.click(
      "//button[contains(@class,'salesforceIdentityAppLauncherHeader')]"
    );
  
    await page.click("//button[@aria-label='View All Applications']");
  
    await page.fill(
      "input[placeholder='Search apps or items...']",
      "Sales"
    );
  
    await page.locator("//div[@data-name='Sales']//a").click();

    await page.click("a[title=Leads]");

    await page.click("//button[text()='New']");

    await page.click("button[name=salutation]");

    await page.click("//span[@title='Mr.']");

    const createLeadName = `Kamlesh`;

    await page.fill("input[placeholder='Last Name']",createLeadName);

    await page.fill("input[name='Company']","SAT");

    await page.click("button[name='SaveEdit']");

    const leadName = await page.locator("//lightning-formatted-name[@slot='primaryField']").textContent();

    console.log(`Lead Name Created in Sales is ${leadName}`);

    await expect(leadName).toContain(createLeadName);
})

