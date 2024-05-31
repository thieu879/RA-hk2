import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/bt1/Home'
import Contact from './components/bt2/Contact'
import Bt3 from './components/bt3/Bt3'
import Bt4 from './components/bt4/Bt4'
import Bt5 from './components/bt5/Bt5'
import Bt6 from './components/bt6 + 7/Bt6'
import Contact1 from './components/bt6 + 7/Contact1'
import Home1 from './components/bt6 + 7/Home1'
import Bt8 from './components/bt8/Bt8'
import Admin from './components/bt8/Admin'
import Account from './components/bt8/Account'
import Product from './components/bt8/Product'
import Bt10 from './components/bt10/Bt10'
import RenderUser from './components/bt10/RenderUser'
import HomePage from './components/bt9/HomePage'
import CustomLink from './components/bt9/CustomLink'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Bt3 />} />
        <Route path='/register' element={<Bt4 />} />
        <Route path='*' element={<Bt5 />} />
        <Route path='/Bt6' element={<Bt6 />}>
          <Route path='contact1' element={<Contact1 />} />
          <Route path='home1' element={<Home1 />} />
        </Route>
        <Route path='/Bt8' element={<Bt8 />}>
          <Route path='admin' element={<Admin />} />
          <Route path='account' element={<Account />} />
          <Route path='product' element={<Product />} />
        </Route>
        <Route path='/Bt10' element={<Bt10 />} />
        <Route path='/Bt10/renderUser' element={<RenderUser />} />
        <Route path="/home-page" element={<HomePage></HomePage>} />
        <Route path="/not-found" element={<Bt5></Bt5>} />
        <Route path="/customlink" element={<CustomLink></CustomLink>}></Route>
      </Routes>
    </div>
  )
}
