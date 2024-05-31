import React from 'react'
import { useLocation } from 'react-router-dom'

export default function RenderUser() {
    const location = useLocation()
    const user = location.state

    return (
        <div>
            <ul style={{ border: "2px black solid", padding: "10px", width:"150px"}}>
                <li>{user.id}</li>
                <li>{user.name}</li>
                <li>{user.email}</li>
                <li>{user.address}</li>
                <button>bấm đi mà</button>
            </ul>
        </div>
    )
}
