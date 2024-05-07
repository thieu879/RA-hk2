import React, { useState } from 'react'
interface User{
    Email: string,
    password: string
}
export default function Bt9() {
    const [user, setUser] = useState<User>({
        Email: "",
        password:""
    })
    const inputData = (e:React.ChangeEvent<HTMLInputElement>) => {
        let name = e.target.name
        let value = e.target.value
        setUser({
            ...user,[name]:value
        })
    }
    const submit = () => {
        console.log(user);
        
    }
  return (
      <div>Bt9:
          <br />
          <h3>Form</h3>
          <label htmlFor="">Email</label>
          <input onChange={inputData} name='Email' type="text" />
          <br />
          <label htmlFor="">Mật khẩu</label>
          <input onChange={inputData} name='password' type="text" />
          <br />
          <button onClick={submit}>Submit</button>
          <p>Email: {user.Email}</p>
          <p>Mật khẩu: {user.password}</p>
          
    </div>
  )
}
