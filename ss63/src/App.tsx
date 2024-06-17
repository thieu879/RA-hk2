import React from 'react'
import Register from './components/register/Register'
import { Route, Routes } from 'react-router-dom'
import LogIn from './components/logIn/LogIn'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element= {<LogIn></LogIn>}/>
        <Route path="/register" element={<Register></Register>} />
      </Routes>
    </div>
  )
}
