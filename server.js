const express = require("express");
const path = require("path");


const app = express();

app.use('/static', (req, res, next)=>{
    console.log("/static request middlware...")
    next()
    
});

app.use('/static', express.static(path.resolve(__dirname,"frontend","static")));

app.get("/*", (req, res ) => {
    const ip = req.socket.localAddress;
    const port = req.socket.localPort;
    console.log(`Your IP address is ${ip} and your source port is ${port}.`);
    console.log(req.query);

    console.log("server.js: res.sendFile () with param: "+path.resolve(__dirname,"frontend","index.html"));
    res.sendFile(path.resolve(__dirname,"frontend","index.html"))
})




app.listen(process.env.PORT || 5060, function(err) {
    if(err) console.error(err);
    console.log("Server running ...");
});