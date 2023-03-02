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

app.post('/messages', (req, res) => {
	console.log('updating messages ...');
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
