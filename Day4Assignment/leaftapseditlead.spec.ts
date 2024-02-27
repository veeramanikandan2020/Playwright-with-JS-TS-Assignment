/*
Assignment: 2 Edit Lead
http://leaftaps.com/opentaps/control/main			
1. Launch the browser
2. Enter the username
3. Enter the password
4. Click Login
5. Click CRM/SFA link
6. Click Leads link
7. Click on Create Lead
8. Enter company name
9. Enter first name
10.Enter last name
11.Click on Create Lead button  
12.Click Edit
13.Change the company name
14.Click Update
*/

import { chromium, test } from "@playwright/test";

test("Login to LeafTaps Application", async () => {
  const browserInstance = await chromium.launch();

  const browserContext = await browserInstance.newContext();

  const page = await browserContext.newPage();

  await page.goto("http://leaftaps.com/opentaps/control/main");

  await page.locator(`#username`).fill(`demosalesManager`);

  await page.fill(`#password`, "crmsfa"); //second Method

  await page.click(`.decorativeSubmit`);

  console.log(await page.title());

  console.log(page.url());

  await page.click("text=CRM/SFA");

  await page.waitForTimeout(3000);

  console.log(await page.title());

  await page.waitForTimeout(3000);

  await page.click("//a[text()='Leads']");

  await page.click("//a[text()='Create Lead']");

  await page.locator("#createLeadForm_companyName").fill("SAT");

  await page.locator("#createLeadForm_firstName").fill("Mani");

  await page.locator("#createLeadForm_lastName").fill("Manoharan");

  await page.click(".smallSubmit");

  await page.waitForTimeout(3000);

  console.log(await page.title());

  await page.click("//a[text()='Edit']");

  await page.locator("#updateLeadForm_companyName").clear();

  console.log(await page.title());

  await page.fill("#updateLeadForm_companyName", "Google");

  await page.click("//input[@value='Update']");

  await page.waitForTimeout(5000);
});
