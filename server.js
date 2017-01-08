var express = require("express");
var http = require("http");
var SocketIO = require("socket.io");

let app = express();
let server = http.Server(app);
let io = new SocketIO(server, {origins: "http://localhost:8080"});
let port = process.env.PORT || 3000;

app.use(express['static'](__dirname + '/dist'));

let socketData = {};
io.on('connection', function(client) {
    console.log("New connection");
    setInterval(function() {
        socketData = {
            name:"pen",
            vendor:"reynolds",
            price:10
        };
        console.log("Sending data to client: ", socketData);
        client.broadcast.emit('newData', socketData);
    }, 4000);
    client.on('event', function(data){});
    client.on('disconnect', function(){});
    client.on('error', function(err) {
        console.log(err);
    });
});

server.listen(port, () => {
    console.log('[INFO] Server Listening on http://localhost:' + port);
});
