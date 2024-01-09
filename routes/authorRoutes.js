
const express = require('express');
const authorController = require('../controllers/authorController'); 

const authenticate = require('../middlewares/authenticate.js');

const router = express.Router();

router.get('/authors', authorController.getAllAuthors);     // get all authors
router.get('/authors/:id', authorController.getAuthorById);     // get author by ID
router.get('/authors/me', authenticate, authorController.getLoggedInAuthor);    // get Logged in User 

module.exports = router;
