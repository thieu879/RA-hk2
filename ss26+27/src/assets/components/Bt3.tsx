import React from 'react'

export default function Bt3() {
    
    type Obj = {
        name: String,
        gen: String,
        birthday: string,
        email: string,
        address: string
    }
    let user: Obj = {
        name: "Nguyễn Văn A",
        gen: "Nam",
        birthday: "06/03/2024",
        email: "nva@gmail.com",
        address: "Thanh Xuân, Hà Nội"
    }
  return (
      <>
          BT3:
          <h2>Thông tin cá nhân</h2>
          <div>
              <ul>
                  <li>
                      Họ và tên: <b>{user.name}</b>
                  </li>
                  <li>
                      Giới tính: <b>{user.gen}</b>
                  </li>
                  <li>
                      Ngày Sinh: <b>{user.birthday}</b>
                  </li>
                  <li>
                      Email: <b>{user.email}</b>
                  </li>
                  <li>
                      Địa chỉ: <b>{user.address}</b>
                  </li>
              </ul>
          </div>
      </>
  )
}
