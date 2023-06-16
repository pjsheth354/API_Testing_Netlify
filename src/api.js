const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const router = express.Router();
const app = express();

app.use(cors());
const port = process.env.PORT || 3000;

const apiData = require("../dataset.json");

app.get("/",(req, res) => {
    res.send("Hello I am Live!!");
});

app.get("/service",(req, res) => {
    res.send(apiData);
});

app.listen(port,() => {
    console.log("Success")
});

app.use("/.netlify/functions/api",router);

module.exports.handler = serverless(app)