const Book = require("../models/bookModel");

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().populate("author", "name");
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "No Books are there" });
  }
};

const getBookById = async (req, res) => {
  const { id } = req.params;
  // console.log(id)
  try {
    const book = await Book.findById(id);
    res.json(book);

  } catch (error) {

    console.error(error);

    res.status(500).json({ message: "Book Not Exist " });
  }
};
const likeBook = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    //check if book likes if 0 then make it 1 Else increase by 1 

    if (!book.likes) {
      book.likes = 1;
    } else {
      book.likes += 1;
    }

    await book.save();

    res.json({ message: "Book liked successfully", likes: book.likes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

const unlikeBook = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    // check if book has likes more than 0 then remove it
    if (book.likes > 0) {
      book.likes -= 1;
    }

    await book.save();

    res.json({ message: "Book unliked successfully", likes: book.likes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

module.exports = { getAllBooks, getBookById, likeBook, unlikeBook };
