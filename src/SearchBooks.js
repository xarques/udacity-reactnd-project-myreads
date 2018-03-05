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
        books.forEach(book => {
          const bookInShelf = this.props.myBooks.find(myBook => myBook.id === book.id);
          if (bookInShelf) {
            book.shelf = bookInShelf.shelf;
          } else {
            book.shelf = 'none';
          }
        })
        this.setState(state => {
          if (state.query) {
            // The query is not empty when receiving the search response
            return { books }
          } else {
            // Ignore the search response as the query field is empty
            return { books: []}
          }
        });
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