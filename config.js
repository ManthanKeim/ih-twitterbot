//require('dotenv').config()

module.exports = {
  twit: {
    consumer_key: process.env.TWITTER_API_KEY,
    consumer_secret: process.env.TWITTER_API_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACESSS_TOKEN_SECRET,
  },
  hashtag: "#ironhacks",
  interval: 1000 * 60 * 30
}
