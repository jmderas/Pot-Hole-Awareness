const { Reports, Comment } = require("../models/Reports");


module.exports = {
    new: (req, res) => {
        res.render("reports/new");
    },
    create: function (req, res) {
        Reports.create({
            content: req.body.reports.content,
            severity: req.body.reports.severity
          }).then(reports => {
              res.redirect(`/reports/${reports._id}`);
          });
    },
    show: function(req, res) {
        Reports.findOne({_id: req.params.id})
        .exec(function(err, reports) {
         res.render("reports/show", reports);
       })
    },
    edit: function(req, res) {
        res.render("reports/edit");
    },
    update: function(req, res) {
        let { content } = req.body;
        Reports.findOne({ _id: req.params.id }).then(reports => {
          reports.comments.push({
            content,
          });
          reports.save(err => {
            res.redirect(`/reports/${reports._id}`);
          });
        });
    },
    delete:  function(req, res) {
        res.redirect("/");
    }
};