const express = require('express');
const router = express.Router();
const voteController = require('../controllers/vote');

router.get('/', voteController.index);
router.post('/vote/:postId', voteController.vote);
router.post('/unvote/:postId', voteController.unVote);

module.exports = router;