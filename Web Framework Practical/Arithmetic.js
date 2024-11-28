var obj=require("./cal.js");
var express=require("express");
var bodyparser=require("body-parser");
var app=express();

app.use(bodyparser.urlencoded({
    extended:true
}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})

app.post("/",function(req,res){
    var x=Number(req.body.num1);
    var y=Number(req.body.num2);

    res.writeHead(200,{'content-type':'text/html'})
    res.write("Addition: "+obj.add(x,y));
    res.write("Subtraction: "+obj.sub(x,y));
    res.write("Multiplication: "+obj.mul(x,y));
    res.write("Division: "+obj.div(x,y));
    res.write("Modulus: "+obj.mod(x,y));
})

app.listen(8080)
console.log("Server running on port http://127.0.0.1:8080");
