import React from 'react'

export default function Bt1() {
  let arr:string[] = ["HTML","CSS","Javascipt","ReactJS"]
  return (
    <>
      BT1:
      <div>
        <h2>Danh sách khoá học</h2>
        <ol>
          {arr.map((item) => {
            return <li>{item }</li>
          })}
        </ol>
      </div>
    </>
  )
}
