/** @format */

const express = require("express");
const router = express.Router();

const userController = require("../api/controllers/user");
const authenticateToken = require("../api/auths/auth");

// API Endpoint for Handling Post Request to /User/login
router.post("/login", userController.user_login);

// API Endpoint for Handling Post Request to /User/signup
router.post("/signup", userController.user_signup);

// API Endpoint for Handling Post Request to /User/delete
// Call (authenticateToken) Middleware function first(This is now a protected )route
router.delete("/delete/:userId", authenticateToken, userController.user_delete);

module.exports = router;
