import React from 'react';

function Link(props) {

  return (
    <div className={`sidebar-genre__link ${props.genre.id === props.activeGenre ? 'sidebar-genre__link_active' : null}`} onClick={() => {props.idGenreBooks(props.genre)}}>
      <div className="sidebar-genre__link_icon" style={{background: props.genre.color}} ></div>
      <div className="sidebar-genre__link_item">{props.genre.genre}</div>
    </div>
  );
}

export default Link;