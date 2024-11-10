import { useState} from 'react'

import Home from './Home.jsx'
import Details from './Details.jsx'
import Register from './Register.jsx'
import Login from './Login.jsx'
import { Route, Routes } from 'react-router-dom'



// login to an existing account
  // create form 


// Tier 2(second phase)

const App = () => {
  const [selectedBook, setselectedBook] = useState ({})
  
  return (
    <>
      <h1>Book-Buddy</h1>
      <Routes>
        <Route path='/' element={ <Home setselectedBook={setselectedBook}/>} />
        <Route path='/details'element={<Details selectedBook={selectedBook}/>} />
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      
     
    
    </>
  )
}

export default App
