const express = require("express");
const app = express();

const port = process.env.port || 5000;
app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log("server started");
});

app.get("/", (req, res) => {
  res.status(200).send("Hello AWS");
});
