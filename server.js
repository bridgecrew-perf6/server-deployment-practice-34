"use strict";

const express = require("express");
const app = express();

const start = (port) => {
  app.listen(port, () => {
    console.log(`server running on port:${port}`);
  });
};

app.get("/", (req, res) => {
  res.send("home route");
});

app.get("/data", (req, res) => {
  res.status(200).json({
    name: "karam",
    email: "k.qinneh@outlook.com",
  });
});

module.export = {
  app,
  start,
};
