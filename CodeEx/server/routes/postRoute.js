const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.post('/create', postController.create);
router.get('/index', postController.index);
router.patch('/accept/:id', postController.accept);
router.get('/waiting', postController.waiting_challenge);
router.get('/mine/:id', postController.my_challenge);



module.exports = router;
