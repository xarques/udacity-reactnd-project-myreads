import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShelfMenu from './ShelfMenu';

class Shelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    title: PropTypes.string,
    changeShelf: PropTypes.func.isRequired
  }

  render() {
    const { books, title, changeShelf } = this.props;
    return (
      <div className=''>
        {title && <h2 className='book-shelf'>{title}</h2> }
        <ul className='book-list'>
          { books.map(book => 
              <li className='book-list-item' key={book.id}>
                <div className='book-cover' style={{
                  backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                }} />
                <ShelfMenu book={ book } changeShelf= { changeShelf }/>
                <p className='book-title'>{book.title}</p>
                <ul className='author-list'>
                  { book.authors.map(author => <li key={author}>{author}</li>) }
                </ul>
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}

export default Shelf;