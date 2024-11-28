var express=require("express");
var bodyparser=require("body-parser");
var app=express();
app.use(bodyparser.urlencoded({
    extended:true
}))

app.use(bodyparser.json());

app.get("/",function(req,res){
    res.sendFile(__dirname+"/RegIndex.html");

});

app.post("/",function(req,res){
    var name=req.body.name;
    var email=req.body.email;
    var contact=req.body.contact;
    var dob=req.body.dob;
    var pwd=req.body.pwd;

    res.writeHead(200,{'content-type':'text/html'});
    if(name!="" && email!="" && contact!="" && dob!="" && pwd!=""){
        res.write("Registration successful");
    }
    else{
        res.write("Registration Unsuccessful");
    }
    res.end();
})

app.listen(8081);
console.log("The srever is running on port http://127.0.0.1:8081");