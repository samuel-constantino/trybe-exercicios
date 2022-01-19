const socket = window.io();

// A 'lib' expõe a constante 'Qs', que utilizaremos dessa forma no nosso exemplo
const { username, room } = Qs.parse(location.search, {
    ignoreQueryPrefix: true,
});

socket.emit('joinRoom', { username, room });

const createMessage = (message) => {
    const messagesList = document.querySelector('#messages');
    const li = document.createElement('li');
    li.innerText = message;
    messagesList.appendChild(li);
};

socket.on('serverMessage', (message) => createMessage(message));

const form = document.querySelector('form');
const inputMessage = document.querySelector('#messageInput');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = inputMessage.value;
    socket.emit('roomClientMessage', { room, message });
    inputMessage.value = '';
    return value;
});