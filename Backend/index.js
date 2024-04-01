const express = require('express')
const socketio = require('socket.io')
const http = require('http')

const PORT = process.env.PORT || 5000;

const router = require('./router');
const { Console } = require('console');
const { disconnect } = require('process');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket)=>{
    console.log(`We have new connection ${socket}`)

    socket.on('disconection', ()=>{
        console.log(`${socket} disconnect`)
    })
})

app.use(router)

server.listen(PORT, ()=> console.log(`Server has started on port ${PORT}`))