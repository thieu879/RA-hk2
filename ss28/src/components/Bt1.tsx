import React, { Component } from 'react'
interface Person{
    name: string
}
export default class Bt1 extends Component<any,Person> {
    constructor(props:Person){
        super(props)
        this.state = {
            name:"Nguyễn Gia Thiều"
        }
    }
  render() {
    return (
        <>
            Bt1:
            <div>
                Họ và tên: {this.state.name}
            </div>
        </>
    )
  }
}
