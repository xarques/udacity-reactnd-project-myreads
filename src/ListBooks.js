import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';

const ListBooks = (props) => {
  const { currentlyReading, wantToRead, read, changeShelf } = props;
  return (
    <div className='my-reads'>
      <div className='my-reads-title'>
        <h1>My Reads</h1>
      </div>
      <div className='shelves'>
        <Shelf title='Currently Reading' books={currentlyReading} changeShelf={ changeShelf }/>
        <Shelf title='Want to Read' books={wantToRead} changeShelf={changeShelf}/>
        <Shelf title='Read' books={read} changeShelf={changeShelf}/>
      </div>
      <Link className='search-link' to='/search'/>
    </div>
  )
}

ListBooks.propTypes = {
  currentlyReading: PropTypes.array.isRequired,
  wantToRead: PropTypes.array.isRequired,
  read: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
}

export default ListBooks;