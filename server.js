const express = require("express");
const app = express();
const bodyParser = require("body-parser");

  app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/home.html");
  });
  app.get("/contact", function (req, res) {
    res.sendFile(__dirname + "/public/contact.html");
  });
  app.get("/service", function (req, res) {
    res.sendFile(__dirname + "/public/ourServices.html");
  });

  
app.listen(4000, function () {
    console.log("welcome in localhost 4000 server");
  });