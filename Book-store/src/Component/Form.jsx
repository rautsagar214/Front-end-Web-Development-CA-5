import React from 'react'
import "./Form.css"
import { useState } from 'react';
import logo from "../Component/fav.webp"
import { BrowserRouter, Link } from 'react-router-dom';



export default function Form() {

  const [Name , setName]=useState("")
  const [Email,setEmail]=useState("")
  const [password,setPassword]=(" ")
  const [checkPassword,setCheckpass]=("")
  
  return (
    <div>
      
      <div className='navb'>
          <Link className='logo-div'  to={"/"} ><img src={logo}  alt=""  className='logo' /><h1>Kalvium Books</h1></Link>
        
        
      </div>

      <div className='container' >
       <form   action="">
       <div className='main' >

      Your Name <input type="text"  name='Name' maxLength={30}  minLength={3} placeholder='Name'  required />
      <div>{alert.Name}</div>
      E-mail id <input type="email"  name='Email'   placeholder='email' required />
      <div>{alert.email}</div>
      Password <input type="Password"  name='Password'   minLength={10}       placeholder='password' required />
      <div>{alert.Password}</div>
      Repeat Your Password <input type="password"    name='checkPassword' minLength={10}   placeholder='repeat password' required />
      <div>{alert.checkpassword}</div>
          I agree all statement in term of service
          <button className='BTN' >Sign-up</button>

  </div>
       </form>
    
       </div>
    </div>
  )
}
