const express = require("express");
const app = express();

const weatherRouter = require("./routers/weather");

app.use(express.json());
app.use(weatherRouter);

module.exports = app;
