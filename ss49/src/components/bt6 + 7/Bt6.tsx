import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "./bt6.css"
export default function Bt6() {
  return (
      <>
          <nav style={{display:"flex", gap:"20px"}}>
            <NavLink to="/BT6/home1">home</NavLink>
            <NavLink to="/Bt6/contact1">contact</NavLink>
          </nav>
          <Outlet></Outlet>
    </>
  )
}
