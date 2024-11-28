import("upper-case").then(uc=>{
    const str="Hello world";
    console.log(uc.upperCase(str));
}).catch(err=>{
    console.log("Failed to install upper case module",err);
})