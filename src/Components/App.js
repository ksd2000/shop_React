import React from 'react';
import './App.css';
import './responsive.css';
import Sidebar from './Sidebar';
import Shop from './Shop';
import booksData from './booksData.js';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      cart: [],
      genre: {
        id: 6,
        genre: 'Все',
        color: "black"
      }
    }
    this.updateCart = this.updateCart.bind(this)
    this.getCart = this.getCart.bind(this)
    this.removeCart = this.removeCart.bind(this)
    this.genreBooks = this.genreBooks.bind(this)
  }

  //updateCart = (value) => {this.setState({cart: value})}
  //updateCart = (value) => {this.setState({cart: this.state.cart.concat(value)})}
  //updateCart = (value) => {this.setState({ cart: [...this.state.cart, value] })}
  updateCart = (value) => {                     //добавить книгу в корзину
    let idBook = 1;
    for (let books of this.state.cart) {
      if (books.id === value.id) {
        idBook = 0;
        break
      }
    }
    if (idBook === 1) {
      this.setState((state) => {
        const newCart = [ ...state.cart, value ];
        return {
          cart: newCart
        }
      })
    }
  }
  getCart = () => {                               //оплатить корзину
    this.setState({
            //...... отправить подтверждение о покупке
      cart: []
    })
  }
  removeCart = () => {                             //удалить корзину
    this.setState({
      cart: []
    })
  }

  genreBooks = (value) => {                       //фильтр по жанру
    this.setState({
      genre: value
    })                      
    }   

  render() {
    let newBooks = booksData.filter(
      item => { if (this.state.genre.genre === 'Все') return true
                  else return item.genre === this.state.genre.genre
      }
    )
    return (                                  //изменим state по команде (кнопке) из дочернего компонента
      <div className="app">
        <Sidebar cartBook={this.state.cart} getCart={this.getCart} removeCart={this.removeCart} idGenreBooks={this.genreBooks} activeGenre={this.state.genre.id} />
        <Shop katalog={newBooks} updateCart={this.updateCart} />
      </div>
    )
  }
}

export default App;
