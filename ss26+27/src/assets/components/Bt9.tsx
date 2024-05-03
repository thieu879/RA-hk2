import React from 'react'
import Button from './Button'
import "./Bt9.css"
type Info = {
    stt: number,
    name: string,
    date: string,
    sex: string,
    address: string,
}

let infoList = [
    {
        stt: 1,
        name: "Nguyễn Gia Thiều ",
        date: "11/02/2005",
        sex: "Nam",
        address: "Nhà"
    },
    {
        stt: 2,
        name: "Nguyễn Gia Vải",
        date: "11/02/2005",
        sex: "Nam",
        address: "Ngoài đường"
    }
]
export default function Bt9() {

  return (
    <>
      Bt9:
      <table className='table'>
            <tr className='thead'>
                <td>STT</td>
                <td>Họ và tên</td>
                <td>Ngày sinh</td>
                <td>Giới tính</td>
                <td>Địa chỉ</td>
                <td>Hành động</td>
            </tr>
            {infoList.map((info, index) => (
                <tr key={index}>
                    <td>{info.stt}</td>
                    <td>{info.name}</td>
                    <td>{info.date}</td>
                    <td>{info.sex}</td>
                    <td>{info.address}</td>
                    <td><Button></Button></td>
                </tr>
            ))}
        </table>
    </>
  )
}
