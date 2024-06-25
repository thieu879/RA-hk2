import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PostManagement from './pages/admin/PostManagement'
import AddPost from './pages/admin/AddPost'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/admin' element={<PostManagement></PostManagement>}></Route>
        <Route path='/add' element={<AddPost></AddPost>}></Route>
      </Routes>
    </div>
  )
}
