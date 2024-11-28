var obj=require("./dateExport");
var http=require("http");
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write("The date is: "+obj.mydate());
    res.end();
}).listen(8081);
console.log("Srever is running on port http://127.0.0.1:8081");