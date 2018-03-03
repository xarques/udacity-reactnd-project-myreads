import React from 'react';
import PropTypes from 'prop-types';

const Books = (props) => {
  return (
    <ul className=''>
      { props.books.map(book => 
          <li key={book.id}> {book.title}
            <div className='' style={{
              backgroundImage: `url(${book.imageLinks.smallThumbnail})`
            }} />
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