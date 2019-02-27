module.exports = {
    new: function (req, res) {
        res.render("reports/new");
    },
    create: function (req, res) {
        res,redirect("/");
    },
    show: function(req, res) {
        res.render("reports/show");
    },
    edit: function(req, res) {
        res.render("reports/edit");
    },
    update: function(req, res) {
        res.redirect("/");
    },
    delete:  function(req, res) {
        res.redirect("/");
    }
};