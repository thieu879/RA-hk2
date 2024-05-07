import React, { useState } from 'react'

export default function Bt8() {
    const [count, setNumbers] = useState<number>(0)
    const click = () => {
        setNumbers(count+1)
    }
  return (
      <div>Bt8:
          <br />
          <button onClick={click}>click { count} Lần</button>
    </div>
  )
}
