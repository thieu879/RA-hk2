import React, { useState } from 'react'

export default function Bt1() {
    const [name,setName] = useState<string>("Nguyễn Gia Thiều")
  return (
    <div>
          bt1:
          <br />
          <p>Họ và tên: { name}</p>
    </div>
  )
}
