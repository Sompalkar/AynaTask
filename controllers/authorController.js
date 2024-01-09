
const User = require('../models/userModel.js');

const getAllAuthors = async (req, res) => {
  try {
    const authors = await User.find()
    res.json(authors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getAuthorById = async (req, res) => {
  try {
    const { id } = req.params;


    const authorDoc = await User.findById(id);
    if (!authorDoc) {
      return res.status(404).json({ message: 'Author not found' });
    }

    res.json(authorDoc);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getLoggedInAuthor = async (req, res) => {
  const authorId = req.params.authorId;

  if (authorId.toLowerCase() === 'me') {

    const loggedInAuthor = req.user;
    return res.json(loggedInAuthor);
  }

  try {
    const authorDoc = await User.findById(authorId);

    if (!authorDoc) {
      return res.status(404).json({ message: 'Author not found' });
    }

    res.json(authorDoc);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


module.exports = { getAllAuthors, getAuthorById, getLoggedInAuthor };
