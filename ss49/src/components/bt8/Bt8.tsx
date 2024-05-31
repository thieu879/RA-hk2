import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "./Bt8.css"
export default function Bt8() {
  return (
    <div>
        <nav style={{display:"flex", gap:"20px"}}>
            <NavLink to="/BT8/admin">Admin</NavLink>
            <NavLink to="/Bt8/account">Account</NavLink>
            <NavLink to="/Bt8/product">Product</NavLink>
          </nav>
          <Outlet></Outlet>
    </div>
  )
}
