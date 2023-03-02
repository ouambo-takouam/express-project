function getMessages(req, res) {
	return res.send('<ul><li>Hello Albert !!!</li></ul>');
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
