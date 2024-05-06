import React, { useState } from 'react';
import ChildOfBt4 from './childOfBt4';

const Bt4 = () => {
  // Khởi tạo state
  const [selfName, setSelfName] = useState("Thiều");

  return (
    <>
      <div>Bt4:</div>
      <p>Họ và tên bên cha: { selfName}</p>
      <ChildOfBt4 selfName={selfName} />
    </>
  );
};

export default Bt4;
