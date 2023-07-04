import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <div>
      <ul className='container'>
        <button className="menu-button">Todos</button>
        <button className="menu-button">Maquillaje</button>
        <button className="menu-button">Skincare</button>
      </ul>
    </div>
  );
}

export default Menu;