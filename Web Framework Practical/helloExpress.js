var express=require("express");
var app=express();
app.get("/",function(req,res){
    res.write("heloo Express");
    res.end();

})
app.listen(8081);
console.log("Server is running on http://127.0.0.1:8081");