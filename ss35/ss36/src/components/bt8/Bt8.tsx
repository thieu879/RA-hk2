import React, { useEffect, useState } from 'react';

export default function Bt8() {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const timeID = setInterval(() => a(), 1000);
    return () => {
      clearInterval(timeID);
    };
  }, []);

  const a = () => {
    setCurrentTime(new Date());
  };

  const getSeason = (month: number): string => {
    if (month >= 1 && month <= 3) {
      return 'Xuân';
    } else if (month >= 4 && month <= 6) {
      return 'Hạ';
    } else if (month >= 7 && month <= 9) {
      return 'Thu';
    } else {
      return 'Đông';
    }
  };

  const currentMonth = currentTime.getMonth() + 1;
  const currentSeason = getSeason(currentMonth);

  return (
    <div>
      Bt8:
      <br />
        <br />
        <p>Thời gian hiện tại: {currentTime.toLocaleDateString(undefined, { month: 'long' })}</p>
        <p>Mùa hiện tại là mùa: {currentSeason}</p>
    </div>
  );
}
