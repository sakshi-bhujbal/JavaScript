const express =require("express");
var fs=require("fs");
var bodyparser=require("body-parser");
var app=express();
app.use(bodyparser.urlencoded({
extended:true
}))

app.get("/",function(req,res){
    res.sendFile(__dirname+"/copyFileContent.html");
});

app.post("/",function(req,res){
    var con=req.body.content;
    fs.writeFile('input.txt',con,function(err){
        if(err)
            throw err
   
    res.send("data copied sucessfully");
    console.log("data written");
    res.end();
})
})

app.listen(8081)
console.log("server running on port http://127.0.0.1:8081")