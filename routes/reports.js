const express = require ("express");
const router = express.Router();
const reportsController = require('../controllers/reports.js');


router.post("/", reportsController.create);
router.get("/new", reportsController.new);


router.get("/:id", reportsController.show);

router.get("/:id/edit", reportsController.edit);

router.put("/:id", reportsController.update);

router.delete("/:id", reportsController.delete);


module.exports = router;