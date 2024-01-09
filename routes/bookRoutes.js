// routes/bookRoutes.js
const express = require('express');
const bookController = require('../controllers/bookController');
const authenticate = require('../middlewares/authenticate');

const router = express.Router();

router.get('/books', bookController.getAllBooks);
router.get('/books/:id', authenticate, bookController.getBookById)
router.put('/books/like/:id', authenticate, bookController.likeBook);
router.put('/books/unlike/:id', authenticate, bookController.unlikeBook);

module.exports = router;
