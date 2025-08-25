import React from 'react';
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
