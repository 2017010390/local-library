const express = require("express");
const router = express.Router();

// Require controller modulers
const book_controller = require("../controllers/bookController");
const author_controller = require("../controllers/authorController");
const genre_controller = require("../controllers/genreController");
const book_instance_controller = require("../controllers/bookinstanceController");

// GET catalog home page
router.get("/", book_controller.index);

/** Book Router */
// Get request for creating a Book.
router.get("/book/create", book_controller.book_create_get);

// Post request for creating Book
router.post("/book/create", book_controller.book_create_post);

// Get request to delete Book
router.get("/book/:id/delete", book_controller.book_delete_get);

// Post request to delete Book
router.post("/book/:id/delete", book_controller.book_delete_post);

// Get request to update Book
router.get("/book/:id/update", book_controller.book_update_get);

// Post request to update Book
router.post("/book/:id/update", book_controller.book_update_post);

// Get request for one Book
router.get("/book/:id", book_controller.book_detail);

// Get request for list of all Book items
router.get("/books", book_controller.book_list);

/** Author Router */
// Get request for creating Author
router.get("/author/create", author_controller.author_create_get);

// Post request to create Author
router.post("/author/create", author_controller.author_create_post);

// Get request to delete Author
router.get("/author/:id/delete", author_controller.author_delete_get);

// Post request to delete Author
router.post("/author/:id/delete", author_controller.author_delete_post);

// Get request to update Author
router.get("/author/:id/update", author_controller.author_update_get);

// Post request to update Author
router.post("/author/:id/update", author_controller.author_update_post);

// Get request to one Author
router.get("/author/:id", author_controller.author_detail);

// Get request to Author list
router.get("/authors", author_controller.author_list);

/** Genre Router */
// Get request to create Genre
router.get("/genre/create", genre_controller.genre_create_get);

// Post request to create Genre
router.post("/genre/create", genre_controller.genre_create_post);

// Get request to delete Genre
router.get("/genre/:id/delete", genre_controller.genre_delete_get);

// Post request to delete Genre
router.post("/genre/:id/delete", genre_controller.genre_delete_post);

// Get request to update Genre
router.get("/genre/:id/update", genre_controller.genre_update_get);

// Post request to update Genre
router.get("/genre/:id/update", genre_controller.genre_update_post);

// Get request to one Genre
router.get("/genre/:id", genre_controller.genre_detail);

// Get request to Genre list
router.get("/genres", genre_controller.genre_list);

/** BookInstance Router */
// Get request to create bookinstance
router.get("/bookinstance/create", book_instance_controller.bookinstance_create_get);

// Post request to create bookinstance
router.post("/bookinstance/create", book_instance_controller.bookinstance_create_post);

// Get request to delete bookinstance
router.get("/bookinstance/:id/delete", book_instance_controller.bookinstance_delete_get);

// Post request ot delete bookinstance
router.post("/bookinstance/:id/delete", book_instance_controller.bookinstance_delete_post);

// Get request to update bookinstance
router.get("/bookinstance/:id/update", book_instance_controller.bookinstance_update_get);

// Post request to update bookinstance
router.get("/bookinstance/:id/update", book_instance_controller.bookinstance_update_post);

// Get request to one bookinstance
router.get("/bookinstance/:id", book_instance_controller.bookinstance_detail);

// Get request to bookinstance list
router.get("/bookinstances", book_instance_controller.bookinstance_list);

module.exports = router;
