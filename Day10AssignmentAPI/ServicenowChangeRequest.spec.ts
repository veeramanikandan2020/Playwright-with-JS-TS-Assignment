import {expect, test} from "@playwright/test"

let sys_id_changeRequest :any;


test(`Service Now Change Request`,async({request})=>{

    const postResponse = await request.post(`https://dev177037.service-now.com/api/now/table/change_request`,{
        headers:
        {
            "Authorization":"Basic YWRtaW46ZXEvKnUxR21GSjRE",
            "Content-Type":"application/json",
            "Connection":"keep-alive"
        },
        data :{

                "short_description": "Laptop I/O issue",
                "description": "Laptop Keyboard Issue",
                "unauthorized": "false"
        }
    });

    const responseBody = await postResponse.json();

    console.log(responseBody);

    sys_id_changeRequest = responseBody.result.sys_id;

    console.log("sys_id_changeRequest :"+sys_id_changeRequest);

    const status = postResponse.status();

    console.log(`Status code for Create : ${status}`);
})


test(`Service Now Retrive the created Change Request `,async({request})=>{

    const getResponse = await request.get(`https://dev177037.service-now.com/api/now/table/change_request/`+sys_id_changeRequest,{
        headers:
        {
            "Authorization":"Basic YWRtaW46ZXEvKnUxR21GSjRE",
            "Content-Type":"application/json",
            "Connection":"keep-alive"
        }
    });

    const responseBody = await getResponse.json();

    console.log(responseBody);

    const status = getResponse.status();

    console.log(`Status code for Get : ${status}`);
})

test(`Service Now Update Change Request`,async({request})=>{

    const updateResponse = await request.patch(`https://dev177037.service-now.com/api/now/table/change_request/`+sys_id_changeRequest,{
        headers:
        {
            "Authorization":"Basic YWRtaW46ZXEvKnUxR21GSjRE",
            "Content-Type":"application/json",
            "Connection":"keep-alive"
        },
        data :{

                "short_description": "Laptop Hardware issue need to replace keypad"
        }
    });

    const responseBody = await updateResponse.json();

    const short_description = responseBody.result.short_description;

    expect(short_description).toContain(`Laptop Hardware`);

    console.log(responseBody);

    const status = updateResponse.status();

    console.log(`Status code for update : ${status}`);
})


test(`Service Now delete the created Change Request `,async({request})=>{

    const deleteResponse = await request.delete(`https://dev177037.service-now.com/api/now/table/change_request/`+sys_id_changeRequest,{
        headers:
        {
            "Authorization":"Basic YWRtaW46ZXEvKnUxR21GSjRE",
            "Content-Type":"application/json",
            "Connection":"keep-alive"
        }
    });

    const status = deleteResponse.status();

    console.log(`Status code for delete: ${status}`);
})