/** @format */

const morgan = require("morgan");
const dotenv = require("dotenv").config();
const cors = require("cors");
const express = require("express");

// Import Routes
const indexRouter = require("./routes/index");
const tweetRouter = require("./routes/tweet");
const userRouter = require("./routes/user");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Connecting to MongoDB
const mongoDB = require("./config/db");

// Routes which Should handle the requests
app.use("/", indexRouter);
app.use("/api/tweet", tweetRouter);
app.use("/api/user", userRouter);

// Error handler
app.use((req, res, next) => {
	const error = new Error("Not found");
	error.status = 404;
	next(error);
});

// An error handling middleware
app.use((error, req, res, next) => {
	res.status(error.status || 500).send({
		error: {
			Message: error.message,
		},
	});
});

module.exports = app;
