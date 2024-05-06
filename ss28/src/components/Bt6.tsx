import React from 'react'
import ChildOfBt6 from './ChildOfBt6'
export default function bt6() {
    const user = [
        {id:1,name:'Nguyễn Gia Thiều',address:'Nam Định',email:"ngt@gmail.com"},
        {id:2,name:'Nguyễn Gia Vải',address:'Nam Định',email:"ngt@gmail.com"},
    ]
  return (
      <div>bt6:
          <ChildOfBt6 users={user}></ChildOfBt6>
    </div>
  )
}
