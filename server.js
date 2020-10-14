const express = require("express");
const path = require("path");


const app = express();

app.use('/static', (req, res, next)=>{
    var filename = path.basename(req.url);
    var extension = path.extname(filename);
    console.log("app.use -> resolving static file :"+filename+"."+extension);
    next()
    
});

app.use('/static', express.static(path.resolve(__dirname,"frontend","static")));
app.use('/', express.static(path.resolve(__dirname,"frontend","")));


app.get("/favicon.ico", (req, res ) => {
    console.log("server.js: res.sendFile() : "+path.resolve(__dirname,"frontend","favicon.ico"));
    res.sendFile(path.resolve(__dirname,"frontend","favicon.ico"));
    
})


app.get("/*", (req, res ) => {
    console.log(req.url); 
    if(req.url==='/favicon.png'){
        console.log("server.js: res.sendFile() : "+path.resolve(__dirname,"frontend","favicon.png"));
        res.sendFile(path.resolve(__dirname,"frontend","favicon.png"));    
    }else{
        console.log("server.js: res.sendFile() : "+path.resolve(__dirname,"frontend","index.html"));
        res.sendFile(path.resolve(__dirname,"frontend","index.html"));
    };
})

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());



app.post("/*", (req, res ) => {
    console.log(req.body);
    
    res.status(200).json({name:"Server sending this name and age",age:35});
 
    
})



app.listen(process.env.PORT || 5060, function(err) {
    if(err) console.error(err);
    console.log("Server running ...");
});