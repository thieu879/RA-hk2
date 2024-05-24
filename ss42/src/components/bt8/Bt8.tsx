import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
export default function Bt8() {
  return (
    <div>
        Bt8:
        <br />
        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
            >
            <Tab eventKey="home" title="trang chủ">
                Đây là trang chủ
            </Tab>
            <Tab eventKey="profile" title="Giới Thiệu">
                Đây là Giới Thiệu
            </Tab>
            <Tab eventKey="contact" title="Liên Hệ">
                Đây là Liên Hệ
            </Tab>
        </Tabs>
    </div>
  )
}
