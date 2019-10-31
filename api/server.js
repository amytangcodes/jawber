const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = 3000;
const BOOKS = [
  { id: 1, name: "Mobi Dick", author: "Herman Melville" },
  { id: 2, name: "Doctor Sleep", author: "Stephen King" },
  { id: 3, name: "The Shining", author: "Stephen King" }
];

const bookRouter = express.Router();

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
          id: BOOKS.length + 1,
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

// Utilize Routes
app.use(bodyParser.json()); // Go through bodyparser first
app.use("/books", bookRouter);

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}...`);
});

// const http = require("http");
// const bodyParser = require("body-parser");

// const { PORT } = require("./utils/constants");

// // Create main express instance
// const router = express();

// // Require routes
// const { router: jobRoutes } = require("./routes/jobs/jobRoutes");

// // Utilize routes
// router.use(bodyParser.urlencoded({ extended: true }));
// router.use(bodyParser.json());
// router.use("/api/jobs", jobRoutes);

// // Create a server from express instance
// const server = http.createServer(router);

// server.listen(PORT, () => {
//   console.log(`Server is running on PORT:${PORT}`);
// });
