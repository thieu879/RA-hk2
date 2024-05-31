import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Home() {
  return (
      <div>
      <div>Trang chủ nè</div>
      <div style={{display:"flex", gap:"10px"}}>
        <Link to="/">Home</Link>
        <Link to="/contact">contact</Link>
        <Link to="/login">login</Link>
        <Link to="/register">register</Link>
        <Link to="/customlink">
          Nhấn để sang bài 9
        </Link>
      </div>
        <Outlet></Outlet>
    </div>
  )
}
