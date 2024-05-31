import React, { useState, useEffect, useRef } from 'react';

export default function Bt7() {
  const [count, setCount] = useState<number>(0);
  const prevCountRef = useRef(0);

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div>
      Bt7:
      <br />
      Giá  trị trước: {prevCountRef.current}
      <br />
      giá trị hiện tại: {count}
      <br />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
