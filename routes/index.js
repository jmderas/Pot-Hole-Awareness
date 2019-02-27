const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.render("index");
})

router.use("/reports", require("./reports.js"))

module.exports = router;