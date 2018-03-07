import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import * as BooksAPI from './BooksAPI';
import './App.css';

class App extends Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: [],
    myBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(this.updateShelves(books));
    });
  }

  updateShelves(books) {
    const filterBy = (b, shelf) => b.filter(book => book.shelf === shelf);
    // Create an array of currently reading books
    const currentlyReading = filterBy(books, "currentlyReading");
    // Create an array of want to read books
    const wantToRead = filterBy(books, "wantToRead");
    // Create an array of read books
    const read = filterBy(books, "read");
    return ({
      myBooks: books,
      currentlyReading,
      wantToRead,
      read
    });
  }

  changeShelf = (book, newShelf) => {
    if (book.shelf !== newShelf) {
      this.setState(state => {
        // Retrieve the index of the book in the books array
        const bookIndex = state.myBooks.findIndex(b => b.id === book.id);
        // Clone the books array
        const newBooks = [...state.myBooks];
        if (bookIndex !== -1) {
          // Book already exists. Update the shelf
          newBooks[bookIndex].shelf = newShelf
        } else {
          // Book is new. Set the shelf and add the new book in the array
          book.shelf = newShelf;
          newBooks.push(book);
        }
        // Update the shelf
        BooksAPI.update(book, newShelf).then(response => {
          // Do not refresh the view. We assume that the book has been updated successfully
          // this.componentDidMount();
        });
        // Return the new books arrays
        return (this.updateShelves(newBooks));
      });
    }
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks
            currentlyReading={this.state.currentlyReading}
            wantToRead={this.state.wantToRead}
            read={this.state.read}
            changeShelf={ this.changeShelf }
          />
        )}
        />
        <Route path='/search' render={() => (
          <SearchBooks
            myBooks={this.state.myBooks}
            changeShelf={ this.changeShelf }
          />
        )}
        />
      </div>
    );
  }
}

export default App;
