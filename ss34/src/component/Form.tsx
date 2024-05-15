import React from 'react'
import AddStudent from './AddStudent'
import TableStudent from './TableStudent'
import RenderStudent from './RenderStudent'
import FindStudent from './FindStudent'
export default function Form() {
  return (
      <div>
          Quản lý Sinh Viên:
          <br />
      <AddStudent></AddStudent>
      <br />
      <FindStudent></FindStudent>
      <TableStudent></TableStudent>
      
      </div>
  )
}
