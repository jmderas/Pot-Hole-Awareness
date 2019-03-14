const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost/pothole")

if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.DB_URL);
} else {
  mongoose.connect("mongodb://localhost/pothole");
}
module.exports = mongoose;
