console.log("hi");

const express = require("express");
const database = require("./services/fakeLotService");

console.log(database.getLot("11YVCHAR002"));

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/api/breakdown/:breakdownType/:lotCode", (req, res) => {
  console.log(req.params);
  const lotCode = req.params.lotCode;
  const breakdownType = req.params.breakdownType;

  res.send(JSON.stringify(database.getLot(lotCode, breakdownType)));
});

app.listen(8080, () => console.log("Listening to port 3000 ..."));
