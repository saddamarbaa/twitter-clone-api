/** @format */

const axios = require("axios");

// API Endpoint to search tweets
module.exports = (query, count, nextPageId) => {
	const url = process.env.URL;
	const token = process.env.TWITTER_API_TOKEN;

	return axios.get(url, {
		params: {
			q: query,
			count: count,
			tweet_mode: "extended",
			max_id: nextPageId,
		},
		headers: {
			Authorization: token,
		},
	});
};
