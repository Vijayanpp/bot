var express = require('express');
var app=express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var SlackBot = require('slackbots');


app.use(express.static(__dirname + '/'));

app.get('/', function(req, res){
res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	console.log('a user connected');
  socket.on('need to start work', function(msg){
    io.emit('need to start work', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
 
// create a bot 
var bot = new SlackBot({
    token: 'xoxb-223134732662-Q98H42CGfeuaJdG3diasUoSG', // Add a bot https://my.slack.com/services/new/bot and put the token  
    name: 'beer-bot'
});
 
bot.on('start', function() {
 
    // more information about additional params https://api.slack.com/methods/chat.postMessage 
    var params = {
        icon_emoji: ':cat:'
    };    
    // define channel, where bot exist. You can adjust it there https://my.slack.com/services  
    bot.postMessageToChannel('inquisive-smart-boys', ' Morning Guys', params);
    
    bot.on('message',function(daa){
      console.log(data);
    });
    
    bot.on('error',function(){
      console.log("an error occured")
    })
   
});