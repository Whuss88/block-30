import { useState } from 'react'

import { useEffect } from "react"

// view details on selected book 

// login to an existing account

// register new account
// Tier 2(second phase)

const App = () => {
  const [Books, setBooks] = useState([])
  // / display all books in catalog
  // create func to async fetch within useEffect so it only runs once and when the state is updated
  useEffect(()=>{
    const fetchBooks =  async () => {
      
      const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books`)
      const responseJson = await response.json() // brings back object called books
      const allBooks = responseJson.books // brings back an array of 50 books
      setBooks(allBooks) // sets the state of books
      console.log(Books) // displayed updated state
    }; 
    fetchBooks()
  }, []);
  
  return (
    <>
      <h1>Book-Buddy</h1>
      <section id='all-books'>
      {
        Books.map((singleBook)=>{
          return (
            <section key={singleBook.id}>
              <h2>{singleBook.title}</h2>
            </section>
          )
        })
      }
      </section>
    </>
  )
}

export default App
