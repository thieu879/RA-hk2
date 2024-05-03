import React from 'react'

export default function Bt6() {
  const user = {
    firstName: "Nguyễn Văn",
    lastName: "Nam"
  }
  function formatName(user:any) {
    return user.firstName + " " + user.lastName
  }
  return (
      <>
          BT6:
          <div>
              <b>Họ và tên: {formatName(user)}</b>
          </div>
      </>
  )
}
