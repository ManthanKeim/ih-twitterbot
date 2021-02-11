## Reweet Bot

Retweets the latest tweet using the the configured hashtag.

It attempts to retweet once at the set interval.

### Install

```bash
npm i --save
```

### Connecting to Twitter

Create a Twitter App on Twitter Developers : [https://apps.twitter.com/app/new ](https://apps.twitter.com/app/new). Next you'll see a screen with a "Details" tab. Setup the App and "Application Type", choose "Read and Write".

### Set the values in config.js

Then go to the Keys and Access Tokens tab, you will need this data to setup our **config.js** as shown below.

```js
module.exports = {
  twit: {
    consumer_key:         'API key',
    consumer_secret:      'API secret key',
    access_token:         'Access token',
    access_token_secret:  'Access token secret'
  },
  hashtag: "#ironhacks",
  interval: 1000 * 60 * 30
}
```

In between those quotes, instead of `'key'`, paste the appropriate info from the Details page.

### Run the app

```bash
node index.js
```
