const express = require('express');
const bodyParser = require("body-parser");
const hbs = require("hbs");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "hbs");
app.use(express.static("public"));
app.use(require('./routes/index'))
hbs.registerPartials(__dirname + "/views/partials");

app.listen(3000, () => console.log("listening on Port 3000"));