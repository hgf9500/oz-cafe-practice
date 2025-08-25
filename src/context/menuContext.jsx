import React, { createContext, useState, useEffect, useContext } from 'react';

// MenuContext 생성
export const MenuContext = createContext(null);

// MenuProvider 컴포넌트: 하위 컴포넌트에 메뉴 상태를 제공
export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    // 실제 API 호출을 시뮬레이션하기 위한 더미 데이터
    const dummyMenu = {
      coffee: [
        { id: 'americano', name: '아메리카노', price: 4000, img: 'https://placehold.co/100x100/A0522D/fff?text=Americano' },
        { id: 'latte', name: '카페 라떼', price: 4500, img: 'https://placehold.co/100x100/B0E0E6/fff?text=Latte' },
        { id: 'mocha', name: '카페 모카', price: 5000, img: 'https://placehold.co/100x100/8B4513/fff?text=Mocha' },
      ],
      nonCoffee: [
        { id: 'choco', name: '초코 라떼', price: 5000, img: 'https://placehold.co/100x100/D2B48C/fff?text=Choco' },
        { id: 'greentea', name: '녹차 라떼', price: 5500, img: 'https://placehold.co/100x100/7CFC00/fff?text=Greentea' },
      ],
    };
    setMenu(dummyMenu);
  }, []);

  return (
    <MenuContext.Provider value={{ menu }}>
      {children}
    </MenuContext.Provider>
  );
};

// Custom Hook: Context에 쉽게 접근하도록 돕습니다.
export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu는 MenuProvider 내부에서 사용해야 합니다.');
  }
  return context;
};