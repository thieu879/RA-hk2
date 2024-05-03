import React from 'react'
export default function Bt2() {
  let a = 10;
  let b = 10;
  function Sum(a:number, b:number) {
    return a+b
  }
  function Subtraction(a:number, b:number) {
    return a-b
  }
  function multiplication(a:number, b:number) {
    return a*b
  }
  function division(a:number, b:number) {
    return a/b
  }
  return (
      <>
        BT2:
        <div>
        <h2>Danh sách kết quả</h2>
        <ul>
          <li>
          {a} + {b} = {Sum(a,b)}
          </li>
          <li>
          {a} - {b} = {Subtraction(a,b)}
          </li>
          <li>
          {a} * {b} = {multiplication(a,b)}
          </li>
          <li>
          {a} / {b} = {division(a,b)}
          </li>
        </ul>
        </div>
      </>
  )
}
