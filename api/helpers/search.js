/** @format */

const axios = require("axios");

// API Endpoint to search tweets
module.exports = (query, count) => {
	const url = process.env.URL;
	const token = process.env.TWITTER_API_TOKEN;

	return axios.get(url, {
		params: {
			q: query,
			count: count,
		},
		headers: {
			Authorization: token,
		},
	});
};
