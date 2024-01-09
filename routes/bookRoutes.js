// routes/bookRoutes.js
const express = require('express');
const bookController = require('../controllers/bookController');
const authenticate = require('../middlewares/authenticate');

const router = express.Router();

// book routes 

router.get('/books', bookController.getAllBooks); // get all books

router.get('/books/:id', authenticate, bookController.getBookById) // gets book by ID 
router.put('/books/like/:id', authenticate, bookController.likeBook); // Increase book likes by id 
router.put('/books/unlike/:id', authenticate, bookController.unlikeBook); // decrease book likes by id 

module.exports = router;
