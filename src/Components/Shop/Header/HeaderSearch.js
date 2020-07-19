import React from 'react';
import logo from './search.png'

class HeaderSearch extends React.Component {

  handleChange(event) {
    console.log(event.target.value)
  }
  
  render() {
    return (<form className="header-search">
        <input type="txt" placeholder="Enter Keywords" onChange={this.handleChange.bind(this)} className="header-search__input" />
        <input type="image" name="picture" alt="поиск" src={logo} className="header-search__logo" />
      </form>
    )
  }
}
export default HeaderSearch;