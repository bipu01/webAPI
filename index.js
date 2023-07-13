const express = require("express");
const cors = require("cors"); //Prevents some error
const app = express(); //Express JS used

app.use(cors());
const port = process.env.PORT || 3000;

const apiData = require("./data.json"); //Imports JSON file

app.get("/", (req, res) => {
  res.send("Hello world I am not alive"); //diff URL
});
app.get("/service", (req, res) => {
  res.send(apiData); //diff URL
});

app.listen(port, () => {
  console.log("This is live again");
});
