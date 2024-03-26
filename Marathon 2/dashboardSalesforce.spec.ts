import { chromium, expect, test } from "@playwright/test";

import { request } from "https";

test("Salesforce Create Dashboard Individuals ", async ({ page, context }) => {
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

  await page.fill("input[placeholder='Search apps or items...']", "Dashboards");

  await page.locator("a[data-label='Dashboards']").click();

  await page.waitForLoadState("load");

  await page.click(`div[title='New Dashboard']`);

  await page.waitForLoadState("load");

  const frameOne = page.frameLocator("iframe[title='dashboard']");

  //const newDashboardName= frameOne.locator(`//div[@class='slds-modal__container createModal']//h1`);

  //console.log(await newDashboardName.innerText());

  const dashboardName = frameOne.locator(`#dashboardNameInput`);

  await dashboardName.fill(`Salesforce Automation by Veeramanikandan`);

  const submit = frameOne.locator("//button[text()='Create']");

  await submit.click();

  //await page.waitForLoadState('load');

  const save = frameOne.locator(`//button[text()='Save']`);

  await save.click();

  const title = await page.title();

  console.log(`Title of Dashboard created is : ${title}`);
});

let uri: any;
let access_Token: any;
let dashboardId: any;
let dashboardTitle: any;

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

test(`Get all record with Salesforce Dasboard`, async ({ request }) => {
  const response = await request.get(
    `${uri}/services/data/v59.0/sobjects/Dashboard`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + access_Token,
      },
    }
  );

  const resBody = await response.json();

  dashboardId = resBody.recentItems[0].Id;

  dashboardTitle = resBody.recentItems[0].Title;

  console.log(`DashboardId is : ${dashboardId}`);

  console.log(`DashboardTitle is : ${dashboardTitle}`);
});

test(`Delete record with Salesforce Dasboard using id`, async ({ request }) => {
  const response = await request.delete(
    `${uri}/services/data/v59.0/sobjects/Dashboard/` + `dashboardId`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + access_Token,
      },
    }
  );

  const deleteStatusCode = response.status();

  console.log(`Delete status Code: ${deleteStatusCode}`);
});
