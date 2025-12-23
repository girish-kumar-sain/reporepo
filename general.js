const axios = require("axios");

const getAllBooks = async () => {
  return await axios.get("http://localhost:5000/books");
};

const getBookByISBN = async (isbn) => {
  return await axios.get(`http://localhost:5000/books/${isbn}`);
};

const getBooksByAuthor = async (author) => {
  return await axios.get(`http://localhost:5000/books/author/${author}`);
};

const getBooksByTitle = async (title) => {
  return await axios.get(`http://localhost:5000/books/title/${title}`);
};
