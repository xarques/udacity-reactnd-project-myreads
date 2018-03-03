import React from 'react';
import PropTypes from 'prop-types';

const Books = (props) => {
  return (
    <ul className='book-list'>
      { props.books.map(book => 
          <li className='book-list-item' key={book.id}>
            <div className='book-cover' style={{
              backgroundImage: `url(${book.imageLinks.smallThumbnail})`
            }} />
            <p className='book-title'>{book.title}</p>
            <ul className='author-list'>
              { book.authors.map(author => <li>{author}</li>) }
            </ul>
          </li>
        )
      }
    </ul>
  )
}

Books.propTypes = {
  books: PropTypes.array.isRequired
}

export default Books;