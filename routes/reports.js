const express = require ("express");
const router = express.Router();
const reportsController = require('../controllers/reports');

router.get("/", reportsController.index);

router.get("new", reportsController.new);

router.post("/", reportsController.create);

router.get("/:id", reportsController.show);

router.get("/:id/edit", reportsController.edit);

router.put("/:id", reportsController.update);

router.delete("/:id", reportsController.delete);


module.exports = router;