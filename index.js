const Twit = require("twit");
const config = require('./config')
const twit = new Twit(config.twit)

const HASHTAG = config.hashtag
const INTERVAL = config.interval

const options = {
  q: HASHTAG,
  count: 100,
  result_type: "recent"
}

const getTweets = (options) => {
  return twit.get("search/tweets", options, (error, data) => {
    if (error) {
      console.log(error);
      return false;
    } else {
      console.log(data);
      return data;
    }
  })
}

let retweets = []

const retweetLatest = () => {
  twit.get("search/tweets", options, (error, data) => {
    if (error) {
      console.log("There was an error with your hashtag search:", error);
      return false;
    }

    // console.log(data);

    if (data.statuses.length > 0) {
      let retweetId = data.statuses[0].id_str;

      if (!retweets.includes(retweetId)) {
        twit.post(`statuses/retweet/${retweetId}`, {}, (error, response) => {
          if (error) {
            // ALREADY RETWEETED ERROR
            if (error.code === 327) {
              retweets.push(retweetId)
            }
            console.log("There was an error with Twitter:", error);
          }

          if (response) {
            retweets.push(retweetId)
            console.log("Success! Check your bot, it should have retweeted something.");
          }
        })
      }
    }
  })
}

// const main = () => {
//   let tweets = getTweets(options)
// }

retweetLatest()
setInterval(retweetLatest, INTERVAL)
