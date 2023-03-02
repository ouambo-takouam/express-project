const friends = require('../models/friends.model');

function postFriend(req, res) {
	// req.body = {} or {prop: value}
	const { name } = req.body;

	// undefined
	if (!name) {
		return res.status(400).json({
			error: 'Missing friend name',
		});
	}

	// if data available
	const newFriend = {
		id: friends.length,
		name,
	};
	friends.push(newFriend);

	return res.status(200).json(newFriend);
}

function getFriends(req, res) {
	return res.status(200).json(friends);
}

function getFriend(req, res) {
	const { friendId } = req.params;
	const friend = friends[+friendId];

	if (friend) {
		return res.status(200).json(friend);
	} else {
		return res.status(404).json({
			error: 'Friend data not founded',
		});
	}
}

module.exports = {
	postFriend,
	getFriends,
	getFriend,
};
