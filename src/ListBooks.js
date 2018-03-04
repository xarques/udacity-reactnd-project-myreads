import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array
  }
  
  render() {
    const filterBy = (books, shelf) => books.filter(book => book.shelf === shelf);
    const { books, changeShelf } = this.props;
    // Create an array of currently reading books
    const currentlyReading = filterBy(books, "currentlyReading");
    // Create an array of want to read books
    const wantToRead = filterBy(books, "wantToRead");
    // Create an array of read books
    const read = filterBy(books, "read");

    return (
      <div className='my-reads'>
        <div className='my-reads-title'>
          <h1>My Reads</h1>
        </div>
        <div className='shelves'>
          <Shelf title='Currently Reading' books={currentlyReading} changeShelf={ changeShelf }/>
          <Shelf title='Want to read' books={wantToRead} changeShelf={changeShelf}/>
          <Shelf title='Read' books={read} changeShelf={changeShelf}/>
        </div>
        <Link className='search-link' to='/search'/>
      </div>
    )
  }
}
export default ListBooks;