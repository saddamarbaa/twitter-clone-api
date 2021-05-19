/** @format */

const mongoose = require("mongoose");

// Access Environment variables
const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_DB_NAME = process.env.MONGO_DB_NAME;

// Connecting to MongoDB(Connecting to the Database)
const mongoDB = `mongodb+srv://${MONGO_DB_NAME}:${MONGO_PASSWORD}@cluster0.mppdp.mongodb.net/${MONGO_USER}?retryWrites=true&w=majority`;

mongoose
	.connect(mongoDB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	})
	.then(() =>
		console.log("MongoDB database connection established successfully ..."),
	)
	.catch((error) => console.log("MongoDB connection error:", error));

module.exports = mongoDB;
