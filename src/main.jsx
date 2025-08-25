import React from 'react';

import MenuList from './components/MenuList';
import Cart from './components/Cart';
import './App.css';

function App() {
  // App.jsx에서 직접 관리하던 menu와 cart 상태를 모두 제거합니다.
  // 상태 관리는 이제 각 Context Provider가 담당합니다.
  // 따라서 자식 컴포넌트에게 props를 내려줄 필요가 없습니다.

  return (
    <div className="app-container">
      <header>
        <h1>OZ Cafe</h1>
      </header>
      <main className="main-content">
        {/* props 전달 없이 컴포넌트만 렌더링합니다. */}
        <MenuList />
        <Cart />
      </main>
    </div>
  );
}

export default App;

import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { MenuProvider } from './context/menuContext.jsx';
import { CartProvider } from './context/cartContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* MenuProvider와 CartProvider로 App 컴포넌트를 감싸줍니다. */}
    {/* 이제 App 컴포넌트와 그 모든 자식 컴포넌트들은 menu와 cart 컨텍스트에 접근할 수 있습니다. */}
    <MenuProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </MenuProvider>
  </React.StrictMode>
);

