import React from 'react';
import { useCart } from '../context/cartContext';
import './CartItem.css'; // CartItem 컴포넌트용 CSS 추가

// props에서 cart, setCart를 제거합니다. item, quantity만 받습니다.
function CartItem({ item, quantity }) {
  // useCart 훅을 사용해 removeFromCart 함수를 직접 가져옵니다.
  const { removeFromCart } = useCart();

  return (
    <li className="cart-item">
      <img className="cart-item-img" src={item.img} alt={item.name} />
      <div className="cart-item-info">
        <span className="item-name">{item.name}</span>
        <span className="item-price">{item.price.toLocaleString()}원</span>
      </div>
      <div className="cart-item-quantity">
        <span>수량: {quantity}</span>
      </div>
      <button
        className="cart-item-delete"
        // onClick 핸들러에서 context의 removeFromCart 함수를 호출하여 해당 아이템을 삭제합니다.
        onClick={() => removeFromCart(item.id)}
      >
        삭제
      </button>
    </li>
  );
}

export default CartItem;
