import React, { useState, useEffect } from 'react';

export default function Bt9() {
  const [elapsedTime, setElapsedTime] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      Bt9:
      <br />
      Thời gian đã trôi qua: {elapsedTime} giây
    </div>
  );
}
