import { createContext, useState } from 'react';
// data.js 파일의 경로가 올바른지 확인해주세요.
// 예: import { data } from '../assets/data';
import { data } from '../data';

// 1. MenuContext 생성
export const MenuContext = createContext();

// 2. Provider 컴포넌트 생성
// 이 컴포넌트는 자식 컴포넌트들에게 menu 상태를 제공합니다.
export function MenuProvider({ children }) {
  // menu 상태를 관리합니다. data.js에서 가져온 초기 데이터를 사용합니다.
  const [menu] = useState(data);

  // Provider는 value prop을 통해 하위 컴포넌트에게 데이터를 전달합니다.
  return (
    <MenuContext.Provider value={{ menu }}>
      {children}
    </MenuContext.Provider>
  );
}