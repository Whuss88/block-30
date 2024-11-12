import { useState} from 'react'

import Home from './Home.jsx'
import Details from './Details.jsx'
import Register from './Register.jsx'
import Login from './Login.jsx'
import { Route, Routes } from 'react-router-dom'
import Account from './Account.jsx'



// login to an existing account
  // create form 


// Tier 2(second phase)

const App = () => {
  const [selectedBook, setselectedBook] = useState ({})
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [token, setToken] = useState('')
  const [firstN, setFirstN] = useState('')
  const [ lastN, setLastN] = useState('')
  
  return (
    <>
      <h1>Book-Buddy</h1>
      <Routes>
        <Route path='/' element={ <Home setselectedBook={setselectedBook}/>} />
        <Route path='/details'element={<Details selectedBook={selectedBook}/>} />
        <Route path='/register' element={<Register 
        email={email} setEmail={setEmail}
        password={password} setPassword={setPassword}
        message={message} setMessage={setMessage}
        token={token} setToken={setToken}
        firstN={firstN} setFirstN={setFirstN}
        lastN={lastN} setLastN={setLastN}/>}/>
        <Route path='/login' element={<Login
        email={email} setEmail={setEmail}
        password={password} setPassword={setPassword}
        message={message} setMessage={setMessage}
        token={token} setToken={setToken}
        firstN={firstN} setFirstN={setFirstN}
        lastN={lastN} setLastN={setLastN}/>}/>
        <Route path='/account' element={<Account
        email={email} setEmail={setEmail}
        password={password} setPassword={setPassword}
        message={message} setMessage={setMessage}
        token={token} setToken={setToken}
        firstN={firstN} setFirstN={setFirstN}
        lastN={lastN} setLastN={setLastN}/>} />
      </Routes>
      
     
    
    </>
  )
}

export default App
