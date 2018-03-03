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
    console.log(JSON.stringify(currentlyReading));
    const wantToRead = filterBy(books, "wantToRead");
    const read = filterBy(books, "read");

    return (
      <div className='my-reads'>
        <div className='my-reads-title'>
          <h1>My Reads</h1>
        </div>
        <div className='my-reads-content'>
          <div className=''>
            <h2 className='book-shelf'>Currently Reading</h2>
            <Books books={currentlyReading}/>
          </div>
          <div className=''>
            <h2 className='book-shelf'>Want to read</h2>
            <Books books={wantToRead}/>
          </div>
          <div className=''>
            <h2 className='book-shelf'>Read</h2>
            <Books books={read}/>
          </div>
        </div>
      </div>
    )
  }
}
export default ListBooks;