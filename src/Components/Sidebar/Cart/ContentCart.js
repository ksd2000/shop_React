import React from 'react';

class ContentCart extends React.Component {
  
  render(props) {

    return (
        <div className="sidebar-cart__content">
            <div>{this.props.contentCart.name}</div>
            <div>
              {this.props.contentCart.title +
                    ' - ' + this.props.contentCart.price + ' руб'}
            </div>
        </div>
    )
  }
}
export default ContentCart;