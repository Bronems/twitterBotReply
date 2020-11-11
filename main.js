//Look for new @
const config = require('./conf.js');
const Twit = require('twit');
var T = new Twit(config);
var stream = T.stream('statuses/filter', {track: '@Klemens_devacc'});

function desc(err,data){
    if(err)
        console.log(err);
    console.log(data);
}
    
stream.on('tweet', mentioned);

function mentioned(tweet){
    var message = tweet.text;
    var de = tweet.user.screen_name;
    var deNom = tweet.user.name;
    var tweetId = tweet.id_str;
    var stat = ("@" +de +" Hello !");
    var string = message.replace(de, '');
    var string = string.toLowerCase();

    console.log(message);
    if(string.includes("sang"))
        var stat = ("@" +de +" Wesh ma gueule !");
    if(string.includes("de la merde")){
        var stat = ("T'as raison @" +de +" c'est de la merde !");
    }
    
    T.post('favorites/create', {id: tweetId}, desc);

    T.post('statuses/update', { status : stat , in_reply_to_status_id: tweetId}, desc);
}

