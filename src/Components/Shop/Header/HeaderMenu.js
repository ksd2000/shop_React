import React from 'react';

function HeaderMenu() {
  let menus = [
    "All books",
    "Recent",
    "Popular",
    "Free books"
  ]
  return (
    <div className="header-menu">
      {menus.map((value, index)=>{
        return <div key={index} className="header-menu__nav">{value}</div>
      })}
    </div>
  );
}

export default HeaderMenu;