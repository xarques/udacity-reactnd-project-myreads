import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import * as BooksAPI from './BooksAPI';
import './App.css';

class App extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    // shelf: <String> contains one of ["wantToRead", "currentlyReading", "read"]
    BooksAPI.getAll().then((books) => {
      console.log(JSON.stringify(books));
      this.setState({ books });
    });
  }

  changeShelf = (book, newShelf) => {
    this.setState(state => {
      // Retrieve the index of the book in the books array
      const bookIndex = state.books.findIndex(b => b.id === book.id);
      // Clone the books array
      const newBooks = [...state.books];
      // Update the shelf
      newBooks[bookIndex].shelf = newShelf
      BooksAPI.update(book, newShelf);
      // Return the new books array
      return(
        {
          books: newBooks
        }
      )
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks
            books={ this.state.books }
            changeShelf={ this.changeShelf }
          />
        )}
        />
        <Route path='/search' render={() => (
          <SearchBooks
            books={ this.state.books }
            changeShelf={ this.changeShelf }
          />
        )}
        />
      </div>
    );
  }
}

export default App;
