import React from 'react';

export const Item = ({ item, onAdd }) => {
  return (
    <div className="item">
      <img src={item.img} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.price.toLocaleString()}원</p>
      <button onClick={onAdd}>담기</button>
    </div>
  );
};