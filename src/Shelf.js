import React from 'react';
import PropTypes from 'prop-types';
import ShelfMenu from './ShelfMenu';

const Shelf = (props) =>  {
  const { books, title, changeShelf } = props;
  return (
    <div className='book-shelf'>
      {title && <h2 className='book-shelf-title'>{title}</h2> }
      <ul className='book-list'>
        { books.map(book => 
            <li className='book-list-item' key={book.id}>
              <div className='book-cover' style={{
                backgroundImage: `url(${(book.imageLinks && book.imageLinks.smallThumbnail) || 'icons/no-image-available.jpg' })`
              }} />
              <ShelfMenu book={ book } changeShelf= { changeShelf }/>
              <p className='book-title'>{book.title}</p>
              <ul className='author-list'>
                { book.authors && book.authors.map(author => <li key={author}>{author}</li>) }
              </ul>
            </li>
          )
        }
      </ul>
    </div>
  )
}

Shelf.propTypes = {
  books: PropTypes.array.isRequired,
  title: PropTypes.string,
  changeShelf: PropTypes.func.isRequired
}

export default Shelf;