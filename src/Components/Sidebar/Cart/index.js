import React from 'react';
import imgCart from './сart.png';
import ContentCart from './ContentCart.js';

class Cart extends React.Component {
  constructor() {
    super()
    this.state = {
      statusCart: false,
      classNameContent: "sidebar-cart__content_close"
    }
    this.openCart = this.openCart.bind(this)
  }

  openCart = () => {
    this.state.statusCart === false ?
          this.setState({classNameContent: "sidebar-cart__content_open"}) :
          this.setState({classNameContent: "sidebar-cart__content_close"})
    this.setState( prevState => {
      return {statusCart: !prevState.statusCart}
    })
  }

  render(props) {
    let sum = 0
    for (let books of this.props.cartBook.cartBook) {
      sum = sum + books.price
    }
    const content = this.props.cartBook.cartBook.map(value =>
      <ContentCart key={value.id} contentCart={value} />)
    return (
      <div className="sidebar-cart">
        <div className="sidebar-cart__btn" onClick={this.openCart}>
          <img src={imgCart} alt='корзина' className="sidebar-cart__img" />
          <div className="sidebar-cart__value">
            <div>{'книг - ' + this.props.cartBook.cartBook.length + ' шт'}</div>
            <div>{'сумма - ' + sum + ' руб'}</div>
          </div>
        </div> 
        <div className={this.state.classNameContent}>
          <div>{content}</div>
          <button onClick={() => { this.props.cartBook.getCart(); this.setState({classNameContent: "sidebar-cart__content_close"})}} className="sidebar-cart__content_btn">Оплатить</button>
          <button onClick={() => { this.props.cartBook.removeCart(); this.setState({classNameContent: "sidebar-cart__content_close"})}} className="sidebar-cart__content_btn">Отмена</button>
        </div>
      </div>
    )
  }
}
export default Cart;