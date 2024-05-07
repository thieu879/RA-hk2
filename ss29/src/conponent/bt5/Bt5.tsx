import React, { useState } from 'react'

export default function Bt5() {
    const [active,setactive] = useState<boolean>(true)
  return (
      <div>Bt5:
      <br />
          { active?<button>Hiện</button>:<button>Ẩn</button>}
    </div>
  )
}
