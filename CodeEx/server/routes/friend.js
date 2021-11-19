const express = require('express');
const router = express.Router();
const FriendController = require('../controllers/friend');

router.get('/listFriend/:userId', FriendController.listFriend);
router.get('/:secondUserId', FriendController.isFriend);

module.exports = router;