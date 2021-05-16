/** @format */

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// Import Routes
const indexRouter = require("./routes/index");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/", indexRouter);

// Error handler (Create an error and pass it to the next function)
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
