var express = require("express");
var http = require("http");
var SocketIO = require("socket.io");

let app = express();
let server = http.Server(app);
let io = new SocketIO(server, {origins: "http://localhost:8080"});
let port = process.env.PORT || 3000;

app.use(express['static'](__dirname + '/dist'));

let dataMap = {
    nameList: ["Pen", "Notebook", "Rubber"],
    vendorList: ["Link", "Reynolds", "Classmate", "Luxor", "Apsara", "Mr. Clean", "Tiger"],
    priceList: [10, 20, 30, 40, 50]
};
let randomData = {};

function generateRandomData() {
    let itemId = Math.floor(Math.random()*(dataMap.nameList.length - 0) + 0);
    let vendorId = Math.floor(Math.random()*(dataMap.vendorList.length - 0) + 0);
    randomData = {
        itemId,
        name: dataMap.nameList[itemId],
        vendorId,
        vendor: dataMap.vendorList[vendorId],
        price: dataMap.priceList[Math.floor(Math.random()*(dataMap.priceList.length - 0) + 0)]
    };
}

io.on('connection', function(client) {
    console.log("New connection");
    setInterval(function() {
        generateRandomData();
        console.log("Sending data to client: ", randomData);
        client.broadcast.emit('newData', randomData);
    }, 5000);
    client.on('event', function(data){});
    client.on('disconnect', function(){});
    client.on('error', function(err) {
        console.log(err);
    });
});

server.listen(port, () => {
    console.log('[INFO] Server Listening on http://localhost:' + port);
});
