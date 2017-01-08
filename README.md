# socket-io-react
Socket.io Real time application in React
This is a basic React app which is using socket.io to get real time updates from NodeJs server and rendering data.

**Instructions**

1. clone the repo: ```git clone https://github.com/shek8034/socket-io-react```

2. Run ```npm install```

3. Follow these steps:-

  a) ```npm run build``` to create a dist directory with production build. It has app.js, app.css and vendor.js code separated.
  
  b) ```node server.js``` to run local node web server.
  
  c) Socket.io server is running along with web server and sending random objects to the clients via websocket.
  
  d) In the browser, hit ```http://localhost:3000``` and you will be seeing Simple React UI to render a list which is coming via websocket.


**LICENSE**

MIT
