const path = require('path');

function getMessages(req, res) {
	return res.sendFile(
		path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg')
	);
}
function postMessage(req, res) {
	console.log('Updating messages');

	return res.json({
		message: req.body.message,
	});
}

module.exports = {
	getMessages,
	postMessage,
};
