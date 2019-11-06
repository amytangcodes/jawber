const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = 3000;

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

const { router: bookRouter } = require("./routes/books");

// Utilize Routes
app.use(bodyParser.json()); // Go through bodyparser first
app.use("/books", bookRouter); // Pulling from const { router: bookRouter } = require("./routes/books");

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
