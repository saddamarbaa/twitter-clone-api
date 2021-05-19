/** @format */

const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
	firstName: {
		type: String,
	},
	lastName: {
		type: String,
	},

	email: {
		type: String,
		required: true,
		unique: true,
		index: true,
		// a regular expression to validate an email address(stackoverflow)
		match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
	},
	password: {
		type: String,
		min: 3,
		max: 10,
		required: true,
	},
});

module.exports = mongoose.model("User", userSchema);
