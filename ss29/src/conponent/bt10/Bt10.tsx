import React, { useState } from 'react';

export default function Bt10() {
  const genders = ["Nam", "Nữ", "Khác"];
  const [randomGender, setRandomGender] = useState<string>("Nam");

  const getRandomGender = () => {
    const randomIndex = Math.floor(Math.random() * genders.length);
    setRandomGender(genders[randomIndex]);
  };

  return (
    <div>
      <div>
        Bt10:
        <br />
        <h2>Giới tính hiện tại: {randomGender}</h2>
        <button onClick={getRandomGender}>Random gender</button>
      </div>
    </div>
  );
}
