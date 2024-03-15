/*
 * 1. Login to Servicenow application
 *          Load the url :https://dev87582.service-now.com/
 *          username: admin
 *          password:testleaf$123
 * 2. Click 'All'
 * 3. Enter 'Service Catalog' in the filter
 * 4. Click 'Service Catalog'
 * 5. Click 'Mobiles'
 * 6. Click 'Apple iPhone 13
 * 7. Fill all the fields present(handle dropdown and radio buttons)
 * 8. Click Order Now
 * 9. Verify the Order status
 *
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
  console.log('Request Number: ' + requestNumber);
  
});
