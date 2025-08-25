import React, { useContext } from 'react';
import { MenuContext } from '../context/menuContext.jsx';
import { CartContext } from '../context/cartContext.jsx';
import { Item } from './Item.jsx';

export const Menu = () => {
  const { menu } = useContext(MenuContext);
  const { addToCart } = useContext(CartContext);

  if (!menu) {
    return <div>메뉴를 불러오는 중입니다...</div>;
  }

  return (
    <div className="menu-container">
      <div className="menu-category">
        <h2>Coffee</h2>
        <div className="menu-list">
          {menu.coffee.map((item) => (
            <Item key={item.id} item={item} onAdd={() => addToCart(item)} />
          ))}
        </div>
      </div>
      <div className="menu-category">
        <h2>Non-Coffee</h2>
        <div className="menu-list">
          {menu.nonCoffee.map((item) => (
            <Item key={item.id} item={item} onAdd={() => addToCart(item)} />
          ))}
        </div>
      </div>
    </div>
  );
};
