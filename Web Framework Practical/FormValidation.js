var express=require("express");
var bodyparser=require("body-parser");
var app=express();
app.use(bodyparser.urlencoded({
    extended:true
}))

app.get("/",function(req,res){
    res.sendFile(__dirname+"/LoginIndex.html");

})

app.post("/",function(req,res){
    var user=req.body.user;
    var pass=req.body.pass;

    res.writeHead(200,{'content-type':'text/html'});
    if(user==pass){
    res.write("Login successful");
    }
    else{
        res.write("Login Unsuccessful");
    }
    res.end();
})

app.listen(8080)
console.log("Server running on http://127.0.0.1:8080");