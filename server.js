const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.static(__dirname+'/public'));

const workingTime = (req, res, next) => {
  let openDay = new Date();

  if (
    openDay.getHours() > 09 &&
    openDay.getHours() < 17 &&
    openDay.getDay() > 0 &&
    openDay.getDay() < 6
  ) {
    next();
  } else {
    console.log("Our office is closed !!!");
    res.send("<h1> please contact us on working time :) ");
  }
};
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