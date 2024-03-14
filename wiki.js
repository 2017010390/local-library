const express = require("express");
const router = express.Router();

router.get("/catalog", function(req, res) {
  res.send("Wili home page");
});

router.get("/about", async function (req, res, next) {
  About.find({}).exec((err, queryResults) => {
    if (err) return next(err);
    res.render("", {title: "About", list: queueResul});
  });
});

module.exports = router;