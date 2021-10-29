const mongoose = require('mongoose');

const TweetSchema = new mongoose.Schema({
    fullName: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    tweet: {
        type: String,
        require: true
    },
    tweetImage: {
        type: String,
        require: true
    },
    createdAt: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Tweet', TweetSchema);