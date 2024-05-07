import React, { useState } from 'react';

export default function Bt7() {
  const [numbers, setNumbers] = useState<number[]>([]);

  const add = () => {
    const arrNumber = [1,2,3,4,5];
    setNumbers(arrNumber);
  };

  return (
    <div>Bt7:
      <h2> Mảng số: [{numbers.join(', ')}]</h2>
      <button onClick={add}>Add element</button>
    </div>
  );
}
