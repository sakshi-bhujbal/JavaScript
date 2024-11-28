var express=require("express");
var bodyparser=require("body-parser");
var app=express();
app.use(bodyparser.urlencoded({
    extended:true
}));

app.use(bodyparser.json());
app.get("/",function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write('<form name="file_input" method="post">');
    res.write('<h1>Select a file to upload</h1>');
    res.write('<input type="file" name="fname">');
    res.write('<input type="submit" value="upload">');
    res.write('</form>');
    res.end();
});

app.post("/",function(req,res){
    const filename=req.body.fname;
    res.writeHead(200,{'content-type':'text/html'});
    res.write("file selected by user is:"+filename);

});
app.listen(8080);
console.log("Srever is running on http://127.0.0.1:8080");