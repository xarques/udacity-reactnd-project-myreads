import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Books from './Books';

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array
  }
  
  render() {
    const filterBy = (books, shelf) => books.filter(book => book.shelf === shelf);
    const { books } = this.props;
    //const currentlyReading = books.filter(book => book.shelf === "currentlyReading");
    const currentlyReading = filterBy(books, "currentlyReading");
    const wantToRead = filterBy(books, "wantToRead");
    const read = filterBy(books, "read");

    return (
      <div className='myreads'>
      <h1>My Reads</h1>
        <div className=''>
          <h2>Currently Reading</h2>
          <Books books={currentlyReading}/>
        </div>
        <div className=''>
          <h2>Want to read</h2>
          <Books books={wantToRead}/>
        </div>
        <div className=''>
          <h2>Read</h2>
          <Books books={read}/>
        </div>
      </div>
    )
  }
}
export default ListBooks;