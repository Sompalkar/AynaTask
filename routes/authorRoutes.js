
const express = require('express');
const authorController = require('../controllers/authorController'); 

const authenticate = require('../middlewares/authenticate.js');

const router = express.Router();

router.get('/authors', authorController.getAllAuthors);
router.get('/authors/:id', authorController.getAuthorById);
router.get('/authors/me', authenticate, authorController.getLoggedInAuthor);

module.exports = router;
