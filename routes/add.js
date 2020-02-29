const express = require("express");
const router = express.Router();
const Resort = require('../models/Resort');

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("add", { title: "Add a new resort" });
});

router.post("/", function(req, res, next) {
    const { name, longitude, latitude } = req.body;
    const newResort = new Resort({ name, longitude, latitude })
    newResort.save()
    .then((resort) => {
      console.log(resort.name);
    })
    .catch((error) => {
      console.log(error);
    })
  });

module.exports = router;
