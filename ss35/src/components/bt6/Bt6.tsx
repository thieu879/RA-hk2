import React, { useState } from 'react'

export default function Bt6() {
    const [count, setCount] = useState<number>(0)
    const click = () => {
        setCount(count + 1)
    }
  return (
      <div>
        Bt6:
          <br />
          <p>bạn đã click { count} lần</p>
          <button onClick={click}>click</button>
      </div>
  )
}
