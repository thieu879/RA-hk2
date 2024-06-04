import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Bt2() {
  return (
    <div>
        <div>
            <Link to="home1">Home</Link>
            <Link to="about1">About</Link>
            <Link to="contact1">Contact</Link>
          </div>
          <Outlet></Outlet>
    </div>
  )
}

