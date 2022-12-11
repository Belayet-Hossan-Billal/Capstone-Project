import React from 'react'
import { Link } from 'react-router-dom'
import './register.css'
const Register = () => {
  return (
    <div>
           <div class="center">
      <h1>Register</h1>
      <form method="post">
        <div class="txt_field">
          <input type="text" required />
          <span></span>
          <label>Username</label>
        </div>
        <div class="txt_field">
          <input type="password" required />
          <span></span>
          <label>Password</label>
        </div>
        
        <div class="txt_field">
          <input type="password" required />
          <span></span>
          <label> Phone Number</label>
        </div>
       
        <input type="submit" value="Register" />
        <div class="signup_link">
          Already Register? <Link to='/login'>Login</Link>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Register