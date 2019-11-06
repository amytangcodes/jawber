import React, { Component } from "react";
// import Jobs from "./Jobs";
// import { createGlobalStyle } from "styled-components";
// import waves from "../assets/waves.png";

import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar
} from "@material-ui/core";

class App extends Component {
  constructor() {
    super();

    this.state = {
      books: []
    };
  }

  // Grab all the data from /api/routes/books.js
  async componentDidMount() {
    const result = await fetch("/books");
    const data = await result.json();
    const books = data.results;
    console.log("books: ", books);
    this.setState({ books });
  }

  render() {
    const { books } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <List>
            {books.map(book => {
              return (
                <ListItem key={book.id}>
                  <ListItemText primary={book.name} secondary={book.author} />
                </ListItem>
              );
            })}
          </List>
        </header>
      </div>
    );
  }
}

export default App;
