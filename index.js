const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const {Server} = require('socket.io');

const io = new Server(server);

app.get('/', (req, res) => {
    res.sendfile(__dirname + '/www/index.html');
});

io.on('connection', (socket) => {
    console.log('New user connected!');
    socket.on('chat message', messageText =>
    {
        io.emit('chat message', messageText);
    });
});

server.listen(3000, () =>
{
   console.log('http://localhost:3000/');
});

/*let fs = require('fs').promises;
fs.readFile('c:/socket-demo/index.js')
    .then((buf) => {
        console.log(buf);
    });*/
