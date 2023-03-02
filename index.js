const express = require('express');
const app = express();
const port = 3000;

const {
	getMessages,
	postMessage,
} = require('./controllers/messages.controller');

const {
	getFriends,
	getFriend,
	postFriend,
} = require('./controllers/friends.controller');

app.use((req, res, next) => {
	const start = Date.now();
	next();
	const delta = Date.now() - start;
	console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.post('/friends', postFriend);

app.get('/friends', getFriends);

app.get('/friends/:friendId', getFriend);

app.get('/messages', getMessages);

app.post('/messages', postMessage);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
