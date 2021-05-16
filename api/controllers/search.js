/** @format */

const getTweets = require("../helpers/search");

// API Endpoint to search tweets
module.exports = (req, res) => {
	const query = req.query.q;
	const count = req.query.count;
	getTweets(query, count)
		.then((response) => {
			res.status(200).send({
				result: response.data,
				status: "Successful Found all tweets",
			});
		})
		.catch((error) => {
			res.status(400).send({
				message: "Error not found tweets",
				error: error,
			});
		});
};
