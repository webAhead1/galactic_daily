const express = require('express');
const { appendFile } = require('fs');
const server = express()
const port = 3000
const path = require("path");

server.listen(port);
console.log('Server started at http://localhost:' + port);

server.use(express.static("public"));

server.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/html' + '/main.html');
})
