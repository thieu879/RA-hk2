import React, { useState } from 'react'

export default function Bt3() {
    const  [dateValue,setDateValue] = useState("")
    const chooseDate = (e:React.ChangeEvent<HTMLInputElement>) => {
        let date = e.target.value
        setDateValue(date)
        
    }
  return (
      <div>Bt3:
          <h2>Thời gian:{ dateValue}</h2>
          <input onChange={chooseDate} type="date" />
    </div>
  )
}
