/** @format */

const express = require("express");
const router = express.Router();
const multer = require("multer");

const { addNewTweet, getAllTweets } = require("../api/controllers/tweet");
const authenticateToken = require("../api/auths/auth");

// const authenticateToken = require("../api/auths/auth");
const getImageExtension = require("../api/helpers/imageExtension");

// Set Storage Engine
// Configuring and validating the upload
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/uploads");
	},

	// By default, multer removes file extensions so let's add them back
	filename: (req, file, cb) => {
		cb(
			null,
			`${file.fieldname}$-${Date.now()}${getImageExtension(file.mimetype)}`,
		);
	},
});

// Initialize upload variable
const upload = multer({ storage: storage });

// API Endpoint for Handling Post Request
// router.post("/", upload.single("tweetImage"), addNewTweet);

// API Endpoint for Handling Get Request
// API Endpoint to return all tweets
// router.get("/", getAllTweets);

module.exports = router;
