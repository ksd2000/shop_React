import React from 'react';

function BookCover(props) {
  return (
    <div className="book-cover">
      <img className="book-cover__img" src={props.book.img} alt="обложка" />
      <div className="book-cover__title">{props.book.title}</div>
      <div className="book-cover__name">{props.book.name}</div>
      <div className="book-cover__price">{props.book.price} руб.</div>
      <button onClick={() => { props.updateCart(props.book)}} className="book-cover__btn">В корзину</button>
    </div>
  );
}

export default BookCover;