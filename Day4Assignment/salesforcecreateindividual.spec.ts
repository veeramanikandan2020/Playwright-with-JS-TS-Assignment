/*
Assignment: 3 Create Individuals
Test Steps: 
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher
4. Click on the Dropdown icon in the Individuals tab
5. Click on New Individual
6. Enter the Last Name
7. Click save and verify Individuals Name */

import { chromium, expect, test } from "@playwright/test";

test("Salesforce Create Individuals ", async () => {
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

  await page.click("a[title$=Individuals]+* svg");

  await page.click("//span[text()='New Individual']");

  const leadName = "Manila"

  await page.fill("input[placeholder='Last Name']", leadName);

  await page.click("//button[@title='Save']");

  const createdIndividualName = await page.locator("//span[@class='uiOutputText']").textContent()

  console.log(`Individual New record created is : ` +createdIndividualName);

  await expect(createdIndividualName).toStrictEqual(leadName);

  await page.waitForTimeout(5000);
});
