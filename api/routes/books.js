const express = require("express");
const uuid = require("uuid/v4");

const bookRouter = express.Router();

const BOOKS = [
  {
    id: "6b90d87a-451f-442a-a6a3-aee1e9a27271",
    name: "Mobi Dick",
    author: "Herman Melville"
  },
  {
    id: "f66be850-89a5-44ee-9e93-3df6bb83f195",
    name: "Doctor Sleep",
    author: "Stephen King"
  },
  {
    id: "52e28741-ef89-452b-936c-3bfe07f3e3a0",
    name: "The Shining",
    author: "Stephen King"
  }
];

bookRouter
  .route("/")
  .get((req, res) => {
    res.json({
      results: BOOKS
    });
  })
  .post((req, res) => {
    const { body } = req;
    if (body) {
      const { name, author } = body;
      if (!name || !author) {
        // bad things happen
        res.status(400).send();
      } else {
        const book = {
          id: uuid(),
          name,
          author
        };
        BOOKS.push(book);
        res.status(201).json(book);
      }
    } else {
      // Wow you didnt send anything...
      res.status(400).send();
    }
  });

bookRouter.route("/:bookId").get((req, res) => {
  const book = BOOKS.find(book => book.id === Number(req.params.bookId));

  if (book) {
    res.json(book);
  } else {
    res.status(404).json({});
  }
});

exports.router = bookRouter;
