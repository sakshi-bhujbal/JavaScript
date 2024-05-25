let promise = new Promise((resolve,reject)=>
{
    console.log("I am a promise");
    reject("error");
    //resolve("success");
})