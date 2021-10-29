const express = require('express');
const { getAllTweets, createTweet, getOneTweet, deleteTweet, deleteAllTweets } = require('../controllers/tweets');
const router = express.Router();

router.route('/').get(getAllTweets).post(createTweet).delete(deleteAllTweets);
router.route('/:id').get(getOneTweet).delete(deleteTweet);

module.exports = router;