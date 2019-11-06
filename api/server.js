const express = require("express");
// const bodyParser = require("body-parser"); //

const app = express();

const PORT = 4000;

const { router: bookRouter } = require("./routes/books");
const { router: authorRouter } = require("./routes/authors");

// Utilize Routes
// app.use(bodyParser.json()); // Go through bodyparser first
// app.use(bodyParser.url);
app.use(express.json()); // going to use this instead of bodyParser.
app.use("/books", bookRouter); // Pulling from const { router: bookRouter } = require("./routes/books");
app.use("/authors", authorRouter);

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}...`);
});
