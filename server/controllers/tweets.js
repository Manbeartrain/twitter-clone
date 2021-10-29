const TweetSchema = require('../models/tweets');

const getAllTweets = async (req, res) => {
    try {
        const tweet = await TweetSchema.find({});
        res.status(200).json({ tweet })
    } catch (error) {
        res.status(500).json({message: error})
    }
}

const createTweet = async (req, res) => {
    try {
        const tweet = await TweetSchema.create(req.body);
        res.status(201).json({ tweet })
    } catch (error) {
        res.status(500).json({message: error})
    }
}

const getOneTweet = async (req, res) => {
    try {
        const { id: tweetId } = req.params;
        const tweet = await TweetSchema.findOne({ _id: tweetId})

        if (!tweet) {
            return res.status(404).json({message: 'Tweet does not exist'})
        }
        res.status(200).json({tweet})
    } catch (error) {
        res.status(500).json({message: error})
    }
}

const deleteTweet = async (req, res) => {
    try {
        const {id: tweetId} = req.params;
        const tweet = await TweetSchema.findByIdAndDelete({_id: tweetId});

        if(!tweet) {
            return res.status(404).json({message: 'Item does not exist'})
        }
        res.status(200).json({tweet})
    } catch (error){
        res.status(500).json({message: error})
    }
}

const deleteAllTweets = async (req, res) => {
    try {
        const tweet = await TweetSchema.deleteMany({});
        res.status(200).json({ tweet })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

module.exports = {
    getAllTweets, createTweet, getOneTweet, deleteTweet, deleteAllTweets
}