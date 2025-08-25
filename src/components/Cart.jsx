import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext.jsx';
import { MenuContext } from '../context/menuContext.jsx';

export const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const { menu } = useContext(MenuContext);

  const allMenuItems = [...menu.coffee, ...menu.nonCoffee];
  
  const totalPrice = cart.reduce((acc, currentItem) => {
    const itemInfo = allMenuItems.find(menuItem => menuItem.id === currentItem.id);
    return acc + (itemInfo ? itemInfo.price * currentItem.quantity : 0);
  }, 0);

  return (
    <div className="cart-container">
      <h2>장바구니</h2>
      <ul className="cart-items">
        {cart.length > 0 ? (
          cart.map((cartItem) => {
            const itemInfo = allMenuItems.find((menuItem) => menuItem.id === cartItem.id);
            if (itemInfo) {
              return (
                <li key={cartItem.id} className="cart-item">
                  <div className="item-info">
                    <img src={itemInfo.img} alt={itemInfo.name} />
                    <div>
                      <h4>{itemInfo.name}</h4>
                      <p>{itemInfo.price.toLocaleString()}원 x {cartItem.quantity}</p>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(cartItem.id)}>
                    제거
                  </button>
                </li>
              );
            }
            return null;
          })
        ) : (
          <p className="empty-cart">장바구니에 담긴 상품이 없어요!</p>
        )}
      </ul>
      <div className="total-price">
        <strong>총 주문 금액: {totalPrice.toLocaleString()}원</strong>
      </div>
    </div>
  );
};