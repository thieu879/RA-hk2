import React, { Component } from 'react'
import "./Bt10.css"
interface task{
  id: number,
  name: string,
  assign: string,
  status: boolean
  date: string
}
export default class Bt10 extends Component<task> {
  public state: task[];
  constructor(props: any) {
    super(props);
    this.state = [
      {
        id: Math.floor(Math.random() * 100000),
        name: 'Thiết kế giao diện header ',
        assign: 'Nguyễn Văn A',
        status: false,
        date: '21/03/2024 13:12:12'
      },
      {
        id: Math.floor(Math.random() * 100000),
        name: 'Thiết kế giao diện fooder',
        assign: 'Nguyễn Văn B',
        status: true,
        date: '21/03/2024 15:10:50'
      }
    ];
  }
  checkStatus(value: boolean): string{
    if(value){
      return 'button done'
    }
    return 'button notDone'
  }
  render() {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên công việc</th>
              <th>Người thực hiện</th>
              <th>Trạng thái</th>
              <th>Thời gian tạo</th>
              <th colSpan={2}>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {this.state.map((item, index) =>{
              return(
              <tr key={item.id}>
                <td>{index + 1}</td>  
                <td>{item.name}</td>
                <td>{item.assign}</td>
                <td><button className={this.checkStatus(item.status)}>{item.status? 'Hoàn Thành' : 'Chưa Hoàn Thành'}</button></td>
                <td>{item.date}</td>
                <td>
                  <button className='edit'>Sửa</button>
                  <button className='delete'>Xóa</button>
                </td>
              </tr>
              )
            })}
          </tbody>
        </table>
      </>
    )
  }
}