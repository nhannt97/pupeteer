var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var num = 0
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    console.log(socket.id, io.eio.clientsCount);
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});
