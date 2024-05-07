import React from 'react'

export default function Bt1() {
    const clickMe = () => {
        console.log("Clicked");
        
    }
  return (
      <div>Bt1:
          <br />
        <button onClick={clickMe}>Click me</button>    
    </div>
  )
}
