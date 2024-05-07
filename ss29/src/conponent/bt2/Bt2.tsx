import React, { useState } from 'react'

export default function Bt2() {
  const [inputValue,setInputValue] = useState("")
  const inputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value
    setInputValue(value)
    
  }
  return (
    <div>Bt2:
      <h2>Dữ liệu người dùng nhập vào:{inputValue}</h2>
      <input onChange={inputText} type="text" />
    </div>
  )
}
