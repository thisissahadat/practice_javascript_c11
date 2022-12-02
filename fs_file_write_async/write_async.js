var fs=require('fs');
var http=require('http')
var server=http.createServer(function (req,res) {

    if(req.url="/"){
        fs.writeFile('demo.txt','Hello World',function (error) {
            if(error){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("File write Failed");
                res.end();
            }else {
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("File write Success");
                res.end();
            }
        });
    }
});
server.listen(5050);
console.log("server run successful");