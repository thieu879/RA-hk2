import React from 'react'
import ChildOfBt7 from './ChildOfBt7'
export default function bt7() {
    const posts = [
        {id:1,title:"số",content:"1234",author:"Thiều"},
        {id:2,title:"chữ",content:"abcd",author:"Vải"},
    ]
  return (
      <div>bt7:
          <ChildOfBt7 posts={posts}></ChildOfBt7>
    </div>
  )
}
