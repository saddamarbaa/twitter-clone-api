/** @format */

const mongoose = require("mongoose");

const tweetSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	addedDate: {
		type: String,
		required: true,
	},

	content: {
		type: String,
		required: true,
	},

	tweetImage: {
		type: String,
	},
});

module.exports = mongoose.model("Tweet", tweetSchema);
