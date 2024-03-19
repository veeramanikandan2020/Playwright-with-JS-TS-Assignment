import {chromium, test} from '@playwright/test'
import { request } from 'https';

let uri:any;
let access_Token:any;
let opportunityId:any;

let opportunity_Id_first:any;

test('Salesforce Generate AuthTOken API',async({request}) =>
{

const response = await request.post(`https://login.salesforce.com/services/oauth2/token`,{

headers: {
    "Content-Type":"application/x-www-form-urlencoded",
    "Connection" : "keep-alive"
},
form:
{
    "grant_type": "password",
    "client_id":"3MVG9q4K8Dm94dAypiTfkDpjglc.x..4fn2GBCSOgyPoE1dEXXC6HZAPLEXMedmMUieNQhpwHXSCB.8XJnIfR",
    "client_secret":"FFC55D963B204646F65E48A02AD6340AA5A7C4DFF631E43A7620EF8A2CAD5E40",
    "username":"veeramanikandan2020@testleaf.com",
    "password":"Testleaf2020"
}
})

const generateToken = await response.json();

access_Token= generateToken.access_token;

uri = generateToken.instance_url;

console.log(`Access Token : ${access_Token} and URI = ${uri}`);

})

test(`Create a record with Salesforce opportunity`,async({request}) => {

    const response = await request.post(`${uri}/services/data/v59.0/sobjects/Opportunity`,{

headers:{
    "Content-Type":"application/json",
    "Authorization":"Bearer "+access_Token
},
data:{
        "StageName": "Qualification",
        "Type": "New Customer",
        "Name": "Alex",
        "CloseDate": "2024-05-31"
    }    
})

const resBody=await response.json();

opportunityId = resBody.id;

console.log(`opportunityId : ${opportunityId}`);

const statusCode = response.status();

console.log(`Status Code of Create opportunity : ${statusCode}`);

});


test(`Update the record with Salesforce opportunity`,async({request}) => {

    const responsePath = await request.patch(`${uri}/services/data/v59.0/sobjects/Opportunity`+opportunityId,{

headers:{
    "Content-Type":"application/json",
    "Authorization":"Bearer "+access_Token
},
data:{
        "StageName": "Prospecting"
    }    
})

const statusCode = responsePath.status();

console.log(`Status Code of Update opportunity : ${statusCode}`);

});


test(`Get the record of Salesforce opportunity using Id`,async({request}) => {

    const responseGet = await request.get(`${uri}/services/data/v59.0/sobjects/Opportunity`+opportunityId,{

headers:{
    "Content-Type":"application/json",
    "Authorization":"Bearer "+access_Token
}   
})

const statusCode = responseGet.status();

console.log(`Status Code of get opportunity : ${statusCode}`);

});

test(`Get all the record of Salesforce opportunity using Id`,async({request}) => {

    const responseGet = await request.get(`${uri}/services/data/v59.0/sobjects/Opportunity`,{

headers:{
    "Content-Type":"application/json",
    "Authorization":"Bearer "+access_Token
}   
})

const getResponseBody = await responseGet.json();

console.log(getResponseBody);

const opportunity_Id_first = getResponseBody.recentItems[0].Id;

console.log(`First Record Id is: ${opportunity_Id_first}`);

const statusCode = responseGet.status();

console.log(`Status Code of get opportunity : ${statusCode}`);

});

test(`Delete the first record of Salesforce opportunity using Id`,async({request}) => {

    const responseDelete = await request.get(`${uri}/services/data/v59.0/sobjects/Opportunity`+opportunity_Id_first,{

headers:{
    "Content-Type":"application/json",
    "Authorization":"Bearer "+access_Token
}   
})

const statusCode = responseDelete.status();

console.log(`Status Code of Delete opportunity : ${statusCode}`);

});
