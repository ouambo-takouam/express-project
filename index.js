const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send({
		id: 1,
		name: 'Issac Newton',
	});
});

app.get('/messages', (req, res) => {
	res.send('<ul><li>This is your message</li></ul>');
});

app.post('/messages', (req, res) => {
	console.log('updating messages ...');
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
