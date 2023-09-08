const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname + '/style'));

app.get('/', (req,res) =>{
  res.sendFile(__dirname + '/index.html')
})

io.on('connection',(socket) =>{
  socket.on('SEND_MESSAGE', (data) =>{
    io.emit('SEND_MESSAGE', {message:data.message,name:data.name})
  })
})


http.listen('3000', () =>{
  console.log('STARTED')
})

