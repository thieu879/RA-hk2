import React, { useState } from 'react'

export default function Bt2() {
    const [count, setCount] = useState<number>(0)
    const handleClick = () => {
        setCount(count+1)
    }
    document.title = `click ${count} lần`
  return (
      <div>
        Bt2:
        <br />
        <button onClick={handleClick}>click {count} lần</button>
      </div>
  )
}
