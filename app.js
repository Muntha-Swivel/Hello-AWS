const express = require("express");
const app = express();

const port = 5000;
app.get("/", function (req, res) {
  res.send("Hello World how are you?");
});

app.listen(port, () => {
  console.log("server started");
});

app.get("/", (req, res) => {
  res.status(200).send("Hello AWS");
});
