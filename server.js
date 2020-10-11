const express = require("express");
const path = require("path");


const app = express();

app.use('/static', (req, res, next)=>{
    var filename = path.basename(req.url);
    var extension = path.extname(filename);
    console.log("app.use -> resolving static file :"+filename);
    next()
    
});

app.use('/static', express.static(path.resolve(__dirname,"frontend","static")));

app.get("/*", (req, res ) => {
    console.log("server.js: res.sendFile() : "+path.resolve(__dirname,"frontend","index.html"));
    res.sendFile(path.resolve(__dirname,"frontend","index.html"));
    
})




app.listen(process.env.PORT || 5060, function(err) {
    if(err) console.error(err);
    console.log("Server running ...");
});