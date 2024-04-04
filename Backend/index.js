const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const cors = require('cors');
const router = require('./router');

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);

app.use(cors());

const socketIo = socketio(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
});

socketIo.on('connection', (socket) => {
    console.log(`У нас новое подключение: ${socket.id}`);

    socket.on('message', (data)=>{
        socketIo.emit('response',data)
        console.log('Message:', data)
    })

    socket.on('disconnect', () => {
        console.log(`${socket.id} отключился`);
    });
});

app.use(router);

server.listen(PORT, () => console.log(`Сервер запущен на порте ${PORT}`));
