module.exports = (io) => io.on('connection', (socket) => {
    socket.on('clientMessage', (message) => {
        console.log(`Messagem: ${message}`);
        io.emit('serverMessage', message);
    });
});
