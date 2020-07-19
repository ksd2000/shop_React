import React from 'react';
import BookCover from './BookCover.js';

function Books(props) {
  const bookComponents = props.katalog.map(book =>
    <BookCover book={book} key={book.id} updateCart={props.updateCart} />)
  return (
    <div className="book">
          {bookComponents}
    </div>
  );
}

export default Books;