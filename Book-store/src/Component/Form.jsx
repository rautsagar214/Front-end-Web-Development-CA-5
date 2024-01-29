import React from 'react'
import "./Form.css"
import logo from "../Component/fav.webp"

export default function Form() {
  return (
    <div>
      
      <div className='nav'>
          <div  className='logo-div' ><img src={logo}  alt=""  className='logo' /><h1>Kalvium Books</h1></div>
        <div><input type="text" className='Search-bar' placeholder='Search Books' /></div>
        <div><button className='main-Register-btn'>Register</button></div>
      </div>

      <div className='container' >
       <form action="">
       <div className='main' >

      Your Name <input type="text"  placeholder='Name'  required />
      E-mail id <input type="email"  placeholder='email' required />
      Password <input type="Password"  placeholder='password' required />
      Repeat Your Password <input type="password"  placeholder='repeat password' required />

I agree all statement in term of service
<button className='BTN' >Sign-up</button>

  </div>
       </form>
    
       </div>
    </div>
  )
}
