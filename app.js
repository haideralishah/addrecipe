var data_model = require("./data_model");
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var path = require("path");
var cors = require('cors');
var http = require("http");
var app = express();
app.use(cors());
app.set("port", process.env.PORT || 3001);
app.use(logger("short"));

var publicPath = path.resolve(__dirname + "/Web");
app.use("/", express.static(publicPath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

data_model.initializeModels(app);

app.listen(app.get("port"), function () {
    console.log("App started on port " + app.get("port"));
});
