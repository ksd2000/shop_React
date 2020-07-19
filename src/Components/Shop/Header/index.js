import React from 'react';
import HeaderMenu from './HeaderMenu';
import HeaderSearch from './HeaderSearch';

function Header() {
  return (
    <div className="header">
      <div className="header__title">
        <h1>Книжный магазин</h1>
        <HeaderSearch />
      </div>
      <HeaderMenu />
    </div>
  );
}

export default Header;