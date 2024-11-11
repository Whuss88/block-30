// import { useState } from "react"
import { useNavigate } from "react-router-dom"
// import Account from "./Account"

const Login = ({email, setEmail, password, setPassword, message, setMessage, token, setToken,  firstN, setFirstN, lastN, setLastN}) => {
  const Navigate = useNavigate()
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [message, setMessage] = useState('')
  // const [token,setToken] = useState('')


  const handleSubmit = async (event) => {
    event.preventDefault()
    
    try {
      const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password,
      })
    })

    const tokenObj = await response.json()
    console.log(tokenObj)
    const apiMessage = tokenObj.message
    console.log(apiMessage)
    setMessage(apiMessage)
    const accessToken = tokenObj.token
    console.log(accessToken)
    setToken(accessToken)
    localStorage.setItem('token', accessToken)
    Navigate('/account')

    } catch (error) {
      console.log(error)
    }

  
  }

  return (
    <>
      <section id="navbar">
        <button onClick={() => Navigate('/')}>home</button>  
      </section>

      <h3>loggin in </h3>
      
      {/* section where creditials go */}
      <section id="login-credentials" >
        <form onSubmit={handleSubmit}> 
          {/* input email */}
          <input type="text" placeholder="Enter Email" onChange={(event)=>{setEmail(event.target.value)}}/>
          {/* input password */}
          <input type="text" placeholder="Enter Password"  onChange={(event)=>{setPassword(event.target.value)}}/>
          <button>Login</button>
        </form>
      </section>

      
    </>
  )
}
export default Login