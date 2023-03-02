const express = require('express');
const app = express();
const port = 3000;

const friends = [
	{
		id: 0,
		name: 'Albert Einstein',
	},
	{
		id: 1,
		name: 'Georges Weya',
	},
];

app.use((req, res, next) => {
	const start = Date.now();
	next();
	const delta = Date.now() - start;
	console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.post('/friends', (req, res) => {
	// req.body = {} or {prop: value}
	const { name } = req.body;

	// undefined
	if (!name) {
		return res.status(400).json({
			error: 'Missing friend name',
		});
	}

	const newFriend = {
		id: friends.length,
		name,
	};
	friends.push(newFriend);

	res.status(200).json(newFriend);
});

app.get('/friends', (req, res) => {
	res.status(200).json(friends);
});

app.get('/friends/:friendId', (req, res) => {
	const { friendId } = req.params;
	const friend = friends[+friendId];

	if (friend) {
		res.status(200).json(friend);
	} else {
		res.status(404).json({
			error: 'Friend data not founded',
		});
	}
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
