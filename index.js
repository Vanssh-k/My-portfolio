const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.use(express.static(__dirname +"/public/"));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html")
});
app.get("/works",function(req,res){
  res.sendFile(__dirname+"/work.html")
});
app.get("/contact",function(req,res){
  res.sendFile(__dirname+"/contact.html");
});

let port = process.env.PORT;
if (port == null||port == ""){
  port=3000;
};

app.listen(port, function() {
  console.log("Server has started sucessfully");
});
