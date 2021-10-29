const express = require('express')
const cors = require('cors');
const connectDb = require('./db/connect');

require('dotenv').config();

const app = express();
const port = 5000;

const tweetRouter = require('./routes/tweets')

app.use(cors());
app.use(express.json());

app.use('/api/v1/tweets', tweetRouter)

const start = async () => {
    try {
        await connectDb(process.env.MONGO_CONNECT)
        app.listen(port, (req, res) => {
            console.log('You are listening to port:', port);
        })
    } catch (error) {
        console.log(error);
    }
}

start();