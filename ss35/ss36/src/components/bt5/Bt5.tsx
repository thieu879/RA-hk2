import React, { useEffect, useState } from 'react'

export default function Bt5() {
    const [currentTime, setCurrentTime] = useState<Date>(new Date())
    useEffect(() => {
        const timeID = setInterval(() => a(), 1000)
        return () => {
            clearInterval(timeID)
        }
    },[])
    const a = () => {
        setCurrentTime(new Date())
    }
  return (
      <div>
        Bt5:
        <br />
        <p>Thời gian hiện tại: {currentTime.toLocaleTimeString()}</p>
      </div>
  )
}
