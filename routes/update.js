const express = require('express');
const Resort = require('../models/Resort');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
	Resort.find()
		.then(resorts => {
			res.render('update', {
				resorts,
			});
		})
		.catch(() => {});
});

router.post("/", function(req, res, next) {
    const selec = req.body.getElementById("selection");
    console.log( selec );
  });



module.exports = router;
