import { useState } from "react"
import { useNavigate } from "react-router-dom"



const Register = () => {
  const [firstN, setFirstN] = useState('')
  const [ lastN, setLastN] = useState('')
  const [email, setEmail] = useState ('')
  const [password, setPassword] = useState ('')
  
  const Navigate = useNavigate()


  const handleSubmit = (event) => {
    console.log(firstN)
    console.log(lastN)
    console.log(email)
    console.log(password)

  
    // console.log(`firstN`)
  }
   
  return(
    <>
    
    <h3>Register</h3>
        <form id="create" onSubmit={handleSubmit()}>
          <input type="text" placeholder="First Name" onChange={(event)=>{setFirstN(event.target.value)}}/>
          <input type="text" placeholder="Last Name" onChange={(event)=>{setLastN(event.target.value)}}/>
          <input type="text" placeholder="Email" onChange={(event)=>{setEmail(event.target.value)}}/>
          <input type="text" placeholder="Password" onChange={(event)=>{setPassword(event.target.value)}}/>
          <button>Submit</button>
        </form>

        <button onClick={() => Navigate('/')}>home</button>  

    
    </>
    
  )
}
export default Register