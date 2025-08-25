import React, { createContext, useState, useContext } from 'react';

// CartContext 생성
export const CartContext = createContext(null);

// CartProvider 컴포넌트: 장바구니 상태와 함수를 제공
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // 장바구니에 상품을 추가하는 함수
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        // 이미 있는 상품이면 수량만 증가
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        // 새로운 상품이면 장바구니에 추가
        return [...prevCart, { id: item.id, quantity: 1 }];
      }
    });
  };

  // 장바구니에서 상품을 제거하는 함수
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook: Context에 쉽게 접근하도록 돕습니다.
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart는 CartProvider 내부에서 사용해야 합니다.');
  }
  return context;
};