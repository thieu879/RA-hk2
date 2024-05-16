import React, { useState } from 'react'

export default function Bt4() {
    const [toggle, setToggle] = useState<boolean>(true)
    const handleClick = () => {
        setToggle(!toggle)
    }
  return (
      <div>
        Bt4:
        <br />
          <button onClick={handleClick}>{toggle ? "hiện" : "ẩn"}</button>
          <p>{ toggle?"":"tiêu đề văn bản"}</p>
      </div>
  )
}
