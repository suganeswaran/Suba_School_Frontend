var http = require("http");
function fun(request,response)
{
    if(request.url=="/")
    {
        response.writeHead(200,{"Content-type":"text/html"});
        response.write("Welcome To <h1>Home</h1>");
        response.write("Your Request URL "+request.url+" is Successfully Executed");
        response.write("<br>");
        response.write("Thankyou Visit Again");
        console.log("Home Page");
        response.end();

    }
    else if(request.url=="/accademics")
    {
        response.writeHead(200,{"Content-type":"text/html"});
        response.write("Welcome To <h1>Accademics</h1>");
        response.write("Your Request URL "+request.url+" is Successfully Executed");
        console.log("Accademics Page")
        response.write("<br>")
        response.write("Thankyou Visit Again");
        response.end();

    }
    else if(request.url=="/contactus")
    {
        response.writeHead(200,{"Content-type":"text/html"});
        response.write("Welcome To <h1>CONTACT US</h1>");
        response.write("Your Request URL "+request.url+" is Successfully Executed");
        console.log("Contact US Page");
        response.write("Thankyou Visit Again");
        response.end();
    }

}
http.createServer(fun).listen(8000);
console.log("Server Started Successfully.. Start Rock!!!");