import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';
import escapeRegexp from 'escape-string-regexp';
import sortBy from 'sort-by';

class SearchBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = query => {
    this.setState({query: query.trim()});
  } 

  render() {
    const { books, changeShelf } = this.props;
    const { query } = this.state;

    let showingBooks;
    if (query) {
      const match = RegExp(escapeRegexp(query), 'i');
      showingBooks = books.filter(book => match.test(book.title) );
    } else {
      showingBooks = books;
    }

    showingBooks.sort(sortBy('title'));

    return (
      <div className='list-books'>
        <div className='list-books-top'>
          <Link className='search-back' to='/'/>
          <input 
            className="search-books"
            type="text"
            placeholder="Search Books"
            value = { query }
            onChange={ event => this.updateQuery(event.target.value) }
          />
        </div>
        <Shelf books={showingBooks} changeShelf={changeShelf} />
      </div>
    )
  }
}

export default SearchBooks;