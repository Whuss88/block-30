import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Register = () => {

  const [firstN, setFirstN] = useState('')
  const [ lastN, setLastN] = useState('')
  const [email, setEmail] = useState ('')
  const [password, setPassword] = useState ('')
  const [message, setMessage] = useState('')
  const [token,setToken] = useState('')


  const Navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    
    try {
      const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstname: firstN,
        lastname: lastN,
        email: email,
        password: password,
      })
    })

    const tokenObj = await response.json()
    
    const apiMessage = tokenObj.message
    setMessage(apiMessage)
    const accessToken = tokenObj.token
    setToken(accessToken)
    localStorage.setItem('token', accessToken)

    } catch (error) {
      console.log(error)
    }

  
  }
   
  return(
    <>
      <section id="navbar">
        <button onClick={() => Navigate('/')}>Home</button>  
        <button onClick={() => Navigate('/login')}>Login</button>  

      </section>
      <h3>Register</h3>
       <form id="create" onSubmit={handleSubmit}>
          <input type="text" placeholder="First Name" onChange={(event)=>{setFirstN(event.target.value)}}/>
          <input type="text" placeholder="Last Name" onChange={(event)=>{setLastN(event.target.value)}}/>
          <input type="text" placeholder="Email" onChange={(event)=>{setEmail(event.target.value)}}/>
          <input type="text" placeholder="Password" onChange={(event)=>{setPassword(event.target.value)}}/>
          <button>Submit</button>
        </form>
        

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
export default Register