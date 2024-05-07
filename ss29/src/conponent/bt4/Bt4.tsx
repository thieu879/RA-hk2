import React, { useState } from 'react'

export default function Bt4() {
    const [valueChoose,setValueChoose] = useState("")
    const choose1 = (e:React.ChangeEvent<HTMLSelectElement>) => {
        let value = e.target.value
        setValueChoose(value)
        
    }
  return (
      <div>Bt4:
          <h2>Tỉnh/Thành Phố: { valueChoose}</h2>
          <select name="" id="" onChange={choose1}>
              <option value=""></option>
              <option value="Hà Nội">Hà Nội</option>
              <option value="Hà Nam">Hà Nam</option>
              <option value="Ninh Bình">Ninh Bình</option>
          </select>
    </div>
  )
}
