var express = require("express");
var http = require("http");
var SocketIO = require("socket.io");

let app = express();
let server = http.Server(app);
let io = new SocketIO(server, {origins: "http://localhost:8080"});
let port = process.env.PORT || 3000;

app.use(express['static'](__dirname + '/dist'));

/*
    Dummy random data
    Ideally there should be a seperate mapping for Pen, Notebook, Rubber, etc with their vendors.
    As of now I am using random combination of Item type and Vendor list.
*/
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
    // After every five seconds, send random object to client
    setInterval(function() {
        generateRandomData();
        console.log("Sending data to client: ", randomData);
        client.broadcast.emit('newData', randomData);
    }, 5000);

    client.on('disconnect', function(err){
        console.log("Disconnected !! ", err);
    });

    client.on('error', function(err) {
        console.log("Error in connection !! ", err);
    });
});


server.listen(port, () => {
    console.log('[INFO] Server Listening on http://localhost:' + port);
});
