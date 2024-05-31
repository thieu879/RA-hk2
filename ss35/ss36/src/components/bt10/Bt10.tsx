import React, { useEffect, useState } from 'react';

export default function Bt10() {
  const [keyInfo, setKeyInfo] = useState<{ keyName: string; keyCode: number }>({ keyName: '', keyCode: 0 });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { key, keyCode } = event;
      setKeyInfo({ keyName: key, keyCode: keyCode });
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>
      Bt10:
      <br />
      <div>
        Tên phím: {keyInfo.keyName}
        <br />
        Mã phím: {keyInfo.keyCode}
      </div>
    </div>
  );
}
