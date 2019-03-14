const express = require("express");
const bodyParser = require("body-parser");
const hbs = require("hbs");
const methodOverride = require("method-override");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "hbs");
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(require("./routes/index"));
hbs.registerPartials(__dirname + "/views/partials");

app.set("port", process.env.PORT || 3050);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

//app.listen(3050, () => console.log("listening on Port 3050"));
