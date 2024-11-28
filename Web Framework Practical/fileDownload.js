var express=require("express");
var  bodyparser=require("body-parser");
var app=express();
app.use(bodyparser.urlencoded({
    extended:true
}));
app.use(bodyparser.json());

app.get("/",function(req,res){
    // res.writeHead(200,{'content-type':'text/html'});
    // res.write('<form name="File download" method="post">');
    // res.write('<br><h3>Click the button to download the file "download.txt" </h3>');
    // res.write('<br><input type="file" name="fname">');
    // res.write('<br><input type="submit">')
    // res.end();
    res.sendFile(__dirname+"/downloadIndex.html");
})

app.post("/",function(req,res){
    const fn=req.body.fname;
    res.download(fn);
})
app.listen(8081);
console.log("The srever is running on port http://127.0.0.1:8081");