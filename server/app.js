const express = require("express");
const path = require("path");

const app = express();

app.use("/assets", express.static(
    path.join(__dirname, "../client/dist/assets")
));

app.use(express.json());

module.exports = app;
