import { useState } from 'react'

import Home from './Home.jsx'
import Details from './Details.jsx'

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
      <Home setselectedBook={setselectedBook}/>
      <Details/>
      <section id='book-details'>
        <p>Title: {selectedBook.id}</p>  

      </section>
    
    
    </>
  )
}

export default App
