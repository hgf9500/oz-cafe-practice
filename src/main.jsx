import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { MenuProvider } from './context/menuContext.jsx';
import { CartProvider } from './context/cartContext.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MenuProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </MenuProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
