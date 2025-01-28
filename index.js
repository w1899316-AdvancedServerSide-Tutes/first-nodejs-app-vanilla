const http = require('http');
const fs = require("fs").promises;
const server = http.createServer((req,res) =>{
    if (req.url.startsWith("/hello")) {
        const pathParts = req.url.split("/hello/");
        const dynamicPart = pathParts[1] || "";
        res.StatusCode = 200
        res.setHeader("Content-Type","text/json")
        res.end(JSON.stringify({name:"hello-world",
            "path":dynamicPart}))
        console.log(req.url);
    }
    if (req.url.startsWith("/html")){
        fs.readFile(__dirname+"/sample.html")
            .then(content =>{
                res.setHeader("Content-Type","text/html");
                res.writeHead(200);
                res.end(content);
            })
    }
    
});
const port = 3000
server.listen(port, ()=>{
    console.log(`Server Listening on port ${port}`)
})