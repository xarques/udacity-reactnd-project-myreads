import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';
import * as BooksAPI from './BooksAPI';

class SearchBooks extends Component {
  static propTypes = {
    changeShelf: PropTypes.func.isRequired,
    myBooks: PropTypes.array.isRequired
  }

  state = {
    books: [],
    query: ''
  }

  updateQuery = query => {
    this.setState({ query });
    if (!query) {
      this.setState({ books: [] });
      return;
    }
    BooksAPI.search(query).then(books => {
      if (books.error) {
        this.setState({ books: [] });
      } else {
        // Clone the books array
        // Follow udacity recommendation: 
        // I would suggest that you not directly modify the book object rather create a new object containing the new details.
        // Thinking that objects are immutable keeps your code error free.
        const newBooks = books.map(book => {
          const bookCloned = {...book};
          const bookInShelf = this.props.myBooks.find(myBook => myBook.id === book.id);
          if (bookInShelf) {
            bookCloned.shelf = bookInShelf.shelf;
          } else {
            bookCloned.shelf = 'none';
          }
          return bookCloned;
        })
        // If The query is empty when receiving the search response
        // then Ignore the search response
        this.setState(state => state.query ? { books : newBooks } : { books: [] });
      }
    });
  } 

  render() {
    const { changeShelf } = this.props;
    const { books } = this.state;

    return (
      <div className='list-books'>
        <div className='list-books-top'>
          <Link className='search-back' to='/'/>
          <input 
            className="search-books"
            type="text"
            placeholder="Search Books"
            value= {this.state.query}
            onChange={ event => this.updateQuery(event.target.value) }
          />
        </div>
        <Shelf books={books} changeShelf={changeShelf} />
      </div>
    )
  }
}

export default SearchBooks;