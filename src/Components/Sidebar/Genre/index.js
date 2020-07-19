import React from 'react';
import Link from './Link.js';
import genreDate from './genreDate.js';

function Genre(props) {

  const menuGenre = genreDate.map(value =>
    <Link key={value.id} genre={value} idGenreBooks={props.idGenreBooks} activeGenre={props.activeGenre} />)
  return (
    <div className="sidebar-genre">
          {menuGenre}
    </div>
  );
}

export default Genre;