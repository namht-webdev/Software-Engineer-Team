const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.post('/create', postController.create);
router.get('/index', postController.index);
router.get('/waiting', postController.waiting_challenge);
router.get('/mine', postController.my_challenge);



module.exports = router;
