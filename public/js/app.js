var socket = io();

socket.on('connected', function () {
	console.log('Connected to socket.io server!');
});