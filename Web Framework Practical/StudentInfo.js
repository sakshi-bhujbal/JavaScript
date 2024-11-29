var express=require("express");
var mysql=require("mysql2");
var bodyparser=require("body-parser");
var app=express();
app.use(bodyparser.urlencoded({
    extended:true
}))
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"sakshi01@5",
    port:"3306",
    database:"student"
})

app.get("/",function(req,res){
    res.sendFile(__dirname+"/StudentInfo.html");

})

app.post("/",function(req,resp){
    var name=req.body.name;
    resp.writeHead(200,{'content-type':'text/html'});
    console.log("The deatails of student "+name+" is: ");
   
con.connect(function(err){
    if (err)
        throw err;
    

var q1="Select * from student where name=?";
con.query(q1,[name],function(err,res){
    if(err)
        throw err;
    
    resp.write("the details of student whose name is: "+name+"<br>");
    resp.end();
    console.log(res);
})
})
})
app.listen(8081);
console.log("http://127.0.0.1:8081");

