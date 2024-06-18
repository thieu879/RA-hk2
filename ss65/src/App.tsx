import React from 'react'
import Profile from './components/bt1/Profile'
import ListUser from './components/bt2/ListUser'
import ListProduct from './components/bt3/ListProduct'
import Counter from './components/bt4/Counter'

export default function App() {
  return (
    <div>
      <Profile></Profile>
      <br />
      <ListUser></ListUser>
      <br />
      <ListProduct></ListProduct>
      <br />
      <Counter></Counter>
    </div>
  )
}
