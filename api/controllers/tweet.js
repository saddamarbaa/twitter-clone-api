/** @format */

const mongoose = require("mongoose");
const Tweet = require("../models/tweet");
let newTweet;

// API Endpoint to add new tweet
const addNewTweet = (req, res) => {
	const image = req.file;

	const tweetContent = req.body.content;

	if (!tweetContent) return res.status(400).send("Please add tweet content");

	if (image) {
		newTweet = new Tweet({
			_id: new mongoose.Types.ObjectId(),
			content: tweetContent,
			tweetImage: `uploads/${req.file?.filename}`,
			addedDate: `${Date.now()}`,
		});
	} else {
		newTweet = new Tweet({
			_id: new mongoose.Types.ObjectId(),
			content: tweetContent,
			addedDate: `${Date.now()}`,
		});
	}

	newTweet
		.save()
		.then((result) => {
			// HTTP Status 201 indicates that as a result of HTTP POST  request,
			//  one or more new resources have been successfully created on server
			return res.status(201).send({
				message: "Created Tweet Successfully",
				CreatedPost: {
					content: result.content,
					tweetImage: result.tweetImage,
					_id: result._id,
					addedDate: result.addedDate,
					request: {
						type: "Get",
						description: "Get one tweet with the id",
						url: "http://localhost:3000/api/tweets" + result._id,
					},
				},
			});
		})
		.catch((error) => {
			// 500 Internal Server Error
			return res.status(500).send({
				message: "unable to save tweet to database",
				error: error,
			});
		});
};

const getAllTweets = (req, res) => {
	// find all the tweets
	Tweet.find()
		.select("  content  tweetImage _id  addedDate")
		.sort({ addedDate: -1 }) // sorted the tweet
		.limit(3)
		.exec() // .exec() method return promise
		.then((tweets) => {
			// pass more information  with response
			const responseObject = {
				tweets: tweets.map((foundTweet) => {
					return {
						id: foundTweet._id,
						content: foundTweet.content,
						tweetImage: foundTweet.tweetImage
							? foundTweet.tweetImage
							: "",
						added_date: foundTweet.addedDate,

						request: {
							type: "Get",
							description: "Get one tweet with the id",
							url: "http://localhost:3000/posts/" + foundTweet._id,
						},
					};
				}),
			};

			res.status(200).send({
				result: responseObject,
				status: "Successful Found all Tweets",
			});
		})
		.catch((error) => {
			// 500 Internal Server Error
			res.status(500).send({
				message: "Internal Server Error",
				error: error,
			});
		});
};

module.exports = {
	addNewTweet,
	getAllTweets,
};
