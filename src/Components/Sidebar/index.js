import React from 'react';
import Genre from './Genre';
import Cart from './Cart';

function Sidebar(props) {

  return (
    <div className="sidebar">
        <Cart cartBook={props} />
        <Genre idGenreBooks={props.idGenreBooks} activeGenre={props.activeGenre} />
        <div className="sidebar__contact">
          <h3>Телефон: (888)88888888</h3>
        </div>
    </div>
  );
}

export default Sidebar;