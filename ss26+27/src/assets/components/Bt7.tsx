import React from 'react'
import Header from './Header'
import Menu from './Menu'
import Main from './Main'
import Footer from './Footer'
export default function Bt7() {
  return (
      <>
        BT7:
      <Header></Header>
      <div style={{display:"flex"}}>
        <div style={{backgroundColor: "#6495ED",height:"300px",width:"100px"}}>
          <Menu></Menu>
        </div>
        <div style={{width:"100%"}}>
          <Main></Main>
          <Footer></Footer>
        </div>
      </div>
      </>
  )
}
