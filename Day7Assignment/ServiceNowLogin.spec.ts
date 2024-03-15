
//Sample instance and credentials
//Url to be loaded
// https://dev205797.service-now.com/
// Credentials
// Username: admin
// Password; Testleaf@123


import{test} from "@playwright/test"

test("service-now Login",async({page,context})=>{

    await page.goto(`https://dev205797.service-now.com/`);

await page.fill(`#user_name`,`admin`);

await page.fill(`#user_password`,`Testleaf@123`);

await page.click(`#sysverb_login`);

})