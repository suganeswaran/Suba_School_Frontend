var http = require("http")
function fun(request,response)
{
    if(request.url=="/")
    {
        response.writeHead(200,{"content-type":"text/html"});
        response.write("Hello");
        response.write("<h1>Hai</h1>");
        response.end("<html><body>Response Created :"+request.url+"</body></html>");
    }
    if(request.url=="/login")
    {
        response.writeHead(200,{"content-type":"text/html"});
        response.write("Hello");
        response.write("<h1>Hai</h1>");
        response.end("<html><body>Response Created :"+request.url+"</body></html>");

    }
    
    console.log("You refreshed");


}
http.createServer(fun).listen(8000);
console.log("Server Started Successfully!!!!");
