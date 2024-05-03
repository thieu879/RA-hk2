import React from 'react'
import Header from './Header'
import Menu from './Menu'
import Navbar from './Navbar'
import Carts from './Carts'
import Article from './Article'
export default function Bt8() {
  return (
      <>
        Bt8:
        <div>
            <Header></Header>
        </div>
        <div style={{backgroundColor:"#696969"}}>
            <Navbar></Navbar>
        </div>
        <div style={{display:"flex"}}>
              <div style={{backgroundColor:"#32CD32",width:"20%"}}><Menu></Menu></div>
              <div style={{display:"flex",gap:"10px",padding:"10px",width:"100%",justifyContent:"center",alignItems:"center"}}>
              <div style={{display:"flex", flexDirection:"column",gap:"10px",width:"100%"}}>
                  <Carts></Carts>
                  <Carts></Carts>
                  <Carts></Carts>
                  <Carts></Carts>
              </div>
              <div style={{display:"flex", flexDirection:"column",gap:"10px",width:"100%"}}>
                  <Carts></Carts>
                  <Carts></Carts>
                  <Carts></Carts>
                  <Carts></Carts>
              </div>
              <div style={{display:"flex", flexDirection:"column",gap:"10px",width:"100%"}}>
                  <Carts></Carts>
                  <Carts></Carts>
                  <Carts></Carts>
                  <Carts></Carts>
              </div>
              <div style={{display:"flex", flexDirection:"column",gap:"10px",width:"100%"}}>
                  <Carts></Carts>
                  <Carts></Carts>
                  <Carts></Carts>
                  <Carts></Carts>
              </div>
              </div>
            <div style={{backgroundColor:"#00BFFF",width:"20%"}}><Article></Article></div>
        </div>
      </>
  )
}
