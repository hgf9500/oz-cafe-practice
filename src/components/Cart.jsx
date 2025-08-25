import React, { useContext } from 'react';
import { useCart } from '../context/cartContext';
import { MenuContext } from '../context/menuContext';
import CartItem from './CartItem';
import './Cart.css'; // Cart 컴포넌트용 CSS 추가

function Cart() {
  // props로 받던 menu, cart, setCart를 모두 제거합니다.
  // 대신 Context를 통해 필요한 상태와 함수를 직접 가져옵니다.
  const { cart } = useCart(); // useCart 커스텀 훅으로 cart 상태 가져오기
  const { menu } = useContext(MenuContext); // useContext로 menu 상태 가져오기

  // 메뉴 데이터가 로드되지 않았을 경우를 대비한 예외 처리
  if (!menu) {
    return (
      <div className="cart-container" style={{ textAlign: 'center' }}>
        메뉴 정보가 없어요!
      </div>
    );
  }

  // 커피와 논커피 메뉴를 하나의 배열로 합칩니다.
  const allMenus = [...menu.커피, ...menu.논커피];

  const totalPrice = cart.reduce((acc, currentItem) => {
    const itemInfo = allMenus.find(menuItem => menuItem.id === currentItem.id);
    return acc + (itemInfo.price * currentItem.quantity);
  }, 0);

  return (
    <div className="cart-container">
      <h2>장바구니</h2>
      <ul className="cart-list">
        {cart?.length > 0 ? (
          cart.map((cartEl) => {
            // 장바구니 아이템 ID에 해당하는 메뉴 정보를 찾습니다.
            const itemInfo = allMenus.find((menuItem) => menuItem.id === cartEl.id);
            return (
              <CartItem
                key={cartEl.id}
                item={itemInfo}
                quantity={cartEl.quantity}
              />
            );
          })
        ) : (
          <div className="no-item">장바구니에 담긴 상품이 없어요!</div>
        )}
      </ul>
      <div className="cart-total">
        <strong>총 주문 금액: {totalPrice.toLocaleString()}원</strong>
      </div>
    </div>
  );
}

export default Cart;

