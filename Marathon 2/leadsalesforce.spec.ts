import { chromium, test } from "@playwright/test";
import { request } from "https";

let uri: any;
let access_Token: any;
let id: any;

test("Salesforce Generate AuthTOken API Lead", async ({ request }) => {
  const response = await request.post(
    `https://login.salesforce.com/services/oauth2/token`,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Connection: "keep-alive",
      },
      form: {
        grant_type: "password",
        client_id:
          "3MVG9q4K8Dm94dAypiTfkDpjglc.x..4fn2GBCSOgyPoE1dEXXC6HZAPLEXMedmMUieNQhpwHXSCB.8XJnIfR",
        client_secret:
          "FFC55D963B204646F65E48A02AD6340AA5A7C4DFF631E43A7620EF8A2CAD5E40",
        username: "veeramanikandan2020@testleaf.com",
        password: "Testleaf2020",
      },
    }
  );

  const generateToken = await response.json();

  access_Token = generateToken.access_token;

  uri = generateToken.instance_url;

  console.log(`Access Token : ${access_Token} and URI = ${uri}`);
});

test(`Create a record with Salesforce Lead`, async ({ request }) => {
  const response = await request.post(
    `${uri}/services/data/v59.0/sobjects/lead`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + access_Token,
      },
      data: {
        LastName: "Muralidharan",
        Salutation: "Mr.",
        Company: "Pearson",
      },
    }
  );

  const resBody = await response.json();

  id = resBody.id;
  console.log(resBody.id);
});

test(`Get a record with Salesforce Lead using ID`, async ({ request }) => {
  const response = await request.get(
    `${uri}/services/data/v59.0/sobjects/Opportunity/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + access_Token,
      },
    }
  );

  const resBody = await response.json();

  console.log(`Get before Patch Response Body : ${resBody}`);
});

test(`Patch a record with Salesforce lead using ID`, async ({ request }) => {
  const response = await request.patch(
    `${uri}/services/data/v59.0/sobjects/Opportunity/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + access_Token,
      },
      data: {
        FirstName: "Hariharan",
        Title: "Developer",
      },
    }
  );

  const statuscode = response.status();

  console.log(`Patch : ${statuscode}`);
});

test(`Get a record with Salesforce Lead using ID after Patch`, async ({
  request,
}) => {
  const response = await request.get(
    `${uri}/services/data/v59.0/sobjects/Opportunity/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + access_Token,
      },
    }
  );

  const resBody = await response.json();

  console.log(`Get after Patch Response Body : ${resBody}`);
});

test("Salesforce Lead Deletion ", async ({ page, context }) => {
  await page.goto("https://login.salesforce.com");

  await page.locator(`#username`).fill(`veeramanikandan2020@testleaf.com`);

  await page.fill(`#password`, "Testleaf2020");

  await page.click("#Login");

  await page.waitForLoadState("load");

  console.log(await page.title());

  await page.click(
    "//button[contains(@class,'salesforceIdentityAppLauncherHeader')]"
  );

  await page.click("button[kx-type='underline']");

  await page.fill("input[placeholder='Search apps or items...']", "Leads");

  await page.locator("a[data-label='Leads']").click();

  //await page.waitForLoadState('load');

  await page.click(`button[aria-label='Search']`);

  await page.keyboard.press("Enter");

  await page.fill(`input[placeholder='Search...']`, "Muralidharan");

  await page.keyboard.press("Enter");

  await page.getByRole("button", { name: "Show Actions" }).first().click();

  await page.click(`a[title='Delete']`);

  await page.click(`button[title='Delete']`);

  await page.click(`button[aria-label='Search']`);

  await page.keyboard.press("Enter");

  await page.fill(`input[placeholder='Search...']`, "Muralidharan");

  await page.keyboard.press("Enter");

  const message = await page.locator(`//div[contains(@class,'noResultsMessage')]//span`).textContent();

  console.log(message);
  
});
