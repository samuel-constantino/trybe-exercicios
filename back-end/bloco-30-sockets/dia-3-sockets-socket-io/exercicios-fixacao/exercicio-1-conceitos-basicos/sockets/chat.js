module.exports = (io) => io.on('connection', (socket) => {
    socket.emit('serverMessage', 'Bem vindo ao chat!');

    socket.broadcast.emit('serverMessage', `${socket.id} conectou.`)

    socket.on('clientMessage', (message) => {
        io.emit('serverMessage', message);
    });

    socket.on('disconnect', () => {
        socket.broadcast.emit('serverMessage', `${socket.id} desconectou`);
    });
});
