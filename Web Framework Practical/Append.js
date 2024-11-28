const express =require("express");
const bodyparser=require("body-parser");
var fs=require("fs");
var app=express();
app.use(bodyparser.urlencoded({
    extended:true
}))

app.get("/",function(req,res){
    res.sendFile(__dirname+"/Append.html");

});

app.post("/",function(req,res){
    var fn1=req.body.f1;
    var fn2=req.body.f2;
    res.writeHead(200,{'content-type':'text/html'});
    res.write("File selected by user is:"+fn1);
    fs.readFile(fn1,function(err,data){
        if(err)
            throw err;
    
        fs.appendFile(fn2,data,"Utf-8",function(err){
            if(err)
                throw err;
        })
    })
    res.end();
})
app.listen(8081)
console.log("Server running on port http://127.0.0.1:8081");