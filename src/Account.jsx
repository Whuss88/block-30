// import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


const Account = ({email, setEmail, password, setPassword, message, setMessage, token, setToken,  firstN, setFirstN, lastN, setLastN}) => {
  const Navigate = useNavigate()
  return (
    <>
    <section id="navbar">
        <button onClick={() => Navigate('/')}>Home</button>  

      </section>
    <h1>Account details</h1>
    
        
        {/* display logout button */}
        {/* will go to either go to home or somwhere */}
        <section id="results">
          <p>Message:{message}</p>
          <p>first name entered:{firstN}</p>
          <p>last name entered:{lastN}</p>
          <p>email:{email}</p>
          <p>password:{password}</p>
         
        </section>
    </>
  )
}
export default Account