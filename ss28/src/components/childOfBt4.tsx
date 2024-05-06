import React, { Component } from 'react'
interface UserName{
  selfName: string
}
export default class childOfBt4 extends Component<UserName> {
  render() {
    const {selfName} = this.props
    return (
      <div>
        Họ và tên bên con:{ selfName}
      </div>
    )
  }
}
