import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header">
      <h1>OZ Cafe</h1>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">메뉴</Link>
          </li>
          <li>
            <Link to="/cart">장바구니</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};