var fs=require("fs");
var express=require("express");
var bodyparser=require("body-parser");
var app=express();
app.use(bodyparser.urlencoded({
    extended:true
}))

app.get("/",function(req,res){
    res.sendFile(__dirname+"/Filecon.html");
})

app.post("/",function(req,res){
    var f1=req.body.f1;
    fs.open(f1,"r+",function(err,fd){
        if(err){
            res.status(404).send({message:"File not found"});
        }
        fs.readFile(f1,function(err,data){
            if(err)
                throw err;

            res.write("The file data is: "+data.toString());
            console.log("The file data is: "+data.toString());
            res.end();
        })
    })
})
app.listen(8081)
console.log("server is running on http://127.0.0.1:8081");