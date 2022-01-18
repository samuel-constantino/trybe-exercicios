const express = require('express');

const app = express();

const http = require('http').createServer(app);

const io = require('socket.io')(http, {
    cors: {
        origin: 'http://localhost:3000', // url aceita pelo cors
        methods: ['GET', 'POST'], // Métodos aceitos pela url
    }
});

io.on('connection', (socket) => {
    console.log(`Usuário conectado. ID: ${socket.id}`);
    
    socket.emit('ola', 'Que bom que você chegou aqui!');

    socket.on('ping', () => {
        console.log(`Usuário ${socket.id} emitiu um ping!`);

        io.emit('pong', `${socket.id} enviou um ping!`); // Essa linha avisa ao cliente que o ping foi recebido
    });
});

app.get('/', (_req, res) => {
    res.sendFile(__dirname + '/index.html');
});

http.listen(3000, () => {
    console.log('Servidor ouvindo na porta 3000');
});
