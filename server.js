const express = require('express');
const app = express();
const port = 3000;

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

app.use((req, res, next) => {
	const start = Date.now();
	next();
	const delta = Date.now() - start;
	console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
