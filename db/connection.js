const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/pothole");

module.exports = mongoose;