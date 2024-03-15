/**
 *
 * Assignment: 3
 *
 * 1. Auto login to your Salesforce application
 * 2. Click the App launcher icon
 * 3. Click View All
 * 4. Enter Content in the Search box
 * 5. Click Content
 * 6. Click Chatter
 * 7. Click Question
 * 8. Fill the Question and Details field
 * 9. Click Ask
 * 10. Verify the Question and Details created
 *
 */

import { chromium, expect, test } from "@playwright/test";

test("Salesforce edit Individuals ", async ({ page }) => {
  await page.goto("https://login.salesforce.com");

  const titleLoginPage = await page.title();

  console.log(`Title of Login Page : ${titleLoginPage}`);

  await expect(titleLoginPage).toContain("Login | Salesforce");

  await page.locator(`#username`).fill(`veeramanikandan2020@testleaf.com`);

  await page.fill(`#password`, "Testleaf2020");

  await page.click("#Login");

  // await page.waitForTimeout(9000);
  await page.waitForEvent("load");
  const titleHomePage = await page.title();

  console.log(`Title of Home Page : ${titleHomePage}`);

  await expect(titleHomePage).toContain("Lightning Experience");

  console.log(page.url());

  await page.click(
    "//button[contains(@class,'salesforceIdentityAppLauncherHeader')]"
  );

  await page.click("button[kx-type='underline']");

  await page.fill("input[placeholder='Search apps or items...']", "Content");

  await page.click(
    `//mark[text()='Content']/preceding::a[@class='slds-text-heading_small']`
  );

  await page.waitForEvent("load");

  await page.click("a[title='Chatter']");

  await page.click("a[title='Question']");

  await page
    .getByPlaceholder(`What would you like to know?`)
    .fill("Who is the PM of India?");

  await page.fill(
    "div[data-placeholder='If you have more to say, add details here...'] > p",
    "Narendra Modi"
  );

  await page.click(`button[title='Click, or press Ctrl+Enter']`);

  const question = await page
    .locator(`div[class*='cuf-questionTitle'] > span`).nth(0)
    .textContent();

  //const answer = await page.locator(`div[class*='cuf-questionBody'] > span`).nth(0).textContent();

    const answer = await page
    .locator(`div[class='feedBodyInner Desktop oneApp'] > p`).nth(0)
    .textContent();
    
    console.log(`Question :${question}`);

    console.log(`Answer : ${answer}`);

  await expect(question).toContain(`Who is the PM of India?`);

  await expect(answer).toContain(`Narendra Modi`);
});
