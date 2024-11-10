import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Register from "./Register";

const Home = ({setselectedBook}) => {
  const [Books, setBooks] = useState([])
  const navigate = useNavigate()
 
  // send input to api
  // confirm account was created
  useEffect(()=>{
    const fetchBooks =  async () => {
      
      const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books`)
      const responseJson = await response.json() // brings back object called books
      const allBooks = responseJson.books // brings back an array of 50 books
      setBooks(allBooks) // sets the state of books
      // console.log(Books) // displayed updated state
    }; 
    fetchBooks()
  }, []);


  // search bar should take user input
    // input field for search bar
    // check it against api for matching info
    // if it matches show searchedBook.info etc
    // if not then show <p>book not in database</p>

  return (
    <>
    {/* make nav bar */}
      <Link to="/register" >Register</Link>

     <section id='all-books'>
      {
        Books.map((singleBook)=>{
          return (
            <section key={singleBook.id} onClick={() => {
              setselectedBook(singleBook)
              
              navigate('/details')
            }}>
              <h2>{singleBook.title}</h2>
            </section>
          )
        })
      }
      </section>
      
    </>
  )
}
export default Home