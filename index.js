require("dotenv").config()
let http_module = require("http");
let portNo = process.env.PORT

http_module.createServer(function(re, res){
    res.writeHead(200, {"Content-Type": "text/html"})
    res.write("<h1>CHAL GAYA BHAI SERVER</h1>")
    res.write("<h1>DOSRI BAR BHI GAYA SERVER</h1>")
    res.end()
}).listen(portNo,()=>{
    console.log(`Server is running on port + http://localhost:${portNo}`)
})