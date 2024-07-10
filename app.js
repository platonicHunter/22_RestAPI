const express = require("express");
const bodyParser = require("body-parser");

const feedRoute = require("./routes/feed");

const app = express();

//body Parser
//app.use(bodyParser.urlencoded()); //x-www-form-urlencoded<form>
app.use(bodyParser.json()); //application/json

//access all host
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
  });

app.use("/feed", feedRoute);

app.listen(1500, () => {
  console.log("Server is running ");
});
