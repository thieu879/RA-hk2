import React, { Component } from 'react'
interface posts{
    id: number,
    title: string,
    content: string,
    author: string
}
interface Props{
    posts:posts[]
}
export default class ChildOfBt7 extends Component<Props> {
    render() {
      const {posts} = this.props
    return (
      <div>
        <ol>
                {posts.map(posts => {
                    return <li key={posts.id}>
                    <p>Id:{posts.id}</p>
                    <p>title:{posts.title}</p>
                    <p>content:{posts.content}</p>
                    <p>author:{posts.author}</p>
                </li>
            })}
        </ol>
      </div>
    )
  }
}
