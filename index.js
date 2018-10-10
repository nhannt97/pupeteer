var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('connected');
    
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
const puppeteer = require('puppeteer');
let arr = [], n=50;
for(let i =1; i<=n; i++) {
   arr[i] = {};
   (async() => {
   arr[i].browser = await puppeteer.launch();
   arr[i].page = await arr[i].browser.newPage();
   arr[i].page.goto('http://localhost:3000');
   })();
}
