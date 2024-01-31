//Here i had imported   all the thinks like hooks and react etc which  i am going to use 
import React from 'react'
import "./Form.css"
import { useState } from 'react';
import logo from "../Component/fav.webp"
import { BrowserRouter, Link } from 'react-router-dom';



export default function Form() {

  let initialInput = {
    name:"",
    email:"",
    password:"",
    repeatPassword:""
  } 
  let initialErrors = {
    name:"",
    email:"",
    password:"",
    repeatPassword:""
  } 

//here we use the usestate hook to  manupulate the states 
    const [inputData , setinputData] = useState(initialInput)
  const [errors , seterrors] = useState(initialErrors)
  const [registrationSuccess , setRegistrationSuccess] = useState(false)



  let takeInput = (e) =>{
    setinputData((prev)=>({...prev , [e.target.name]:e.target.value}))
  }

  let SubmitForm = (e) =>{
    e.preventDefault()

    let errorMessage = {
      name:"",
      email:"",
      password:"",
      repeatPassword:""
    }

    // validation for name 
    if (/[0-9]/.test(inputData.name)){
      errorMessage.name = "Name should not have number.!"
    }else if(inputData.name.length < 3 || inputData.name.length > 30){
      errorMessage.name = "Name should contain more than 3 and less than 30 letters.!!"
    }

    // validation for password
    if (!/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(inputData.password)){
    errorMessage.password = "Password should contain Special Character"
    }

    // validation for repeat pass 
    if (inputData.password != inputData.repeatPassword){
      errorMessage.repeatPassword = "Password does not match..!"
    }

    seterrors(errorMessage)

    //here we give the conditions and console the inputData 
    if (errorMessage.name === "" && errorMessage.email === "" && errorMessage.password === "" && errorMessage.repeatPassword === ""){
      console.log("hello")
      console.log(inputData)
      setRegistrationSuccess(true)
    }else{
      console.log(errorMessage)
    }
  }

  return (
    <div>
          {/*here  i made the navbar   */}
      <div className='navb'>
        {/* here  using route i am changing the path */}
          <Link className='logo-div'  to={"/"} ><img src={logo}  alt=""  className='logo' /><h1 style={{color:"black"}} >Kalvium Books</h1></Link>
        
        
      </div>
       {/* here is the form  */}
      <div className='container' >
        {/* here inside form using onsubmit for function submitform  */}
        <form onSubmit={SubmitForm}>
          <div className='main' >
        {/* here we are checking is registration is succes or not if succesful then show registration succesful */}
           
            <div  className='green' >{registrationSuccess ? "Registration Successful" : ""}</div>
            Your Name <input type="text" name='name' maxLength={30}  minLength={3} placeholder='Name' onChange={takeInput}/>
            
            {/*here we give eror when input box is empty or doesnot follow the constrain  */}
            <div className='color' >{errors.name}</div>

            {/* here is the input for the email */}
            E-mail id <input type="email" name='email' placeholder='email' onChange={takeInput}/>
            {/*here we give eror when input box is empty or doesnot follow the constrain  */}
            <div className='color' >{errors.email}</div>

            {/* here is the input for the password */}
            Password <input type="Password" name='password' minLength={10} placeholder='password' onChange={takeInput}/>
            {/*here we give eror when input box is empty or doesnot follow the constraint  */}
            <div className='color' >{errors.password}</div>
            
            {/*here is the input for repeat password   */}
            Repeat Your Password <input type="password" name='repeatPassword' minLength={10} placeholder='repeat password' onChange={takeInput}/>
            {/*here we give eror when input box is empty or doesnot follow the constrain  */}
            <div  className='color'  >{errors.repeatPassword }</div>
            I agree all statement in term of service
            <button className='BTN' >Sign-up</button>

          </div>
        </form>

      </div>
    </div>
  )
}
