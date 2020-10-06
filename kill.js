//Remove all tweets
const config = require('./conf.js');
const Twit = require('twit');
var T = new Twit(config);

T.get('statuses/user_timeline', {screen_name: 'Klemens_devacc',count: 100,include_rts: true}, del);
function del(err, data){
    var i = 0;
    if(err)
        console.log(err);
    if(data.length < 1)
        console.log("NULL");
    else if(data){
        console.log(data.length);
        for(i = 0 ; i < data.length ; i++){
            idDest = data[i].id_str;
            T.post('statuses/destroy/:id', { id: idDest }, function (err, data, response) { 
            });
        } 
        console.log("Deleted " + i + " tweet !");
    }
}
