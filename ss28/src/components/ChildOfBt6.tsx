import React, { Component } from 'react'
interface users{
    id: number,
    name: string,
    address: string,
    email:string
}
interface Props{
    users:users[]
}
export default class ChildOfBt6 extends Component<Props> {
    render() {
      const {users} = this.props
    return (
      <div>
        <ol>
            {users.map(users=>{
                return <li key={users.id}>
                    <p>ID:{ users.id}</p>
                    <p>Name:{ users.name}</p>
                    <p>address:{ users.address}</p>
                    <p>email:{ users.email}</p>
                </li>
            })}
        </ol>
      </div>
    )
  }
}
