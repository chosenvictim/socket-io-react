# socket-io-react
Socket.io Real time application in React

**Instructions**

1. clone the repo: ```git clone https://github.com/shek8034/socket-io-react```

2. Run ```npm install```

3. For development version, follow these steps:-

  a) ```npm run dev``` to start webpack dev server.
  
  b) Hit ```http://localhost:8080``` and you app is served by webpack dev server. It uses hot reloading, so any chagne you make in your code with be built automatically and reflected in the browser.

4. For production build, follow these steps:-

  a) ```npm run build``` to create a dist directory with production build. It has app.js, app.css and vendor.js code separated.
  
  b) ```node server.js``` to run local node web server and hit ```http://localhost:3000```
  
  c) For deployment, publish dist directory

**LICENSE**

MIT
