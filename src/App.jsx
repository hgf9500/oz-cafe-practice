import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header.jsx';
import { Menu } from './components/Menu.jsx';
import { Cart } from './components/Cart.jsx';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;