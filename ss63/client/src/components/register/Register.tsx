import React, { useEffect } from 'react'
import bcrypt from "bcrypt";
// import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
import axios from 'axios';
export default function Register() {
  useEffect(() => {
    axios.get("http://localhost:8080/user")
    .then()
  })
  useEffect(() => {
    let pass = "12345678"
    bcrypt.hash(pass, 10, function(err, hash) {
    console.log(hash);
    
});
  })
  return (
    <div>
      <label htmlFor="">email</label><br />
      <input type="text" />
      <label htmlFor="">nhập mật khẩu</label><br />
      <input type="text" />
      <label htmlFor="">nhập lại mật khẩu</label><br />
      <input type="text" />
    </div>
  )
}
