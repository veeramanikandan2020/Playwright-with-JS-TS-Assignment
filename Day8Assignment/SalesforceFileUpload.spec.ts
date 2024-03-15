/**
 * Assignment:2
 *
 * 1. Log in to Salesforce application
 *    Note: Create a json fie for the username and password and login
 * 2. Click the app launcher icon
 * 3. Click View All
 * 4. Enter Marketing in the Search text box
 * 5. Click Marketing
 * 6. Click Contacts dropdown
 * 7. Click New Contact
 * 8. Fill the mandatory fields
 * 9. Click Save
 * 10. Verify the Contact created
 * 11. Click Upload files and verify the file uploaded
 * 12. Click View All
 * 13. Click the uploaded file
 * 14. Download the file and save it in your directory
 *
 */

import { chromium, expect, test } from "@playwright/test";

test("Salesforce File Upload", async ({ page }) => {
  await page.goto("https://login.salesforce.com");

  const titleLoginPage = await page.title();

  console.log(`Title of Login Page : ${titleLoginPage}`);

  await expect(titleLoginPage).toContain("Login | Salesforce");

  await page.locator(`#username`).fill(`veeramanikandan2020@testleaf.com`);

  await page.fill(`#password`, "Testleaf2020");

  await page.click("#Login");

  await page.waitForEvent("load");
  const titleHomePage = await page.title();

  console.log(`Title of Home Page : ${titleHomePage}`);

  await expect(titleHomePage).toContain("Lightning Experience");

  console.log(page.url());

  await page.click(
    "//button[contains(@class,'salesforceIdentityAppLauncherHeader')]"
  );

  await page.click("button[kx-type='underline']");

  await page.fill("input[placeholder='Search apps or items...']", "Marketing");

  await page.click(`//div[@data-name='Marketing CRM Classic']//a`);

  await page.waitForEvent("load");

  await page.click(`a[title$=Contacts]+* svg`);

  await page.locator(`//a[@role='menuitem']`).nth(0).click();

  await page.click(`button[name='salutation']`);

  await page.click(`lightning-base-combobox-item[data-value='Mr.']`);

  await page.getByPlaceholder(`Last Name`).fill(`Marikkani`);

  await page.click(`button[name='SaveEdit']`);

  const name = await page
    .locator(`span[class='custom-truncate uiOutputText']`)
    .textContent();

  console.log(name);

  const text = page.locator('//span[text()="Notes & Attachments"]')
  await expect(text).toBeVisible({timeout:10000})
  text.hover({force:true})
//div[text()='Upload Files']
const upload = page.locator('//div[text()="Upload Files"]')
  await expect(upload).toBeVisible({timeout:10000})
  upload.hover({force:true})


  await page.setInputFiles(
    "input[type='file']",
    "I:/VS Code Workspace For PlayWright/PlayWrightTestLeaf/tests/Day8PlaywrightFileUpload/filestoupload/ASCII Table.pdf"
  );

  //Done

  await page.click(`button[class*='desktop uiButton']`);

  const view = page.locator(`//span[text()='Notes & Attachments']//following::span[text()='View All']`);
  await expect(view).toBeVisible({timeout:10000})
await page.waitForSelector("//span[text()='Notes & Attachments']//following::span[text()='View All']")
  await view.hover();
  await view.click();

  await page.waitForTimeout(3000);
  const downArrow = page.locator(`a[class='rowActionsPlaceHolder slds-button slds-button--icon-x-small slds-button--icon-border-filled keyboardMode--trigger']`);

  await expect(downArrow).toBeVisible({timeout:10000});

  downArrow.click();

  const fileToDownload = page.waitForEvent("download");

  await page.getByText("Download", { exact: true }).click();

  const filePath = await fileToDownload;

  await page.waitForTimeout(3000);

  await filePath.saveAs(
    "downloaded Files/" + (await fileToDownload).suggestedFilename()
 );

  await page.click(`a[title='Download']`);
});
