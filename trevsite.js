const express = require("express");
const app = express();

const bodyparser = require("body-parser");
const path = require("path");

// app.set("views", __dirname + "/views");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.static("public", {"extensions": ["css"]}));
// app.use(express.static("media",{"extensions": ["png","jpg"]}));
// app.use(express.static("vendor", {"extensions": ["css"]}))
// app.use(express.static("js",{"extensions": ["js"]}))
// app.use(express.urlencoded({ "extended": true}));
// app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public"), {extensions:["css", "jpg"]}));
app.use(express.static(path.join(__dirname, "media"), {extensions:["jpg"]}));
app.use(express.static(path.join(__dirname, "vendor"), {extensions:["css", "js", "ts", "map", "cjs", "esm","scss", "json", "woff", "woff2", "eot", "svg", "pkgd", "umd", "bundle", "module", "umd"]}));
app.use(express.static(path.join(__dirname, "js"), {extensions:["js"]}));
app.use(express.urlencoded({extended: true}));


app.listen(8000, (err)=>{
    if (err) throw (err);
    console.log("server has started on port 8000");
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/details1", function(req,res){
    res.sendFile(path.join(__dirname, "details1.html"));
});
app.get("/details2", function(req,res){
    res.sendFile(path.join(__dirname, "details2.html"));
});
app.get("/details3", function(req,res){
    res.sendFile(path.join(__dirname, "details3.html"));
});
app.get("/details4", function(req,res){
    res.sendFile(path.join(__dirname, "details4.html"));
});
app.get("/details5", function(req,res){
    res.sendFile(path.join(__dirname, "details5.html"));
});
app.get("/details6", function(req,res){
    res.sendFile(path.join(__dirname, "details6.html"));
});


