import React from 'react'
import "./bt4.scss"
export default function Bt4() {
  return (
    <div>
        <div className="register-container">
      <form className="register-form">
        <h2 className="register-title">Register</h2>
        <div className="form-group">
          <label className="form-label" htmlFor="username">Username</label>
          <input className="form-input" type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="email">Email</label>
          <input className="form-input" type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="password">Password</label>
          <input className="form-input" type="password" id="password" name="password" required />
        </div>
        <button className="register-button" type="submit">Register</button>
        <div className="login-link">
          Already have an account? <a href="/login">Login</a>
        </div>
      </form>
    </div>
    </div>
  )
}
