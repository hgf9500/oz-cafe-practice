import { createContext, useState, useContext } from 'react';

// 1. CartContext 생성
export const CartContext = createContext();

// 2. Provider 컴포넌트 생성
export function CartProvider({ children }) {
  // cart 상태를 관리합니다. 초기값은 빈 배열입니다.
  const [cart, setCart] = useState([]);

  // 장바구니에 아이템을 추가하는 함수
  const addToCart = (newItem) => {
    setCart((prevCart) => {
      // 이미 장바구니에 있는 상품인지 확인합니다.
      const existingItem = prevCart.find((item) => item.id === newItem.id);

      if (existingItem) {
        // 이미 있는 상품이면 수량(quantity)만 1 증가시킵니다.
        return prevCart.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // 장바구니에 없는 새로운 상품이면, quantity를 1로 설정하여 추가합니다.
        return [...prevCart, { ...newItem, quantity: 1 }];
      }
    });
  };

  // 장바구니에서 아이템을 제거하는 함수
  const removeFromCart = (itemId) => {
    // 인자로 받은 itemId와 일치하지 않는 아이템만 필터링하여 새로운 배열을 만듭니다.
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  // Provider에 전달할 값들을 객체로 묶습니다.
  // 이제 cart 상태뿐만 아니라 addToCart와 removeFromCart 함수도 전역으로 사용할 수 있습니다.
  const value = { cart, addToCart, removeFromCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// 3. 사용 편의를 위한 커스텀 훅(Custom Hook) 생성
// 이 훅을 사용하면 어떤 컴포넌트에서든 쉽게 CartContext의 값들을 가져올 수 있습니다.
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    // CartProvider 외부에서 useCart를 호출하는 경우 에러를 발생시킵니다.
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}


