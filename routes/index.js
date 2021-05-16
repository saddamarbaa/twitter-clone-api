/** @format */

const express = require("express");
const router = express.Router();

// GET home page.
router.get("/", (req, res) => {
	return res.status(200).send({
		Message: "Welcome to Twitter API ",
	});
});

module.exports = router;
