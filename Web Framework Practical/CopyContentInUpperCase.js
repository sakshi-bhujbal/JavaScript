var fs=require("fs");
console.log("Writting into existing file");
fs.writeFile('input.txt',"Welcome to webFramework",function(err){
    if (err)
        throw err;

    console.log("Data written successfully");

    fs.readFile('input.txt',function(err,data){
        if (err)
            throw err;
        console.log("Asynchronour read: "+data.toString())

        import("upper-case").then(uc=>{
            const str=data.toString();
            fs.writeFile('input2.txt',uc.upperCase(str),function(err){
                if (err)
                    throw err;
            })
            })
            .catch(err=>{
                console.error("Failed to import upper case module",err)
        })
    })
})