//Look for new @
const config = require('./conf.js');
const Twit = require('twit');
var T = new Twit(config);
var stream = T.stream('statuses/filter', {track: '@Klemens_devacc'});

function desc(err,data){
    if(err)
        console.log(err);
}
    
stream.on('tweet', mentioned);

function mentioned(tweet){
    var message = tweet.text;
    var de = tweet.user.screen_name;
    var deNom = tweet.user.name;
    var tweetId = tweet.id_str;
    var stat = ("@" +de +" Hello !");

    T.post('favorites/create', {id: tweetId}, desc);

    T.post('statuses/update', { status : stat , in_reply_to_status_id: tweetId}, desc);
}

