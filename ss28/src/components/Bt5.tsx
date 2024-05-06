import React from 'react';
import ChildOfBt5 from './ChildOfBt5';

const Bt5 = () => {
  const product = {
    id: 1,
    name: 'Nhà',
    price: 1099,
    quantity: 1
  };

  return (
    <div>
      <h2>Bt5</h2>
      <ChildOfBt5 product={product} />
    </div>
  );
};

export default Bt5;
