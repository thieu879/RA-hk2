import React, { useState } from 'react'

export default function Bt6() {
    const [active, setActive] = useState<boolean>(true)
    const click1 = () => {
        setActive(!active)
    }
  return (
      <div>Bt6:
      <br />
          {active ? <button>hiện</button> : <button>Ẩn</button>}
          <br />
          <button onClick={click1}>click</button>
    </div>
  )
}
