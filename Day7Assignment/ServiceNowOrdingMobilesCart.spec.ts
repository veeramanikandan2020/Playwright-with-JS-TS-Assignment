/*
// 2 .ServiceNow -Ordering Mobile(Frames)
// ---------------------------
// Note: Steps to create your instance is attached under reference document. Kindly create your own instance and automate the application

// 1. Launch ServiceNow application
// 2. Login with valid credentials 
// 3. Click-All Enter Service catalog in filter navigator and press enter or Click the ServiceCatalog
// 4. Click on  mobiles
// 5. Select Apple iphone13pro
// 6. Choose yes option in lost or broken iPhone
// 7. Enter phonenumber as 99 in original phonenumber field
// 8. Select Unlimited from the dropdown in Monthly data allowance
// 9. Update color field to SierraBlue and storage field to 512GB
// 10. Click on Order now option
// 11. Verify order is placed
 */

import { expect, test } from "@playwright/test";

test("service-now Login", async ({ page, context }) => {
  await page.goto(`https://dev204936.service-now.com/`);

  //await page.goto(`https://dev198313.service-now.com/`);

  await page.fill(`#user_name`, `admin`);

  await page.fill(`#user_password`, `Yuvan@123`);

  await page.click(`#sysverb_login`);

  await page.waitForLoadState("load");

  await page.getByText(`All`, { exact: true }).click();

  await page.waitForLoadState("load");

  await page.getByPlaceholder("Filter").fill("Ser");

  const serviceLocator = page.getByLabel("Service Catalog", { exact: true });

  await serviceLocator.click();

  //iframe

  const frameMain = page.frameLocator(`#gsft_main`);

  const mobiles = frameMain.locator(`//a[text()='Mobiles']`);

  await mobiles.click();

  const iPhone13 = frameMain.locator(
    `//strong[text()='Apple iPhone 13']/ancestor::a`
  );

  await iPhone13.click();

  const frameMain1 = page.frameLocator(`#gsft_main`);

  const replacement = frameMain.locator(`label[class='radio-label']`).nth(0);

  await replacement.click();

  const mobile = frameMain1.locator(
    `input[class='cat_item_option sc-content-pad form-control']`
  );

  mobile.fill(`9619508681`);

  const data = frameMain1.locator(
    `select[class='form-control cat_item_option ']`
  );

await data.click();

  await data.selectOption(`Unlimited`);

  const blue = frameMain.locator(`input[value='blue'] + label`);

  await blue.click();

  const memory = frameMain.locator(`input[value='512'] + label`);

  await memory.click();

  const order = frameMain.locator(`#oi_order_now_button`);

  await order.click();

  const frameMain2 = page.frameLocator(`#gsft_main`);
const requestNumber = await frameMain2.locator('a[id="requesturl"]').innerText();
console.log('Request Number: ' + requestNumber);
});
