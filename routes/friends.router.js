const { Router } = require('express');

const {
	getFriend,
	getFriends,
	postFriend,
} = require('../controllers/friends.controller');

const friendsRouter = Router();

friendsRouter.get('/', getFriends);
friendsRouter.get('/:friendId', getFriend);
friendsRouter.post('/', postFriend);

module.exports = friendsRouter;
