import React from 'react';
import './Shop.css';
import Books from './Books';
import Header from './Header';

function Shop(props) {

  return (
    <div className="shop">
        <Header />
        <Books katalog={props.katalog} updateCart={props.updateCart} />
    </div>
  );
}

export default Shop;