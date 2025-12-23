const axios = require("axios");

const BASE_URL = "http://localhost:5000";

/**
 * Retrieve all books from the bookstore
 */
const getAllBooks = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/books`);
    return response.data;
  } catch (error) {
    console.error("Error fetching all books:", error.message);
    throw error;
  }
};

/**
 * Retrieve a book by ISBN
 * @param {string} isbn
 */
const getBookByISBN = async (isbn) => {
  try {
    const response = await axios.get(`${BASE_URL}/books/ISBN/${isbn}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching book by ISBN:", error.message);
    throw error;
  }
};

/**
 * Retrieve books by author
 * @param {string} author
 */
const getBooksByAuthor = async (author) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/books/author/${author}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching books by author:", error.message);
    throw error;
  }
};

/**
 * Retrieve books by title
 * @param {string} title
 */
const getBooksByTitle = async (title) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/books/title/${title}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching books by title:", error.message);
    throw error;
  }
};

module.exports = {
  getAllBooks,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle,
};

