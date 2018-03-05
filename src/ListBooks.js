import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';

class ListBooks extends Component {
  static propTypes = {
    currentlyReading: PropTypes.array.isRequired,
    wantToRead: PropTypes.array.isRequired,
    read: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }
  
  render() {
    const { currentlyReading, wantToRead, read, changeShelf } = this.props;
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