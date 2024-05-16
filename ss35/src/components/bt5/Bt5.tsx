import React, { useState } from 'react'

export default function Bt5() {
    const [input, setInput] = useState<string>("");
    const inputText = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }
  return (
      <div>
        Bt5:
        <br />
          <input onChange={inputText} type="text" />
          <p>{input}</p>
      </div>
  )
}
