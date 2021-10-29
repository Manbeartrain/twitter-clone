import axios from 'axios'
import React from 'react'
import getTweets from './getTweets'

export default async function tweet(tweetText, tweetImage, tweets, setTweets) {
    // tweets.push({created: 'now', fullName: 'Alexandro Higareda', tweet: tweetText, userImg: 'https://randomuser.me/api/portraits/men/75.jpg', userName: 'manbeartrain'})
    // console.log(tweets)
    try {
        const response = await axios.post('http://localhost:5000/api/v1/tweets', {
            fullName: 'Alexandro Higareda',
            username: 'manbeartrain',
            tweet: tweetText,
            tweetImage: tweetImage,
            createAt: 'Just Now'
        })

        if(response.data.tweet){
            console.log('tweet')
            getTweets(setTweets)
        }
    } catch (error) {
        console.log('error')
    }
}
