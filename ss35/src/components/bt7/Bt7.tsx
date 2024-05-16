import React, { useState } from 'react'
export default function Bt7() {
    const [count, setCount] = useState<number>(0)
    const inputText = () => {
        setCount(a=>a+1)
    }
  return (
      <div>
        Bt7:
        <br />
        <textarea onChange={inputText} name="" id=""></textarea>
        <p>số ký tự: {count}</p>
      </div>
  )
}
