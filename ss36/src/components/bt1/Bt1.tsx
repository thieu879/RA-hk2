import React, { useState } from 'react'

export default function Bt1() {
  const [text, setText] = useState<boolean>(true)
  const [input,setInput] = useState<string>("")
  const inputData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(!text)
    setInput(e.target.value)
  }
  document.title = input
  return (
    <div>
      Bt1:
      <br />
      <p>khi {text ? "chưa" : ""} nhập dữ liệu</p>
      <input onChange={inputData} type="text" />
    </div>
  )
}
