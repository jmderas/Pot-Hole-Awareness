const express = require('express');
const router = express.Router();
const { Reports } = require("../models/Reports");

router.get('/', function(req, res) {
    Reports.find({})
    .sort({ timestamp: -1 })
    .limit(10)
    .then(reports => {
      res.render("index", { reports });
    });
})

router.use("/reports", require("./reports.js"));

module.exports = router;