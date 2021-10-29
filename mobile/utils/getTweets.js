import axios from "axios"


async function getTweets(setTweets) {
    await axios.get('http://localhost:5000/api/v1/tweets')
        .then(res => {
            setTweets(res.data.tweet)
        }).catch(error => {
            console.log(error)
        })
}

export default getTweets