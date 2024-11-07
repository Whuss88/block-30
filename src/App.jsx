import { useState} from 'react'

import Home from './Home.jsx'
import Details from './Details.jsx'
import { Route, Routes } from 'react-router-dom'

// set paths for home and details 
  // view details on selected book 
    // function for all-book section
      // setselectedBook in func 

// login to an existing account

// register new account
// Tier 2(second phase)

const App = () => {
  const [selectedBook, setselectedBook] = useState ({})
  
  console.log(selectedBook)
  return (
    <>
      <h1>Book-Buddy</h1>
      <Routes>
        <Route path='/' element={ <Home setselectedBook={setselectedBook}/>} />
        <Route path='/details'element={<Details selectedBook={selectedBook}/>} />
      </Routes>
      
     
    
    </>
  )
}

export default App
