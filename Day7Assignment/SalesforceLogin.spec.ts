/*
  
    Homework: Window
    Login to "https://login.salesforce.com/"
    Enter Username, Password and click Login
    ClicK 'Learn More' button under Mobile Publisher 
    Click 'Confirm' on the new window
    Verify and validate the title, url of the page
*/

import { test } from "@playwright/test";

test("Salesforce Login", async ({ page, context }) => {
  await page.goto(`https://login.salesforce.com/`);

  await page.fill(`#username`, `veeramanikandan2020@testleaf.com`);

  await page.fill(`#password`, `Testleaf2020`);

  await page.click(`#Login`);

 // await page.waitForLoadState("load");

  await page.waitForTimeout(5000);

  await page.click(`//span[text()='Learn More']`);

  const newPage = context.waitForEvent("page");
  //await page.getByText(`Learn More`, { exact: true }).click();
  const newTab = await newPage;
  console.log(newTab.url());

  await page.getByText(`Confirm`,{exact:true}).click();

  console.log(newTab.url());
});
