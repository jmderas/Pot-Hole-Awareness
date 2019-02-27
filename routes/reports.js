const express = require ("express");
const router = express.Router();

router.get("/", function(req, res) {
    res.send("index");
});

router.get("/new", function(req, res) {
    res.send("new");
});

router.post("/", function(req, res) {
    res.redirect('/');
});

router.get("/:id", function(req, res) {
    res.send(`hello ${req.params.id}`)
});

router.get("/:id/edit", function(req, res) {
    res.send(`edit ${req.params.id}`);
});

router.put("/:id", function(req, res) {
    res.redirect("/");
});

router.delete("/:id", function(req, res) {
    res.redirect("/");
});


module.exports = router;