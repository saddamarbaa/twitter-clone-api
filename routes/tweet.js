/** @format */

const express = require("express");
const router = express.Router();

const searchTweets = require("../api/controllers/search");

// API Endpoint to search tweets
router.get("/search", searchTweets);

module.exports = router;
